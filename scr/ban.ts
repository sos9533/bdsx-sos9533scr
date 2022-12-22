import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { PlayerPermission, ServerPlayer } from "bdsx/bds/player";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { dateWithZero, kick, makeDir } from "../functions";
import { red, yellow } from "colors";
import { command } from "bdsx/command";
import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { CxxString, int32_t } from "bdsx/nativetype";
import * as fs from "fs";
import { BanTitle, DeviceBanCommand, DeviceUnbanCommand, DEVICE_ID_FMT_LENGTH, DEVICE_ID_FMT_LENGTH_ANDROID, language, NameBanCommand, NameUnBanCommand, OfflinePlayerDeivceBanCommand, runCommand, ShowBanListCommand, SystemMessageTitle } from "../setting";
import { serverProperties } from "bdsx/serverproperties";


const levelname = serverProperties["level-name"]
require("../bds");

makeDir("./banDB");
makeDir("./DbanDB");

events.packetAfter(MinecraftPacketIds.Login).on((pkt, ni) => {
    const connreq = pkt.connreq;
    if (!connreq) return;

    const onlineops = bedrockServer.serverInstance.getPlayers().filter((p) => p.getPermissionLevel() === PlayerPermission.OPERATOR);
    const op_count = onlineops.length;

    const username = connreq.cert.getId();
    const deviceId = connreq.getDeviceId();
    let banlist = fs.readdirSync("./banDB/");
    if (banlist.includes(username)) {
        const getbantime = fs.readFileSync(`./banDB/${username}`);
        if (!getbantime) {
            kick(ni, BanTitle);
            for (let i = 0; i < op_count; i++) {
                if (language === "english") {
                    onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} tried connection [Name Ban Player]`);
                }
                if (language === "korean") {
                    onlineops[i].sendMessage(`${SystemMessageTitle} §c${username}님이 접속을 시도하셨습니다. [Name Ban Player]`);
                }

            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
            return CANCEL;
        }
        const ToString = String(getbantime);
        if (ToString == "null") {
            kick(ni, BanTitle);
            for (let i = 0; i < op_count; i++) {
                if (language === "english") {
                    onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} tried connection [Name Ban Player]`);
                }
                if (language === "korean") {
                    onlineops[i].sendMessage(`${SystemMessageTitle} §c${username}님이 접속을 시도하셨습니다. [Name Ban Player]`);
                }
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
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
            fs.unlink(`./banDB/${username}`, (err) => {});
            return;
        }

        if (language === "english") {
            kick(ni, `${BanTitle}\n§fYour ban is expired on ${banTime}`);
        }

        if (language === "korean") {
            kick(ni, `${BanTitle}\n§f차단은 ${banTime} 까지입니다.`);
        }

        for (let i = 0; i < op_count; i++) {
            onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} tried connection [Name Ban Player]`);
        }
        console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
        return CANCEL;
    }

    const Dbanlist = fs.readdirSync("./DbanDB");
    if (Dbanlist.includes(deviceId)) {
        const getbantime = fs.readFileSync(`./DbanDB/${deviceId}`);
        if (!getbantime) {
            kick(ni, BanTitle);
            for (let i = 0; i < op_count; i++) {
                onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} tried connection [Device Ban Player] (${deviceId})`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`));
            return CANCEL;
        }
        const ToString = String(getbantime);
        if (ToString == "null") {
            kick(ni, BanTitle
);
            for (let i = 0; i < op_count; i++) {
                onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} tried connection [Device Ban Player] (${deviceId})`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`));
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
            fs.unlink(`./DbanDB/${deviceId}`, (err) => {});
            return;
        }

        if (language === "english") {
            kick(ni, `${BanTitle}\n§fYour ban is expired on ${banTime}`);
        }

        if (language === "korean") {
            kick(ni, `${BanTitle}\n§f차단은 ${banTime} 까지입니다.`);
        }

        for (let i = 0; i < op_count; i++) {
            onlineops[i].sendMessage(`${SystemMessageTitle} §c${username} tried connection [Device Ban Player] (${deviceId})`);
        }
        console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player] (${deviceId})`));
        return CANCEL;
    }
});




