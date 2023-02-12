import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { Translate } from "..";
import { kick } from "../functions";
import { KickCommand, runCommand, SystemMessageTitle } from "../setting";
const levelname = serverProperties["level-name"];

command.register(KickCommand, Translate("command.KickExplanation"), CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getNameTag();
            const ni = target.getNetworkIdentifier();

            const KickTitle = Translate("kick.KickTitle")
            kick(ni, KickTitle);
            runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §c${username}§f ${Translate("kick.KickMessage")} ${origin.getName()}"}]}`);

            console.log("\x1b[41m", `${username} kicked > [ Kicked by ${origin.getName()} ]`, "\x1b[0m");
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - kick.ts loaded`.gray);
