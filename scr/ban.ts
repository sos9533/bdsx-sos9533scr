import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { PlayerPermission, ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { CxxString, int32_t } from "bdsx/nativetype";
import { serverProperties } from "bdsx/serverproperties";
import { red, yellow } from "colors";
import * as fs from "fs";
import { Translate } from "..";
import { dateWithZero, kick, makeDir } from "../functions";
import {
    BanTitle,
    DeviceBanCommand,
    DeviceUnbanCommand,
    DEVICE_ID_FMT_LENGTH,
    DEVICE_ID_FMT_LENGTH_ANDROID,
    language,
    NameBanCommand,
    NameUnBanCommand,
    OfflinePlayerDeviceBanCommand,
    runCommand,
    ShowBanListCommand,
    SystemMessageTitle,
} from "../setting";
import { addlog } from "./log";

const levelname = serverProperties["level-name"];
require("../bds");

makeDir("./banDB");
makeDir("./DbanDB");

events.packetAfter(MinecraftPacketIds.Login).on((pkt, ni) => {
    const connreq = pkt.connreq;
    if (!connreq) return;

    const onlineops = bedrockServer.serverInstance.getPlayers().filter(p => p.getPermissionLevel() === PlayerPermission.OPERATOR);
    const op_count = onlineops.length;

    const username = connreq.cert.getId();
    const deviceId = connreq.getDeviceId();
    let banlist = fs.readdirSync("./banDB/");
    if (banlist.includes(username)) {
        const getbantime = fs.readFileSync(`./banDB/${username}`);
        if (!getbantime) {
            kick(ni, BanTitle);
            for (let i = 0; i < op_count; i++) {
                onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} ${Translate("ban.TriedConnectionNameban")}`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
            addlog(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`);
            return CANCEL;
        }
        const ToString = String(getbantime);
        if (ToString == "null") {
            kick(ni, BanTitle);
            for (let i = 0; i < op_count; i++) {
                onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} ${Translate("ban.TriedConnectionNameban")}`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
            addlog(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`);
            return CANCEL;
        }

        const bandate = ToString.split(`-`);
        const year = Number(bandate[0]);
        const month = Number(bandate[1]);
        const day = Number(bandate[2]);
        const hours = Number(bandate[3]);
        const minutes = Number(bandate[4]);
        const banTime = `${day}/${month}/${year}, ${hours}:${minutes}`;

        const Now = dateWithZero().split("-");
        const nyear = Number(Now[0]);
        const nmonth = Number(Now[1]);
        const nday = Number(Now[2]);
        const nhours = Number(Now[3]);
        const nminutes = Number(Now[4]);

        if (nyear >= year && nmonth >= month && nday >= day && nhours >= hours && nminutes >= minutes) {
            unbanenum.removeValues(username);
            fs.unlink(`./banDB/${username}`, err => {});
            return;
        }
        
        kick(ni, `${BanTitle}\n${Translate("ban.BanExpired")} ${banTime}`);

        for (let i = 0; i < op_count; i++) {
            onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} ${Translate("ban.TriedConnectionNameban")}`);
        }
        console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
        addlog(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`);

        return CANCEL;
    }

    const Dbanlist = fs.readdirSync("./DbanDB");
    if (Dbanlist.includes(deviceId)) {
        const getbantime = fs.readFileSync(`./DbanDB/${deviceId}`);
        if (!getbantime) {
            kick(ni, BanTitle);
            for (let i = 0; i < op_count; i++) {
                onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} ${Translate("ban.TriedConnectionDeviceban")} (${deviceId})`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`));
            addlog(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`);
            return CANCEL;
        }
        const ToString = String(getbantime);
        if (ToString == "null") {
            kick(ni, BanTitle);
            for (let i = 0; i < op_count; i++) {
                onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} ${Translate("ban.TriedConnectionDeviceban")} (${deviceId})`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`));
            addlog(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`);
            return CANCEL;
        }

        const bandate = ToString.split(`-`);
        const year = Number(bandate[0]);
        const month = Number(bandate[1]);
        const day = Number(bandate[2]);
        const hours = Number(bandate[3]);
        const minutes = Number(bandate[4]);
        const banTime = `${day}/${month}/${year}, ${hours}:${minutes}`;

        const Now = dateWithZero().split("-");
        const nyear = Number(Now[0]);
        const nmonth = Number(Now[1]);
        const nday = Number(Now[2]);
        const nhours = Number(Now[3]);
        const nminutes = Number(Now[4]);

        if (nyear >= year && nmonth >= month && nday >= day && nhours >= hours && nminutes >= minutes) {
            unbanenum.removeValues(deviceId);
            fs.unlink(`./DbanDB/${deviceId}`, err => {});
            return;
        }

        kick(ni, `${BanTitle}\n${Translate("ban.BanExpired")} ${banTime}`);

        for (let i = 0; i < op_count; i++) {
            onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} ${Translate("ban.TriedConnectionDeviceban")} (${deviceId})`);
        }
        console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`));
        addlog(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`);
        return CANCEL;
    }
});

const cmd_unban = command.register(NameUnBanCommand, Translate("command.NameUnbanExplanation"), CommandPermissionLevel.Operator);

const unbanenum = command.softEnum("player", fs.readdirSync("./banDB/"));
const dunbanenum = command.softEnum("DeviceID", fs.readdirSync("./DbanDB/"));

cmd_unban.overload(
    (inputs, ni) => {
        const plname = ni.getName();

        if (plname === inputs.player) {
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.Goodluck")}"}]}`);
            return 0;
        }
        if (inputs.player === "") {
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.error.CantFindName")}"}]}`);
            return;
        }

        let banlist = fs.readdirSync("./banDB/");
        if (banlist.includes(inputs.player) === false) {
            if (ni.isServerCommandOrigin() === true) {
                console.log(red(`${inputs.player}${Translate("ban.PlayerAlreadyUnBanned")}`));
                addlog(`${inputs.player}${Translate("ban.PlayerAlreadyUnBanned")}`);
                return CANCEL;
            } else {
                runCommand(
                    `tellraw ${plname} {"rawtext":[{"text":"${SystemMessageTitle} ${inputs.player} ${Translate("ban.PlayerAlreadyUnBanned")}"}]}`,
                );
                return CANCEL;
            }
        } else {
            fs.unlink(`./banDB/${inputs.player}`, err => {});

            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} ${inputs.player} ${Translate("ban.UnBanSuccess")}"}]}`);
            console.log(yellow(`${plname} : ${inputs.player} ${Translate("ban.UnBanSuccess")}`));
            addlog(`${plname} : ${inputs.player} ${Translate("ban.UnBanSuccess")}`);

            unbanenum.removeValues(inputs.player);
        }
    },
    {
        player: unbanenum,
    },
);

