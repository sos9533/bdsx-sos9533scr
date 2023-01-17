import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { ChangeTimeCommand_Day, ChangeTimeCommand_Night, language, runCommand, SystemMessageTitle } from "../setting";
import { serverProperties } from "bdsx/serverproperties";
const levelname = serverProperties["level-name"];

command.register(ChangeTimeCommand_Day, "Change world's time to day", CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set day");
    const player = corg.getEntity();
    if (language === "english") {
        if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} §6Changed server time to day`);
    }
    if (language === "korean") {
        if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} §6서버의 시간 낮으로 변경되었습니다.`);
    }
}, {});

command.register(ChangeTimeCommand_Night, "Change world's time to night", CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set night");
    const player = corg.getEntity();
    if (language === "english") {
        if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} §6Changed server time to night`);
    }
    if (language === "korean") {
        if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} §6서버의 시간이 밤으로 변경되었습니다.`);
    }
}, {});

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - tpa.ts loaded`.gray);
