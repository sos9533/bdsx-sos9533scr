import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { language, MuteCommand, runCommand, SystemMessageTitle, UnmuteCommand } from "../setting";
const levelname = serverProperties["level-name"]

command.register(MuteCommand, "mute player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();

            runCommand(`tag @a[name="${username}"] add mute`);
            if (language === "english") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f is §cmuted§f by ${origin.getName()}"}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f님이 ${origin.getName()}님에 의해 §c채팅금지§f 조치 되었습니다."}]}`);
            }

            console.log("\x1b[41m", `${username} Mute > [ Muted by ${origin.getName()} ]`, "\x1b[0m");
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

command.register(UnmuteCommand, "unmute player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();

            if (language === "english") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f is §aunmuted§f by ${origin.getName()}"}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f님이 ${origin.getName()}님에 의해 §a채팅금지 해제§f 조치 되었습니다."}]}`);
            }
            runCommand(`tag @a[name="${username}"] remove mute`);
            console.log("\x1b[41m", `${username} UnMute > [ UnMuted by ${origin.getName()} ]`, "\x1b[0m");

        }
    },
    {
        target: PlayerCommandSelector,
    },
);

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - mute.ts loaded`.gray)
