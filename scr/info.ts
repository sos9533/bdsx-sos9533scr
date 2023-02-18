import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { BuildPlatform } from "bdsx/common";
import { serverProperties } from "bdsx/serverproperties";
import { red } from "colors";
import { Translate } from "..";
import { GetInfoCommand, MyInfoCommand, runCommand, SystemMessageTitle, UseGetInfoCommand, UseMyInfoCommand } from "../setting";
const levelname = serverProperties["level-name"];

export const RakPeer = bedrockServer.rakPeer;

if (UseGetInfoCommand) {
    command.register(GetInfoCommand, Translate("command.GetINFOExplanation"), CommandPermissionLevel.Operator).overload(
        (param, origin, output) => {
            if (!origin.getEntity()?.isPlayer()) {
                console.log(red(Translate("error.ConsoleUseCommand")));
                return;
            }

            for (const player of param.target.newResults(origin, ServerPlayer)) {
                const originName = origin.getName();
                const deviceId = player.deviceId;
                const ni = player.getNetworkIdentifier();
                const username = player.getNameTag();
                const xuid = player.getXuid();
                const os = player.getPlatform();
                const address = player.getNetworkIdentifier().address;
                runCommand(
                    `tellraw @a[name="${originName}"] {"rawtext":[{"text":"${SystemMessageTitle} §b${username}§b's INFO\n\n§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${
                        BuildPlatform[os] || "UNKNOWN"
                    }\n§eDeviceID §f: §7${deviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
                );
            }
        },
        {
            target: PlayerCommandSelector,
        },
    );
}

if (UseMyInfoCommand) {
    command.register(MyInfoCommand, Translate("command.GetMyINFOExplanation")).overload((param, origin, output) => {
        const player = origin.getEntity();
        if (!player?.isPlayer()) {
            console.log(red(Translate("error.ConsoleUseCommand")));
            return;
        }

        const username = origin.getName();
        const ni = player.getNetworkIdentifier();
        const address = ni.address;
        const deviceId = player.deviceId;
        const xuid = player.getXuid();
        const os = player.getPlatform();
        runCommand(
            `tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §b${username}§b's INFO\n\n§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${
                BuildPlatform[os] || "UNKNOWN"
            }\n§eDeviceID §f: §7${deviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
        );
    }, {});
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - info.ts loaded`.gray);
