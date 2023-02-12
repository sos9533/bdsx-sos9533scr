import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { Translate } from "..";
import { ChangeTimeCommand_Day, ChangeTimeCommand_Night, runCommand, SystemMessageTitle } from "../setting";
const levelname = serverProperties["level-name"];

command.register(ChangeTimeCommand_Day, Translate("command.ChangeTimeExplanation.day"), CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set day");
    const player = corg.getEntity();

    if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} ${Translate("day.Success")}`);

}, {});

command.register(ChangeTimeCommand_Night, Translate("command.ChangeTimeExplanation.night"), CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set night");
    const player = corg.getEntity();

    if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} ${Translate("night.Success")}`);

}, {});

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - tpa.ts loaded`.gray);