const cmd_unban = command.register(NameUnBanCommand, "unban player's name", CommandPermissionLevel.Operator);

const unbanenum = command.softEnum("player", fs.readdirSync("./banDB/"));
const dunbanenum = command.softEnum("DeviceID", fs.readdirSync("./DbanDB/"));

cmd_unban.overload(
    (inputs, ni) => {
        const plname = ni.getName();

        if (plname === inputs.player) {
            if (language === "english") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} §eGood Luck"}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} §e행운을 빕니다. :)"}]}`);
            }
            return 0;
        }
        if (inputs.player === "") {
            if (language === "english") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: Please type name."}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 이름을 적어주세요."}]}`);
            }
            return;
        }

        let banlist = fs.readdirSync("./banDB/");
        if (banlist.includes(inputs.player) === false) {
            if (ni.isServerCommandOrigin() === true) {
                if (language === "english") {
                    console.log(red(`${inputs.player} is already unbanned\nYou can see banlist using banlist`));
                }
                if (language === "korean") {
                    console.log(red(`${inputs.player}(은)는 이 서버에서 차단되어있지 않습니다\nbanlist로 차단 목록을 확인하세요`));
                }
                return CANCEL;
            } else {
                if (language === "english") {
                    runCommand(`tellraw ${plname} {"rawtext":[{"text":"${SystemMessageTitle} ${inputs.player} is already unbanned\n§cYou can see banlist using §e/banlist"}]}`);
                }
                if (language === "korean") {
                    runCommand(`tellraw ${plname} {"rawtext":[{"text":"${SystemMessageTitle} ${inputs.player}(은)는 이 서버에서 차단되어있지 않습니다\nbanlist로 차단 목록을 확인하세요"}]}`);
                }
                return CANCEL;
            }
        } else {
            fs.unlink(`./banDB/${inputs.player}`, (err) => {});
            if (language === "korean"){
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} 플레이어 ${inputs.player}(을)를 차단해제 했습니다"}]}`);
                console.log(yellow(`${plname} : ${inputs.player}(을)를 차단해제 했습니다`));
            }
            if(language === "english") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} Unbanned ${inputs.player}"}]}`);
                console.log(yellow(`${plname} : Unbanned ${inputs.player}`));
            }

            unbanenum.removeValues(inputs.player);
        }
    },
    {
        player: unbanenum,
    },
);

