import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { Translate } from "..";
import { MuteCommand, runCommand, SystemMessageTitle, UnmuteCommand } from "../setting";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

command.register(MuteCommand, Translate("command.MuteExplanation"), CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getNameTag();

            runCommand(`tag @a[name="${username}"] add mute`);
            runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f ${Translate("mute.MuteSuccess")} ${origin.getName()}"}]}`);

            console.log("\x1b[41m", `${username} Mute > [ Muted by ${origin.getName()} ]`, "\x1b[0m");
            addlog(`${username} Muted > [ Muted by ${origin.getName()} ]`);
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

command.register(UnmuteCommand, Translate("command.UnMuteExplanation"), CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getNameTag();

            runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f ${Translate("mute.UnMuteSuccess")} ${origin.getName()}"}]}`);
            runCommand(`tag @a[name="${username}"] remove mute`);
            
            console.log("\x1b[41m", `${username} UnMute > [ UnMuted by ${origin.getName()} ]`, "\x1b[0m");
            addlog(`${username} unMuted > [ unMuted by ${origin.getName()} ]`);
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - mute.ts loaded`.gray);
