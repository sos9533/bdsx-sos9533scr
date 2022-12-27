import { makeFile } from "../functions";
import { BasicPrefix, BlockColorWordTitle, language, PrefixChatOutputType, PrefixCommand, PrefixCommandExplanation, PrefixCommandType, PrefixLength, Prefix_json, runCommand, SystemMessageTitle, UseBlockColorWord, UsePrefix } from "../setting";
import * as fs from "fs";
import { events } from "bdsx/event";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { CANCEL } from "bdsx/common";
import { command } from "bdsx/command";
import { ActorWildcardCommandSelector, CommandPermissionLevel } from "bdsx/bds/command";
import { CxxString } from "bdsx/nativetype";
import { ServerPlayer } from "bdsx/bds/player";
import { Form } from "bdsx/bds/form";
import { red } from "colors";
import { serverProperties } from "bdsx/serverproperties";
const levelname = serverProperties["level-name"]

makeFile(Prefix_json);

const PrefixData = JSON.parse(fs.readFileSync(Prefix_json, "utf8"));
function savePrefix() {
    fs.writeFileSync(Prefix_json, JSON.stringify(PrefixData), "utf8");
}

if (UsePrefix === true) {
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
        const actor = ni.getActor()!;
        const username = actor.getName();
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
                        const username = player.getName();
                        const target = params.target.newResults(origin)!;
                        const Prefix = params.Prefix;
                        const legnth = target.length;

                        for (let i = 0; i < legnth; i++) {
                            PrefixData[username] = Prefix;
                            savePrefix();
                            if (language === "english") {
                                runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"${SystemMessageTitle} §aprocessed successfully!"}]}`);
                            }
                            if (language === "korean") {
                                runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"${SystemMessageTitle} §a해당유저에게 칭호가 적용됬습니다!"}]}`);
                            }
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
                        if (language === "english") {
                            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §aprocessed successfully!"}]}`);
                        }
                        if (language === "korean") {
                            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §a칭호가 적용됬습니다!"}]}`);
                        }
                    } else {
                        if (language === "english") {
                            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cthe Prefix is too long!"}]}`);
                        }
                        if (language === "korean") {
                            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §c칭호가 너무 깁니다!"}]}`);  
                        }
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
                console.log(red("You are the server console"));
                return;
            }
            const ni = actor.getNetworkIdentifier();
            const username = actor.getName();
            if (language === "english") {
                const res = await Form.sendTo(ni, {
                    type: "custom_form",
                    title: "§l§0Prefix",
                    content: [
                        {
                            type: "input",
                            text: "§l§7what is your Prefix! §l§0[ §gsos9533scr §0]§r ",
                            default: "§7Member",
                        },
                    ],
                });
    
                if (res === null) return;
    
                if (res[0]?.length < PrefixLength && username) {
                    const Prefix = res[0];
                    PrefixData[username] = Prefix;
                    savePrefix();
    
                    runCommand(`playsound random.levelup @a[name="${username}"]`);
                    runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §aprocessed successfully"}]}`);
                } else {
                    runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §cthe Prefix is too long!"}]}`);
                    runCommand(`playsound random.orb @a[name="${username}"]`);
                }
            }
            if (language === "korean") {
                const res = await Form.sendTo(ni, {
                    type: "custom_form",
                    title: "§0칭호",
                    content: [
                        {
                            type: "input",
                            text: "§7사용할 칭호를 입력하세요! §0[ §gsos9533scr §0]§r ",
                            default: "§7일반인",
                        },
                    ],
                });

                if (res === null) return;

                if (res[0]?.length < PrefixLength && username) {
                    const Prefix = res[0];
                    PrefixData[username] = Prefix;
                    savePrefix();
    
                    runCommand(`playsound random.levelup @a[name="${username}"]`);
                    runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §a칭호가 적용됬습니다!"}]}`);
                } else {
                    runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §c칭호가 너무 깁니다!"}]}`);
                    runCommand(`playsound random.orb @a[name="${username}"]`);
                }
            }
        }, {});
    }
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - prefix.ts loaded`.gray)