command.register(NameBanCommand, Translate("command.NamebanExplanation"), CommandPermissionLevel.Operator).overload(
    (inputs, corg) => {
        const plname = corg.getName();
        const Tname = inputs.player.getName();
        if (Tname === plname) {
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.error.CantBanYourself")}"}]}`);
            return CANCEL;
        }

        if (!Tname) {
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.error.CantFindName")}"}]}`);
            return CANCEL;
        }

        let banlist = fs.readdirSync("./banDB/");
        if (banlist.includes(Tname)) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(`${Tname} ${Translate("ban.PlayerAlreadyBanned")}`));
                addlog(`${Tname} ${Translate("ban.PlayerAlreadyBanned")}`);
                return CANCEL;
            } else {
                console.log(red(`${Tname} ${Translate("ban.PlayerAlreadyBanned")}`));
                addlog(`${Tname} ${Translate("ban.PlayerAlreadyBanned")}`);
                return CANCEL;
            }
        }
        inputs.minutes = inputs.minutes ?? 0;

        const date = new Date();
        date.setMinutes(date.getMinutes() + inputs.minutes);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const time_title = `${day}/${month}/${year}, ${hours}:${minutes}`;
        const time_log = `${year}-${month}-${day}-${hours}-${minutes}`;

        fs.writeFileSync(`./banDB/${Tname}`, time_log);
        console.log(yellow(`${plname} : ${inputs.player.getName()} ${Translate("ban.BanSuccess")}`));
        addlog(`${plname} : ${inputs.player.getName()} ${Translate("ban.BanSuccess")}`);
        runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle}  §l${inputs.player.getName()} ${Translate("ban.BanSuccess")}"}]}`);

        unbanenum.addValues(Tname);
        if (runCommand(`testfor "${Tname}"`).isSuccess()) {
            for (const pl of inputs.player.newResults(corg)) {
                const Ni = pl.getNetworkIdentifier();
                if (!inputs.minutes) {
                    kick(Ni, BanTitle);
                } else {
                    kick(Ni, `${BanTitle}\n${Translate("ban.BanExpired")} ${time_title}`);
                }
                return CANCEL;
            }
        }
    },
    {
        player: PlayerCommandSelector,
        minutes: [int32_t, true],
    },
);

