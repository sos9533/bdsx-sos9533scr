
import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { BuildPlatform } from "bdsx/common";
import { events } from "bdsx/event";
import { kick } from "../functions";
import { green } from "colors";
import { serverProperties } from "bdsx/serverproperties";
import { AntiLongNicknameLength, AntiLongNicknameMessage, AntiLongNicknameTitle, AntiToolboxMessage, AntiToolBoxTitle, runCommand, SystemMessageTitle, UseAntiLongNickname, UseAntiToolbox } from "../setting";
const levelname = serverProperties["level-name"]

export const playerList = new Map<NetworkIdentifier, string>();

events.packetAfter(MinecraftPacketIds.Login).on((ptr, networkIdentifier, packetId) => {
    const connreq = ptr.connreq;
    if (connreq === null) return;
    const cert = connreq.cert;
    const ip = networkIdentifier.getAddress();
    const xuid = cert.getXuid();
    const username = cert.getId();
    const deviceid = connreq.getDeviceId();
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

    console.log(green(`${username}> IP:${ip}, XUID:${xuid}, OS:${BuildPlatform[connreq.getDeviceOS()] || "UNKNOWN"}, Model:${deviceModel}, DeviceID:${deviceid}`));
});



console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - join.ts loaded`.gray)