command.register(NameBanCommand, "ban player's name", CommandPermissionLevel.Operator).overload(
    (inputs, corg) => {
        const plname = corg.getName();
        const Tname = inputs.player.getName();
        if (Tname === plname) {
            if (language === "korean") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} §e자기자신은 가장 소중한 존재입니다"}]}`);
            }
            if (language === "english") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} §l§cYou can't ban yourself"}]}`);
            }
                return CANCEL;
        }

        if (!Tname) {
            if (language === "english") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: Please type name here."}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 이름을 적어주세요"}]}`);
            }
                return CANCEL;
        }

        let banlist = fs.readdirSync("./banDB/");
        if (banlist.includes(Tname)) {
            if (corg.isServerCommandOrigin()) {
                if (language === "english") {
                    console.log(red(`${inputs.player.getName()} is already unbanned`));
                }
                if (language === "korean") {
                    console.log(red(`플레이어 ${Tname}(은)는 이미 차단된 플레이어입니다`));
                }

                return CANCEL;
            } else {
                if (language === "english") {
                    runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${inputs.player.getName()} is already banned}]}`);
                }
                if (language === "korean") {
                    runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} 플레이어 ${Tname}(은)는 이미 차단된 플레이어입니다"}]}`);
                }
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

        if (language === "english") {
            console.log(yellow(`${plname} : Banned ${inputs.player.getName()}`));
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} Banned ${inputs.player.getName()}"}]}`);
        }
        if (language === "korean") {
            console.log(yellow(`${plname} : ${Tname}(을)를 차단했습니다`));
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} 플레이어 ${Tname}(을)를 차단했습니다"}]}`);
        }

        unbanenum.addValues(Tname);
        if (runCommand(`testfor "${Tname}"`).isSuccess()) {
            for (const pl of inputs.player.newResults(corg)) {
                const Ni = pl.getNetworkIdentifier();
                if (!inputs.minutes) {
                    kick(Ni, BanTitle);
                } else {
                    if (language === "english") {
                    kick(Ni, `${BanTitle}\n§fYour ban is expired on ${time_title}`);
                }
                if (language === "korean") {
                    kick(Ni, `${BanTitle}\n§f차단은 ${time_title}§r까지입니다`);
                }
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

command.register(DeviceBanCommand,"Ban player's Device ID",CommandPermissionLevel.Operator,)
    .overload(
        async (inputs, corg) => {
            const originName = corg.getName();
            const targetName = inputs.player.getName();

            if (targetName === originName) {
                if (language === "english") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cYou can't ban yourself"}]}`);
                }
                if (language === "korean") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §e자기자신은 가장 소중한 존재입니다"}]}`);
                }
                return;
            }

            if (!targetName) {
                if (language === "english") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: Please type name here."}]}`);
                }
                if (language === "korean") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 이름을 적어주세요"}]}`);
                }
                    return;
            }

            const target = corg.getLevel().getPlayerByName(targetName);
            if (!(target instanceof ServerPlayer)) return;
            const deviceId = target.deviceId;

            if (!runCommand(`testfor "${targetName}"`).isSuccess()) {
                if (language === "korean") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 해당 명령어는 접속하지 않은 플레이어에겐 사용할 수 없습니다"}]}`,);
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 접속하지 않은 플레이어의 디바이스를 이미 알고있고 차단하고싶다면 "/${OfflinePlayerDeivceBanCommand} <DeviceID>"로 차단 할 수 있습니다"}]}`,);
                }
                if (language === "english") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: You can not use this command for offline player"}]}`);
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: If you know player deviceID use "/${OfflinePlayerDeivceBanCommand} <DeviceID>"}]}`);
                }

                if (corg.isServerCommandOrigin()) {
                    if (language === "korean") {
                        console.log(red("Error: 해당 명령어는 접속하지 않은 플레이어에겐 사용할 수 없습니다"));
                        console.log(yellow(`접속하지 않은 플레이어의 디바이스를 이미 알고있고 차단하고싶다면 "${OfflinePlayerDeivceBanCommand} <DeviceID>"`));
                    }
                    if (language === "english") {
                        console.log(red("Error: You can not use this command for offline player"));
                        console.log(yellow(`If you know player device ID use "${OfflinePlayerDeivceBanCommand} <DeviceID>"`));
                    }
                }
                return;
            }

            inputs.minutes = inputs.minutes ?? 0;

            const bannedPlayers = fs.readdirSync("./banDB/");
            const bannedDevices = fs.readdirSync("./DbanDB/");
            if (bannedPlayers.includes(targetName) || bannedDevices.includes(deviceId)) {
                if (corg.isServerCommandOrigin()) {
                    if (language === "english") {
                        console.log(red(`${targetName} is already banned`));
                    }
                    if (language === "korean") {
                        console.log(red(`플레이어 ${targetName}(은)는 이미 차단된 플레이어입니다`));
                    }
                    return;
                } else {
                    if (language === "english") {
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} ${targetName} is already banned"}]}`);
                    }
                    if (language === "korean") {
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} 플레이어 ${targetName}(은)는 이미 차단된 플레이어입니다"}]}`,);
                    }
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
            if (language === "korean") {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} 플레이어 ${targetName}(을)를 차단했습니다 (${deviceId})"}]}`);
                console.log(yellow(`${originName} : ${targetName}(을)를 차단했습니다 (${deviceId})`));
            }
            if (language === "english") {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} Banned ${targetName} (${deviceId})"}]}`);
                console.log(yellow(`${originName} : Banned ${targetName} (${deviceId})`));
            }
            dunbanenum.addValues(deviceId);
            for (const player of inputs.player.newResults(corg)) {
                const ni = player.getNetworkIdentifier();
                if (!inputs.minutes) {
                    kick(ni, BanTitle);
                } else {
                    if (language === "english") {
                        kick(ni, `${BanTitle}\n§fYour ban is expired on ${time_title}`);
                    }
                    if (language === "korean") {
                        kick(ni, `${BanTitle}\n§f차단은 ${time_title}§r까지입니다`);
                    }
                }
                return;
            }
        },
        {
            player: PlayerCommandSelector,
            minutes: [int32_t, true],
        },
    );

