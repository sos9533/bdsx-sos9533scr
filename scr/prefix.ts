import { ActorWildcardCommandSelector, CommandPermissionLevel } from "bdsx/bds/command";
import { Form } from "bdsx/bds/form";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { CxxString } from "bdsx/nativetype";
import { serverProperties } from "bdsx/serverproperties";
import { red } from "colors";
import * as fs from "fs";
import { Translate } from "..";
import { makeFile } from "../functions";
import {
    BasicPrefix,
    PrefixChatOutputType,
    PrefixCommand,
    PrefixCommandExplanation,
    PrefixCommandType,
    PrefixLength,
    Prefix_json,
    runCommand,
    SystemMessageTitle,
    UsePrefix,
} from "../setting";
const levelname = serverProperties["level-name"];

makeFile(Prefix_json);

const PrefixData = JSON.parse(fs.readFileSync(Prefix_json, "utf8"));
function savePrefix() {
    fs.writeFileSync(Prefix_json, JSON.stringify(PrefixData), "utf8");
}

if (UsePrefix === true) {
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
        const actor = ni.getActor()!;
        const username = actor.getNameTag();
        const message = ptr.message.replace(/"/gi, `''`);

        if (PrefixChatOutputType === "A") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§f<${PrefixData[username] || BasicPrefix}§f> §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        } else if (PrefixChatOutputType === "B") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§f<${PrefixData[username] || BasicPrefix}§f> §r${ptr.name}§r : ${message}"}]}`);
        } else if (PrefixChatOutputType === "C") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§f[${PrefixData[username] || BasicPrefix}§f] §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        } else if (PrefixChatOutputType === "D") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§f[${PrefixData[username] || BasicPrefix}§f] §r${ptr.name}§r : ${message}"}]}`);
        }
        return CANCEL;
    });

    if (PrefixCommandType === "A") {
        command.register(PrefixCommand, PrefixCommandExplanation, CommandPermissionLevel.Operator).overload(
            (params, origin, output) => {
                if (params.Prefix !== undefined && params.target !== undefined) {
                    for (const player of params.target.newResults(origin, ServerPlayer)) {
                        const username = player.getNameTag();
                        const target = params.target.newResults(origin)!;
                        const Prefix = params.Prefix;
                        const length = target.length;

                        for (let i = 0; i < length; i++) {
                            PrefixData[username] = Prefix;
                            savePrefix();
                            runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("prefix.SetSuccess")}"}]}`);
                            runCommand(`playsound random.levelup @a[name="${origin.getName()}"]`);
                        }
                    }
                }
            },
            {
                target: ActorWildcardCommandSelector,
                Prefix: CxxString,
            },
        );
    }

    if (PrefixCommandType === "B") {
        command.register(PrefixCommand, PrefixCommandExplanation, CommandPermissionLevel.Normal).overload(
            (params, origin, output) => {
                const originName = origin.getName();
                if (params.Prefix !== undefined && origin.getEntity() !== undefined) {
                    const Prefix = params.Prefix;
                    if (Prefix.length < PrefixLength) {
                        PrefixData[originName] = Prefix;
                        savePrefix();
                        runCommand(`playsound random.levelup @a[name="${originName}"]`);
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("prefix.SetSuccess")}"}]}`);
                    } else {
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("prefix.error.TooLongPrefix")}"}]}`);
                        runCommand(`playsound random.orb @a[name="${originName}"]`);
                    }
                }
            },
            {
                Prefix: CxxString,
            },
        );
    }

    if (PrefixCommandType === "C") {
        command.register(PrefixCommand, PrefixCommandExplanation).overload(async (params, origin, output) => {
            const actor = origin.getEntity();
            if (!actor?.isPlayer()) {
                console.log(red(Translate("error.ConsoleUseCommand")));
                return;
            }
            const ni = actor.getNetworkIdentifier();
            const username = actor.getNameTag();

            const res = await Form.sendTo(ni, {
                type: "custom_form",
                title: `§l§0${Translate("prefix.Form.Title")}`,
                content: [
                    {
                        type: "input",
                        text: `§l§7${Translate("prefix.Form.Text")} §l§0[ §gsos9533scr §0]§r `,
                        default: `§7${Translate("prefix.Form.Default")}`,
                    },
                ],
            });

            if (res === null) return;

            if (res[0]?.length < PrefixLength && username) {
                const Prefix = res[0];
                PrefixData[username] = Prefix;
                savePrefix();

                runCommand(`playsound random.levelup @a[name="${username}"]`);
                runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("prefix.SetSuccess")}"}]}`);
            } else {
                runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("prefix.error.TooLongPrefix")}"}]}`);
                runCommand(`playsound random.orb @a[name="${username}"]`);
            }
        }, {});
    }
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - prefix.ts loaded`.gray);