command.register(DeviceBanCommand, Translate("command.DevicebanExplanation"), CommandPermissionLevel.Operator).overload(
    async (inputs, corg) => {
        const originName = corg.getName();
        const targetName = inputs.player.getName();

        if (targetName === originName) {
            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.error.CantBanYourself")}"}]}`);
            return;
        }

        if (!targetName) {
            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.error.CantFindName")}}]}`);
            return;
        }

        const target = corg.getLevel().getPlayerByName(targetName);
        if (!(target instanceof ServerPlayer)) return;
        const deviceId = target.deviceId;

        if (!runCommand(`testfor "${targetName}"`).isSuccess()) {
            runCommand(
                `tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.error.CantFindPlayer")}"}]}`,
            );

            if (corg.isServerCommandOrigin()) {
                runCommand(
                    `tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.error.CantFindPlayer")}"}]}`,
                );
            }
            return;
        }

        inputs.minutes = inputs.minutes ?? 0;

        const bannedPlayers = fs.readdirSync("./banDB/");
        const bannedDevices = fs.readdirSync("./DbanDB/");
        if (bannedPlayers.includes(targetName) || bannedDevices.includes(deviceId)) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(`${targetName} ${Translate("ban.PlayerAlreadyBanned")}`));
                return;
            } else {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${targetName} ${Translate("ban.PlayerAlreadyBanned")}"}]}`);
                return;
            }
        }

        const date = new Date();
        date.setMinutes(date.getMinutes() + inputs.minutes);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const time_title = `${day}/${month}/${year}, ${hours}:${minutes}`;
        const title_log = `${year}-${month}-${day}-${hours}-${minutes}`;

        fs.writeFileSync(`./DbanDB/${deviceId}`, title_log);

        runCommand(`execute as "${originName}" at "${originName}" run playsound random.orb ~ ~ ~ 1 1.5 1`);
        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${targetName} ${Translate("ban.BanSuccess")} (${deviceId})"}]}`);
        console.log(yellow(`${originName} : ${targetName} ${Translate("ban.BanSuccess")} (${deviceId})`));
        addlog(`${originName} : ${targetName} ${Translate("ban.BanSuccess")} (${deviceId})`);

        dunbanenum.addValues(deviceId);
        for (const player of inputs.player.newResults(corg)) {
            const ni = player.getNetworkIdentifier();
            if (!inputs.minutes) {
                kick(ni, BanTitle);
            } else {
                kick(ni, `${BanTitle}\n${Translate("ban.BanExpired")} ${time_title}`);
            }
            return;
        }
    },
    {
        player: PlayerCommandSelector,
        minutes: [int32_t, true],
    },
);