command.register(DeviceUnbanCommand, "Unban player's device ID", CommandPermissionLevel.Operator).overload(
    (inputs, corg) => {
        const originName = corg.getName();

        if (inputs.DeviceID === "") {
            if (language === "korean") {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 이름을 적어주세요"}]}`);
            }
            if (language === "english") {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: Please type device id here"}]}`);
            }
            return;
        }
        if (inputs.DeviceID.length !== DEVICE_ID_FMT_LENGTH && inputs.DeviceID.length !== DEVICE_ID_FMT_LENGTH_ANDROID) {
            if (corg.isServerCommandOrigin()) {
                if (language === "english") {
                    console.log(red("Error: This command needs only device ID (Example : aa12aaa3-abc4-567a-b890-12c34dc567e8"));
                }
                if (language === "korean") {
                    console.log(red("Error: 해당 명령어는 DeviceID만 입력할 수 있습니다 (DeviceID의 예시 : aa12aaa3-abc4-567a-b890-12c34dc567e8"));
                }
                return;
            } else {
                if (language === "english") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: This command needs only device ID"}]}`);
                }
                if (language === "korean") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 해당 명령어는 DeviceID만 입력할 수 있습니다"}]}`);
                }
                return;
            }
        }

        let Dbanlist = fs.readdirSync(`./DbanDB/`);
        if (!Dbanlist.includes(inputs.DeviceID)) {
            if (corg.isServerCommandOrigin()) {
                if (language === "english") {
                    console.log(red(`${inputs.DeviceID} is already unbanned\nYou can see banlist using banlist`));
                }
                if (language === "korean") {
                    console.log(red(`${inputs.DeviceID}(은)는 이 서버에서 차단되어있지 않습니다\nbanlist로 차단 목록을 확인하세요`));
                }
                return;
            } else {
                if (language === "english") {
                    runCommand(`tellraw "${originName}" { "rawtext": [{ "text": "${inputs.DeviceID} is already unbanned\n§cYou can see banlist using §e/banlist" }] }`,);
                }
                if (language === "korean") {
                    runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §c${inputs.DeviceID}(은)는 이 서버에서 차단되어있지 않습니다\n§e/banlist §c로 차단 목록을 확인하세요"}]}`,);
                }
                return;
            }
        } else {
            if (language === "english") {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"Unbanned device ID ${inputs.DeviceID}"}]}`);
                console.log(yellow(`${originName} : ${inputs.DeviceID}(을)를 차단해제 했습니다`));
            }
            if (language === "korean") {
                runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} 디바이스 아이디 ${inputs.DeviceID}(을)를 차단해제 했습니다"}]}`);
                console.log(yellow(`${originName} : Unbanned device ID ${inputs.DeviceID}`));
            }
            fs.unlink(`./DbanDB/${inputs.DeviceID}`, (err) => {});
            dunbanenum.removeValues(inputs.DeviceID);
        }
    },
    {
        DeviceID: dunbanenum,
    },
);

command.register(ShowBanListCommand, "Shows server ban list", CommandPermissionLevel.Operator).overload((asdf, corg) => {
    const plname = corg.getName();
    const banlist = fs.readdirSync("./banDB/", { withFileTypes: false });
    const Dbanlist = fs.readdirSync("./DbanDB/", { withFileTypes: false });
    if (corg.isServerCommandOrigin()) {
        if (language === "english") {
            console.log(yellow(`Name ban list : ${banlist}`));
            console.log(yellow(`Device ban list : ${Dbanlist}`));
        }
        if (language === "korean") {
            console.log(yellow(`닉네임 차단된 플레이어 목록 : ${banlist}`));
            console.log(yellow(`디바이스 차단된 플레이어 목록 : ${Dbanlist}`));  
        }
    } else {
        if (language === "english") {
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} Name ban list : ${banlist}"}]}`);
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} Device ban list : ${Dbanlist}"}]}`); 
        }
        if (language === "korean") {
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} 차단된 플레이어 목록 : ${banlist}"}]}`);
            runCommand(`tellraw "${plname}" {"rawtext":[{"text":"${SystemMessageTitle} 디바이스 차단된 플레이어 목록 : ${Dbanlist}"}]}`);
        }
    }
}, {});

