import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { kick } from "../functions";
import { KickCommand, KickTitle, language, runCommand, SystemMessageTitle } from "../setting";
const levelname = serverProperties["level-name"]


command.register(KickCommand, "kick player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();
            const ni = target.getNetworkIdentifier();
            kick(ni, KickTitle);
            if (language === "english") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §c${username}§f is kicked by ${origin.getName()}"}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §c${username}§f님이 ${origin.getName()}님에 의해 강제퇴장 조치 되었습니다."}]}`);
            }

            console.log("\x1b[41m", `${username} kicked > [ Kicked by ${origin.getName()} ]`, "\x1b[0m");
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - kick.ts loaded`.gray)