command.register(DeviceUnbanCommand, Translate("command.DeviceUnbanExplanation"), CommandPermissionLevel.Operator).overload(
    (inputs, corg) => {
        const originName = corg.getName();

        if (inputs.DeviceID === "") {
            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.error.CantFindDeviceID")}"}]}`);
            return;
        }

        if (inputs.DeviceID.length !== DEVICE_ID_FMT_LENGTH && inputs.DeviceID.length !== DEVICE_ID_FMT_LENGTH_ANDROID) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(`${Translate("ban.error.CantFinDeviceIDex")}`));
                return;
            } else {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §c${Translate("ban.error.CantFindDeviceID")}"}]}`);
                return;
            }
        }

        let Dbanlist = fs.readdirSync(`./DbanDB/`);
        if (!Dbanlist.includes(inputs.DeviceID)) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(`${inputs.DeviceID} ${Translate("ban.PlayerAlreadyUnBanned")}`));
                return;
            } else {
                runCommand(
                    `tellraw "${originName}" { "rawtext": [{ "text": "${inputs.DeviceID} ${Translate("ban.PlayerAlreadyUnBanned")}" }] }`,
                );
                return;
            }
        } else {
            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${inputs.DeviceID} ${Translate("ban.UnBanSuccess")}"}]}`);
            console.log(yellow(`${originName} : ${inputs.DeviceID} ${Translate("ban.UnBanSuccess")}`));
            addlog(`${originName} : ${inputs.DeviceID} ${Translate("ban.UnBanSuccess")}`);

            fs.unlink(`./DbanDB/${inputs.DeviceID}`, err => {});
            dunbanenum.removeValues(inputs.DeviceID);
        }
    },
    {
        DeviceID: dunbanenum,
    },
);

command.register(ShowBanListCommand, Translate("command.BanListExplanation"), CommandPermissionLevel.Operator).overload((asdf, corg) => {
    const plname = corg.getName();
    const banlist = fs.readdirSync("./banDB/", { withFileTypes: false });
    const Dbanlist = fs.readdirSync("./DbanDB/", { withFileTypes: false });
    if (corg.isServerCommandOrigin()) {
        console.log(yellow(`${Translate("ban.BanList.Name")} ${banlist}`));
        console.log(yellow(`${Translate("ban.BanList.DeviceID")} ${Dbanlist}`));
    } else {
        runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.BanList.Name")} ${banlist}"}]}`);
        runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("ban.BanList.DeviceID")} ${Dbanlist}"}]}`);
    }
}, {});

command.register(OfflinePlayerDeviceBanCommand, Translate("command.OfflinePlayerDeviceBanExplanation"), CommandPermissionLevel.Operator).overload(
    (input, corg) => {
        const originName = corg.getName();
        const input_length = input.deviceId.length;
        const targetDeviceId = input.deviceId;
        if (input_length !== DEVICE_ID_FMT_LENGTH && input_length !== DEVICE_ID_FMT_LENGTH_ANDROID) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(Translate("ban.error.CantFinDeviceIDex")));
                return CANCEL;
            } else {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §c${Translate("ban.error.CantFinDeviceIDex")}`);
                return CANCEL;
            }
        }
        const banlist = fs.readdirSync("./DbanDB/");
        if (banlist.includes(targetDeviceId) === true) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(`${targetDeviceId} ${Translate("ban.PlayerAlreadyBanned")}`));
                return CANCEL;
            } else {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":${SystemMessageTitle} "§cError: ${targetDeviceId} ${Translate("ban.PlayerAlreadyBanned")}"}]}`);
                return CANCEL;
            }
        }

        fs.writeFileSync(`./DbanDB/${targetDeviceId}`, "");
        console.log(yellow(`${originName} : ${targetDeviceId} ${Translate("ban.BanSuccess")}`));
        addlog(`${originName} : ${targetDeviceId} ${Translate("ban.BanSuccess")}`);
    },
    {
        deviceId: CxxString,
    },
);

const RakPeer = bedrockServer.rakPeer;


console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - ban.ts loaded`.gray);