command.register(OfflinePlayerDeivceBanCommand,"device ban even if the player is offline",CommandPermissionLevel.Operator,)
    .overload(
        (input, corg) => {
            const originName = corg.getName();
            const input_length = input.deviceId.length;
            const targetDeviceId = input.deviceId;
            if (input_length !== DEVICE_ID_FMT_LENGTH && input_length !== DEVICE_ID_FMT_LENGTH_ANDROID) {
                if (corg.isServerCommandOrigin()) {
                    if (language === "english") {
                        console.log(red("Error: This commmand needs only device ID (Example : aa12aaa3-abc4-567a-b890-12c34dc567e8"));
                    }
                    if (language === "korean") {
                        console.log(red("Error: 해당 명령어는 DeviceID만 입력할 수 있습니다 (DeviceID의 예시 : aa12aaa3-abc4-567a-b890-12c34dc567e8"));
                    }

                    return CANCEL;
                } else {
                    if (language === "english") {
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: This commmand needs only device ID"}]}`);
                    }
                    if (language === "korean") {
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 해당 명령어는 DeviceID만 입력할 수 있습니다"}]}`);
                    }
                    return CANCEL;
                }
            }
            const banlist = fs.readdirSync("./DbanDB/");
            if (banlist.includes(targetDeviceId) === true) {
                if (corg.isServerCommandOrigin()) {
                    if (language === "english") {
                        console.log(red(`${targetDeviceId} is already banned`));
                    }
                    if (language === "korean") {
                        console.log(red(`디바이스 ${targetDeviceId}(은)는 이미 차단되어있습니다`));
                    }
                    return CANCEL;
                } else {
                    if (language === "english") {
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":${SystemMessageTitle} "§cError: ${targetDeviceId} is already banned"}]}`);
                    }
                    if (language === "korean") {
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cError: 디바이스 ${targetDeviceId}(은)는 이미 차단되어있습니다"}]}`,);
                    }
                    return CANCEL;
                }
            }

            fs.writeFileSync(`./DbanDB/${targetDeviceId}`, "");
            if (language === "english") {
                console.log(yellow(`${originName} : banned ${targetDeviceId}`));
            }
            if (language === "korean") {
                console.log(yellow(`${originName} : ${targetDeviceId}(을)를 차단했습니다`));
            }

        },
        {
            deviceId: CxxString,
        },
    );

const RakPeer = bedrockServer.rakPeer;

if (language === "english") {
    command.register("sos9533scr", "§r§l§fThis server is using sos9533scr - §cCopyright (c) 2022 sos9533§r", CommandPermissionLevel.Normal).overload((param, origin, output) => {
        if (origin.isServerCommandOrigin()) {
            output.success("");
        } else {
            runCommand(
                `tellraw "${origin.getName()}" {"rawtext":[{"text":"§l${SystemMessageTitle}§l\nDownload : https://github.com/sos9533/bdsx-sos9533scr \nMade by sos9533, mdisprgm, job-gut, Blue00123, kdg7313\nDiscord : sos9533#9533"}]}`,
            );
            output.success("");
        };
    }, {});
}

if (language === "korean") {
    command.register("sos9533scr", "§r§l§f이 서버는 sos9533scr 플러그인을 사용중입니다. - §cCopyright (c) 2022 sos9533§r", CommandPermissionLevel.Normal).overload((param, origin, output) => {
        if (origin.isServerCommandOrigin()) {
            output.success("");
        } else {
            runCommand(
                `tellraw "${origin.getName()}" {"rawtext":[{"text":"§l${SystemMessageTitle}§l\n다운로드 : https://github.com/sos9533/bdsx-sos9533scr \nMade by sos9533, mdisprgm, job-gut, Blue00123, kdg7313\n디스코드 : sos9533#9533"}]}`,
            );
            output.success("");
        };
    }, {});
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - ban.ts loaded`.gray)
