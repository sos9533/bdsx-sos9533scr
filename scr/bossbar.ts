import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { BossEventPacket } from "bdsx/bds/packets";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { CxxString, float32_t } from "bdsx/nativetype";
import { serverProperties } from "bdsx/serverproperties";
import { Translate } from "..";
import { RemoveBossBarCommand, SetBossBarCommand } from "../setting";
const levelname = serverProperties["level-name"];

command.register(RemoveBossBarCommand, Translate("command.RemoveBossbarExplanation"), CommandPermissionLevel.Operator).overload(
    (params, origin, output) => {
        for (const target of params.target.newResults(origin, ServerPlayer)) {
            target.removeBossBar();
        }
    },
    {
        target: PlayerCommandSelector,
        title: CxxString,
    },
);

command.register(SetBossBarCommand, Translate("command.SetBossbarExplanation"), CommandPermissionLevel.Operator).overload(
    (params, origin, output) => {
        for (const target of params.target.newResults(origin, ServerPlayer)) {
            let color: BossEventPacket.Colors = BossEventPacket.Colors.Purple;
            if (params.enum === "blue") {
                color = BossEventPacket.Colors.Blue;
            } else if (params.enum === "red") {
                color = BossEventPacket.Colors.Red;
            } else if (params.enum === "green") {
                color = BossEventPacket.Colors.Green;
            } else if (params.enum === "yellow") {
                color = BossEventPacket.Colors.Yellow;
            } else if (params.enum === "purple") {
                color = BossEventPacket.Colors.Purple;
            } else if (params.enum === "white") {
                color = BossEventPacket.Colors.White;
            }
            target.setBossBar(params.title, params.percent, color);
        }
    },
    {
        target: PlayerCommandSelector,
        title: CxxString,
        percent: float32_t,
        enum: command.enum("color", "blue", "red", "green", "yellow", "purple", "white"),
    },
);

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - bossbar.ts loaded`.gray);
