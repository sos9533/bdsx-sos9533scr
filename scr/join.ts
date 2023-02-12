import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { BuildPlatform } from "bdsx/common";
import { events } from "bdsx/event";
import { serverProperties } from "bdsx/serverproperties";
import { green } from "colors";
import { kick } from "../functions";
import {
    AntiLongNicknameLength,
    AntiLongNicknameMessage,
    AntiLongNicknameTitle,
    AntiToolboxMessage,
    AntiToolBoxTitle,
    runCommand,
    SystemMessageTitle,
    UseAntiLongNickname,
    UseAntiToolbox,
    UseWelcomeMessage,
    WelcomeMessage,
} from "../setting";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

export const playerList = new Map<NetworkIdentifier, string>();

events.packetAfter(MinecraftPacketIds.Login).on((ptr, networkIdentifier, packetId) => {
    const connreq = ptr.connreq;
    if (connreq === null) return;
    const cert = connreq.getCertificate();
    const ip = networkIdentifier.getAddress();
    const xuid = cert.getXuid();
    const username = cert.getId();
    const deviceId = connreq.getDeviceId();
    let deviceModel = connreq.getJsonValue()!["DeviceModel"];

    if (username) playerList.set(networkIdentifier, username);

    if (UseAntiLongNickname) {
        if (username.length > AntiLongNicknameLength) {
            kick(networkIdentifier, AntiLongNicknameTitle);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by anti long nickname ]`, "\x1b[0m");
            runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} ${AntiLongNicknameMessage}"}]}`);
        }
    }

    if (UseAntiToolbox) {
        if (deviceModel.includes("samsung")) {
            kick(networkIdentifier, AntiToolBoxTitle);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by antitoolbox ]`, "\x1b[0m");
            runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} ${AntiToolboxMessage}"}]}`);
        }
    }

    if (deviceModel === "") deviceModel = "No Model";

    console.log(green(`${username}> IP:${ip}, XUID:${xuid}, OS:${BuildPlatform[connreq.getDeviceOS()] || "UNKNOWN"}, Model:${deviceModel}, DeviceID:${deviceId}`));
    addlog(`${username}> IP:${ip}, XUID:${xuid}, OS:${BuildPlatform[connreq.getDeviceOS()] || "UNKNOWN"}, Model:${deviceModel}, DeviceID:${deviceId}`);
});


events.playerJoin.on(ev => {
    const username = ev.player.getNameTag();

    if (UseWelcomeMessage) {
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${WelcomeMessage}"}]}`);
    }
});

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - join.ts loaded`.gray);

