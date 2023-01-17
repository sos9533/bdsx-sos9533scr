import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { BuildPlatform } from "bdsx/common";
import { GetInfoCommand, language, MyInfoCommand, RakPeer, runCommand, SystemMessageTitle, UseGetInfoCommand, UseMyInfoCommand } from "../setting";
import { red } from "colors";
import { serverProperties } from "bdsx/serverproperties";
const levelname = serverProperties["level-name"];

if (UseGetInfoCommand) {
    command.register(GetInfoCommand, "get player's info", CommandPermissionLevel.Operator).overload(
        (param, origin, output) => {
            if (!origin.getEntity()?.isPlayer()) {
                console.log(red("You are the server console"));
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
                if (language === "english") {
                    runCommand(
                        `tellraw @a[name="${originName}"] {"rawtext":[{"text":"${SystemMessageTitle} §b${username}§b's INFO\n\n§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${
                            BuildPlatform[os] || "UNKNOWN"
                        }\n§eDeviceID §f: §7${deviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
                    );
                }
                if (language === "korean") {
                    runCommand(
                        `tellraw @a[name="${originName}"] {"rawtext":[{"text":"${SystemMessageTitle} §b${username}§b님의 정보\n\n§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${
                            BuildPlatform[os] || "UNKNOWN"
                        }\n§eDeviceID §f: §7${deviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
                    );
                }
            }
        },
        {
            target: PlayerCommandSelector,
        },
    );
}

if (UseMyInfoCommand) {
    command.register(MyInfoCommand, "get my info").overload((param, origin, output) => {
        const player = origin.getEntity();
        if (!player?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        const username = origin.getName();
        const ni = player.getNetworkIdentifier();
        const address = ni.address;
        const deviceId = player.deviceId;
        const xuid = player.getXuid();
        const os = player.getPlatform();

        if (language === "english") {
            runCommand(
                `tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §b${username}§b's INFO\n\n§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${
                    BuildPlatform[os] || "UNKNOWN"
                }\n§eDeviceID §f: §7${deviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
            );
        }
        if (language === "korean") {
            runCommand(
                `tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §b${username}§b님의 정보\n\n§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${
                    BuildPlatform[os] || "UNKNOWN"
                }\n§eDeviceID §f: §7${deviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
            );
        }
    }, {});
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - info.ts loaded`.gray);
