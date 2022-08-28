//  _______  _______  _______   _____   _______  ______   ______
// (  ____ \(  ___  )(  ____ \ / ___ \ (  ____ \/ ___  \ / ___  \
// | (    \/| (   ) || (    \/( (   ) )| (    \/\/   \  \\/   \  \
// | (_____ | |   | || (_____ ( (___) || (____     ___) /   ___) /
// (_____  )| |   | |(_____  ) \____  |(_____ \   (___ (   (___ (
//       ) || |   | |      ) |      ) |      ) )      ) \      ) \
// /\____) || (___) |/\____) |/\____) )/\____) )/\___/  //\___/  /
// \_______)(_______)\_______)\______/ \______/ \______/ \______/

//  Made by sos9533

// This code was created by a beginner. Plz dont laugh...

/*
    How to use (README.md)
     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/README.md
    About Copyright (LICENSE.md)
     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/LICENSE.md
    If you hold ctrl and click the link, it will take you right there.
*/

/////////////////////////////////////////////////////////////////////

// Change the content and save it by pressing ctrl + s.

/////////////////////////////////////////////////////////////////////

//Join Event

//use welcomemessage (true/false)
let usewelcomemessage: boolean = true;

//welcomemessage
const welcomemessage = "§l§7welcome! this is steve's server!";

/////////////////////////////////////////////////////////////////////

//OP Command

//kick command (with out /) - For OP
const kickcommand = "kickout";

//kick message
const kicktitle = "§l§f[ §7Kick §f]\n\n§cYou are kicked from server\n§7You can join the server again";

//mute command (with out /) - For OP
const mutecommand = "mute";

//unmute command (with out /) - For OP
const unmutecommand = "unmute";

//Device ban command (with out /) - For OP
const Devicebancommand = "ban-device";

//unban device command (with out /) - For OP
const Deviceunbancommand = "unban-device";

//ban command (with out /) - For OP
const bancommand = "ban";

//unban command (with out /) - For OP
const unbancommand = "unban";

//ban list command (with out /) - For OP
const showbanlistcommand = "banlist";

//Offline Player Device Ban command [Only DeviceID] (with out /) - For OP
const OfflinePlayerDeivceBanCommand = "offline-ban-device";

const DEVICE_ID_FMT_LENGTH = 36;
const DEVICE_ID_FMT_LENGTH_ANDROID = 32;

//ban message
const bantitle = "§l§f[ §cBAN §f]\n\n§cYou are banned from this server\n§7You can't join the server again";

//use get info command (true/false) (All OP can get user info(IP,Devcie ID,OS,Ping))
let usegetinfocommand: boolean = true;

//get info command (with out /) - For OP
const getinfocommand = "getinfo";

/////////////////////////////////////////////////////////////////////

//User Command

//use my info command (true/false) (All user can get their info(IP,Devcie ID,OS,Ping))
let usemyinfocommand: boolean = true;

//my info command (with out /) - For User
const myinfocommand = "myinfo";

//use spawn command (true/false)
let usespawncommand: boolean = true;

//spawn command (with out /) - For User
const spawncommand = "spawn";

//spawn coordinate (x y z)
const spawncoordinate = "0 10 0";

//spawn warp message
const spawncommandtitle = "§l§eWarp Complete!";

//use tp command A (true/false)
let usestpcommandA: boolean = false;
//tp command A (with out /) - For user
const tpcommandA = "tpA";
//tp command A explanation
const tpcommandexplanationA = "tp to A";
//tp command A coordinate (x y z)
const tpcoordinateA = "100 10 100";
//tp command A warp message
const tpcommandtitleA = "§l§eWarp Complete!";

//use tp command B (true/false)
let usestpcommandB: boolean = false;
//tp command B (with out /) - For user
const tpcommandB = "tpB";
//tp command B explanation
const tpcommandexplanationB = "tp to B";
//tp command B coordinate (x y z)
const tpcoordinateB = "100 10 100";
//tp command B warp message
const tpcommandtitleB = "§l§eWarp Complete!";

//use tp command C (true/false)
let usestpcommandC: boolean = false;
//tp command C (with out /) - For user
const tpcommandC = "tpC";
//tp command C explanation
const tpcommandexplanationC = "tp to C";
//tp command A coordinate (x y z)
const tpcoordinateC = "100 10 100";
//tp command A warp message
const tpcommandtitleC = "§l§eWarp Complete!";

//use sethome command (true/false)
let usesethomecommand: boolean = true;

//sethome command (with out /) - For user
const sethomecommand = "sethome";

//home command (with out /) - For user
const homecommand = "home";

//use tpa command (true/false)
let usetpacommand: boolean = true;

//tpa command (with out /) - For user
const tpacommand = "tpa";

//tpaccept command (/with out /) - For user
const tpacceptcommand = "tpaccept";

//use basic item command (true/false)
let usebasicitemcommand: boolean = true;

//basic item command (with out /) - For User
const basicitemcommand = "item";

//give basic item when player join the server first time (true/false)
let joingivebasicitem: boolean = true;

//item A
const basicitemA = "wooden_sword 1";
//item B
const basicitemB = "wooden_axe 1";
//item C
const basicitemC = "wooden_pickaxe 1";
//item D
const basicitemD = "wooden_hoe 1";
//item E
const basicitemE = "wooden_shovel 1";
//item F
const basicitemF = "leather_chestplate 1";
//item G
const basicitemG = "leather_leggings 1";
//item H
const basicitemH = "cooked_beef 64";

/////////////////////////////////////////////////////////////////////

//Prefix

//use prefix
let usechin: boolean = true;

//output style
//style A     <prefix> <Name> : message
//style B     <prefix> Name : message
//style C     [prefix] <Name> : message
//style D     [prefix] Name : message
let chinchatset = "A";

//How to use prefix
//style A     OP(command) set user's prefix - /prefix (name) "(prefix)"
//style B     Any user can set their prefix - /prefix "(prefix)"
//style C     Any user can set their prefix by UI - /prefix
let howusechin = "A";

//prefix command (with out /)
const chincommand = "prefix";

//prefix command explanation
const chincommandexplanation = "set prefix";

//prefix max length  (not include 'How to use' style A)
const chinlength = 10;

//basic prefix - output this when someone don't have any prefix
const basicchin = "§l§7Member";

/////////////////////////////////////////////////////////////////////

//Anti Hacker

//kick toolbox user, when join (true/false)
let usetoolboxkick: boolean = true;

//toolbox - kick message - output all player
const toolboxkickmessage = "§l§eKicked toolbox";

//toolbox - kick message - output kicked player
const toolboxkicktitle = "§l§f[ §7Kick §f]\n\n§cDon't use ToolBox";

//use kick long name (true/false)
let uselongnicknamekick: boolean = true;

//long name kick length
const longnicknamekicklength = 30;

//long nickname - kick message - output all player
const longnicknamekickmessage = "§l§eKicked long nickname";

//long nickname - kick message - output kicked player
const longnicknamekicktitle = "§l§f[ §7Kick §f]\n\n§cyou use too long nickname";

//use chatcut (true/false)
let usechatcut: boolean = true;

//chatcut length - recommneded 1000
const chatcutmessagelength = 100;

//chatcut speedchat - ms(recommended 1000)
const chatcutmessagespeedtime = 1000;

//chatcut message - too long chat
const chatcutlongtitle = "§l§cYour chat is too long!";

//chatcut message - too fast chat
const chatcutspeedtitle = "§l§cYour chat is too fast!";

//chatcut message - same chat
const chatcutsametitle = "§l§cDo not send same chat!";

//whisper chatcut (to block /w @a @e @e @e @e @e @e @e)
const wcutmessagelength = 30;

//whisper chatcut message
const nowhispermessge = "§l§cYou can't chat long message by whisper";

//chatcut open source ( https://github.com/kdg7313/bdsx-script )

//use anti crasher (true/false)
let useanticrasher: boolean = true;

//anti crasher kick message - output kicked player
const anticrasherkicktitle = "§l§f[ §7Kick §f]\n\n§cDon't use crasher";

//anti crasher open source (MIT) ( https://github.com/mdisprgm/bdsx-anticrasher )

/////////////////////////////////////////////////////////////////////

//etc

//block § (true/false)
let useblockcolorword: boolean = false;

//block § message
const blockcolorwordtitle = "§l§ccolor word is not allowed";

//set bossbar command (with out /)
const setbossbarcommand = "setbossbar";

//remove bossbar command (with out /)
const removebossbarcommand = "removebossbar";

//use cps actionbar (true/false) - Even if it is false, the cps scoreboard object remains and works fine.
let cpsactionbar: boolean = true;

/////////////////////////////////////////////////////////////////////

import { ActorWildcardCommandSelector, CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { Form } from "bdsx/bds/form";
import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { ActorEventPacket, BossEventPacket } from "bdsx/bds/packets";
import { PlayerPermission, ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { BuildPlatform, CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { CxxString, float32_t, int32_t } from "bdsx/nativetype";
import { gray, green, red, yellow } from "colors";
import * as fs from "fs";

const chin_json = "chin.json";
const sethome_json = "sethome_pos.json";
function mkFileKeep(filepath: string, value = {}) {
    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(filepath, JSON.stringify(value));
        console.log("[", "sos9533scr".yellow, "]", `Made '${filepath}'`.gray, " - sos9533".green);
    }
}

function mkdir(dirname: string) {
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
}

mkdir("./banDB");
mkdir("./DbanDB");

console.log("[", "sos9533scr".yellow, "] allocated", " - sos9533".green);

events.serverOpen.on(() => {
    console.log("[", "sos9533scr".yellow, "] launching", " - sos9533".green);
});

events.serverClose.on(() => {
    console.log("[", "sos9533scr".yellow, "] closed", " - sos9533".red);
});

export const playerList = new Map<NetworkIdentifier, string>();
const runCommand = bedrockServer.executeCommand;

runCommand(`scoreboard objectives add cps dummy`);

events.packetAfter(MinecraftPacketIds.Login).on((ptr, networkIdentifier, packetId) => {
    const ip = networkIdentifier.getAddress();
    const connreq = ptr.connreq;
    if (connreq === null) return;
    const cert = connreq.cert;
    const xuid = cert.getXuid();
    const username = cert.getId();
    const deviceModel = connreq.getJsonValue()!["DeviceModel"];

    if (username) playerList.set(networkIdentifier, username);

    if (uselongnicknamekick) {
        if (username.length > longnicknamekicklength) {
            kick(networkIdentifier, longnicknamekicktitle);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by long nickname ]`, "\x1b[0m");
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${longnicknamekickmessage}"}]}`);
        }
    }

    if (usetoolboxkick) {
        if (deviceModel.includes("samsung")) {
            kick(networkIdentifier, toolboxkicktitle);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by toolbox ]`, "\x1b[0m");
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${toolboxkickmessage}"}]}`);
        }
    }

    console.log(green(`${username}> IP:${ip}, XUID:${xuid} OS:${BuildPlatform[connreq.getDeviceOS()] || "UNKNOWN"}`));
});

events.networkDisconnected.on((networkIdentifier) => {
    const username = playerList.get(networkIdentifier);
    playerList.delete(networkIdentifier);
    console.log(red(`${username}> Exit server`));
});

events.playerJoin.on((ev) => {
    const username = ev.player.getName();

    if (usewelcomemessage) {
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${welcomemessage}"}]}`);
    }

    if (usebasicitemcommand) {
        if (joingivebasicitem) {
            runCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemA}`);
            runCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemB}`);
            runCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemC}`);
            runCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemD}`);
            runCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemE}`);
            runCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemF}`);
            runCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemG}`);
            runCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemH}`);
            runCommand(`tag @a[name="${username}",tag=!joinbasicitem] add joinbasicitem`);
        }
        runCommand(`ability @a[name="${username}",tag=mute] mute true`);
    }
});

events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const message = ptr.message.replace(/"/g, "'");
    const username = ni.getActor()!.getName();

    console.log(gray(`[${month}/${day}/${hours}/${minutes}/${seconds}] <${username}> : ${message}`));
});

events.packetAfter(MinecraftPacketIds.CommandRequest).on((pkt, ni, id) => {
    const message = pkt.command;

    if (message.startsWith("/")) {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const username = ni.getActor()?.getName();

        console.log(gray(`[${month}/${day}/${hours}:${minutes}:${seconds}] <${username}> : ${message}`));
    }
});

if (usechatcut) {
    const lastChatTimes: Record<string, number> = {};
    const LastChat: Record<string, string> = {};
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
        const playername = ni.getActor()!.getName();
        events.packetBefore(MinecraftPacketIds.Text).on((pkt, ni, id) => {
            const actor = ni.getActor()!;
            const username = actor.getName();
            let msg = pkt.message;
            msg = msg.replace(" ", "");

            if (msg.length > chatcutmessagelength) {
                runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${chatcutlongtitle}"}]}`);
                return CANCEL;
            }

            if (lastChatTimes[username] === undefined) {
                lastChatTimes[username] = Date.now();
            } else if (Date.now() - lastChatTimes[username] < chatcutmessagespeedtime) {
                runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${chatcutspeedtitle}"}]}`);
                return CANCEL;
            } else {
                lastChatTimes[username] = Date.now();
            }

            if (!LastChat[username]) {
                LastChat[username] = msg;
            } else if (LastChat[username]) {
                const oldMsg = LastChat[username];

                if (msg === oldMsg) {
                    LastChat[username] = msg;
                    actor.sendMessage(chatcutsametitle);
                    return CANCEL;
                }
                if (Math.abs(oldMsg.length - msg.length) < 3) {
                    if (oldMsg.includes(msg) || msg.includes(oldMsg)) {
                        LastChat[username] = msg;
                        actor.sendMessage(chatcutsametitle);
                        return CANCEL;
                    }
                }
            }
            LastChat[username] = msg;
        });
    });
};

events.command.on((command, origin) => {
    const cmdhead = command.split(" ")[0];
    if (usechatcut) {
        if (cmdhead === "/w") {
            if (command.length > wcutmessagelength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/tell") {
            if (command.length > wcutmessagelength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/msg") {
            if (command.length > wcutmessagelength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/me") {
            if (command.length > wcutmessagelength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${nowhispermessge}"}]}`);
                return 0;
            }
        }
    }
});

command.register(kickcommand, "Kick player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin)) {
            const username = target.getName();
            const ip = target.getNetworkIdentifier();

            for (const actor of param.target.newResults(origin, ServerPlayer)) {
                kick(ip, kicktitle);
                const name = origin.getName();
                runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §c${username}§fis kicked"}]}`);
                console.log("\x1b[41m", `${username} kicked > [ Kicked by ${actor} ]`, "\x1b[0m");
            }
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

command.register(mutecommand, "Mute player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();

            runCommand(`ability @a[name="${username}"] mute true`);
            runCommand(`tag @a[name="${username}"] add mute`);
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r§l §7${username}§fis §cMuted"}]}`);
            console.log("\x1b[41m", `${username} Mute > [ Muted by ${origin.getName()} ]`, "\x1b[0m");
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

command.register(unmutecommand, "Unmute player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();

            runCommand(`ability @a[name="${username}"] mute false`);
            runCommand(`tag @a[name="${username}"] remove mute`);
            console.log("\x1b[41m", `${username} UnMute > [ UnMuted by ${origin.getName()} ]`, "\x1b[0m");
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r§l §7${username}§fis §aUnMuted"}]}`);
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

const PlayerDeviceID: any = {};

function leadZero(num: number, n: number) {
    var leadZero = "";
    let num2 = num.toString();
    if (num2.length < n) {
        for (var i = 0; i < n - num2.length; i++) leadZero += "0";
    }
    return leadZero + num;
}

function dateWithZero() {
    var d = new Date();
    return (
        d.getFullYear() +
        "-" +
        leadZero(d.getMonth() + 1, 2) +
        "-" +
        leadZero(d.getDate(), 2) +
        "-" +
        leadZero(d.getHours(), 2) +
        "-" +
        leadZero(d.getMinutes(), 2) +
        "-"
    );
}

events.packetAfter(MinecraftPacketIds.Login).on((pkt, ni) => {
    const onlineops = bedrockServer.serverInstance.getPlayers().filter((p) => p.getPermissionLevel() === PlayerPermission.OPERATOR);
    const op_count = onlineops.length;
    const connectionrequest = pkt.connreq;
    if (!connectionrequest) return;
    const username = connectionrequest.cert.getId();
    PlayerDeviceID[username] = connectionrequest.getDeviceId();
    let banlist = fs.readdirSync("./banDB/");
    if (banlist.includes(`${username}`)) {
        const getbantime = fs.readFileSync(`./banDB/${username}`);
        if (getbantime == null) {
            kick(ni, bantitle);
            for (let i1 = 0; i1 < op_count; i1++) {
                onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§r §c${username} tried connection [Name Ban Player]`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
            return CANCEL;
        }
        const ToString = String(getbantime);
        if (ToString == "null" || ToString == "") {
            kick(ni, bantitle);
            for (let i1 = 0; i1 < op_count; i1++) {
                onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§r §c${username} tried connection [Name Ban Player]`);
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
            unbanenum.removeValues(`${username}`);
            fs.unlink(`./banDB/${username}`, (err) => {});
            return;
        }

        kick(ni, `${bantitle}\n§fYour ban is expired on ${banTime}`);
        for (let i1 = 0; i1 < op_count; i1++) {
            onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§r §c${username} tried connection [Name Ban Player]`);
        }
        console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
        return CANCEL;
    }

    let Dbanlist = fs.readdirSync(`./DbanDB`);
    if (Dbanlist.includes(PlayerDeviceID[username])) {
        const getbantime = fs.readFileSync(`./DbanDB/${PlayerDeviceID[username]}`);
        if (getbantime == null) {
            kick(ni, bantitle);
            for (let i1 = 0; i1 < op_count; i1++) {
                onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§r §c${username} tried connection [Device Ban Player]`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player]`));
            return CANCEL;
        }
        const ToString = String(getbantime);
        if (ToString == "null" || ToString == "") {
            kick(ni, bantitle);
            for (let i1 = 0; i1 < op_count; i1++) {
                onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§r§c ${username} tried connection [Device Ban Player]`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player]`));
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
            unbanenum.removeValues(PlayerDeviceID[username]);
            fs.unlink(`./DbanDB/${PlayerDeviceID[username]}`, (err) => {});
            return;
        }

        kick(ni, `${bantitle}\n§fYour ban is expired on ${banTime}`);
        for (let i1 = 0; i1 < op_count; i1++) {
            onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§r§c ${username} tried connection [Device Ban Player]`);
        }
        console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player]`));
        return CANCEL;
    }
});

const cmd_unban = command.register(unbancommand, "Unban player", CommandPermissionLevel.Operator);

const unbanenum = command.softEnum("player", fs.readdirSync("./banDB/"));
const dunbanenum = command.softEnum("DeviceID", fs.readdirSync("./DbanDB/"));

cmd_unban.overload(
    (inputs, ni) => {
        const plname = ni.getName();

        if (plname === inputs.player) {
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§cYou can't unban yourself!)"}]}`);
            return 0;
        }
        if (inputs.player === "") {
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§cError: Please type name here. Do not use @a @e @s @r @p"}]}`);
            return;
        }

        let banlist = fs.readdirSync("./banDB/");
        if (banlist.includes(`${inputs.player}`) === false) {
            if (ni.isServerCommandOrigin() === true) {
                console.log(red(`${inputs.player} is already unbanned\nYou can see banlist using banlist`));
                return CANCEL;
            } else {
                runCommand(`tellraw ${plname} {"rawtext":[{"text":"${inputs.player} is already unbanned\n§cYou can see banlist using §e/banlist"}]}`);
                return CANCEL;
            }
        } else {
            fs.unlink(`./banDB/${inputs.player}`, (err) => {});
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"Unbanned ${inputs.player}"}]}`);
            console.log(yellow(`${plname} : Unbanned ${inputs.player}`));
            unbanenum.removeValues(`${inputs.player}`);
        }
    },
    {
        player: unbanenum,
    },
);

command.register(bancommand, "Ban Player (Minutes, 0 or null is never expired)", CommandPermissionLevel.Operator).overload(
    (inputs, corg) => {
        const plname = corg.getName();
        if (inputs.player.getName() === plname) {
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§cYou can't ban yourself"}]}`);
            return CANCEL;
        }

        if (inputs.player.getName() == null || inputs.player.getName() == "") {
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§cError: Please type name here. Do not use @a @e @r @s @p"}]}`);
            return CANCEL;
        }

        let banlist = fs.readdirSync(`./banDB/`);
        if (banlist.includes(`${inputs.player.getName()}`) == true) {
            if (corg.isServerCommandOrigin() == true) {
                console.log(red(`${inputs.player.getName()} is already unbanned`));

                return CANCEL;
            } else {
                runCommand(`tellraw ${plname} {"rawtext":[{"text":"${inputs.player.getName()} is already banned}]}`);
                return CANCEL;
            }
        }

        if (!inputs.minutes) {
            inputs.minutes = 0;
        }

        const date = new Date();
        let hours = date.getHours();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let minutes = date.getMinutes() + inputs.minutes;
        let day = date.getDate();

        for (true; minutes > 59; ) {
            minutes = minutes - 60;
            hours++;
            if (hours > 23) {
                hours = 0;
                day++;
                if (day > 29) {
                    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                        if (day > 31) {
                            day = 0;
                            month++;
                            if (month > 12) {
                                month = 1;
                                year++;
                            }
                        }
                    } else {
                        if (day > 30) {
                            day = 0;
                            month++;
                            if (month > 12) {
                                month = 1;
                                year++;
                            }
                        }
                    }
                }
            }
        }

        const BannedTime = `${day}/${month}/${year}, ${hours}:${minutes}`;
        const BannedTime2 = `${year}-${month}-${day}-${hours}-${minutes}`;

        fs.writeFileSync(`./banDB/${inputs.player.getName()}`, BannedTime2);

        console.log(yellow(`${plname} : Banned ${inputs.player.getName()}`));
        runCommand(`tellraw ${plname} {"rawtext":[{"text":"Banned ${inputs.player.getName()}"}]}`);
        unbanenum.addValues(`${inputs.player.getName()}`);
        if (runCommand(`testfor ${inputs.player.getName()}`).isSuccess() == true) {
            for (const pl of inputs.player.newResults(corg)) {
                const Ni = pl.getNetworkIdentifier();
                if (inputs.minutes == 0 || !inputs.minutes) {
                    kick(Ni, bantitle);
                } else {
                    kick(Ni, `${bantitle}\n§fYour ban is expired on ${BannedTime}`);
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

command.register(Devicebancommand, "Ban player using Device ID", CommandPermissionLevel.Operator).overload(
    async (inputs, corg) => {
        const originName = corg.getName();
        const targetName = inputs.player.getName();
        inputs.minutes = inputs.minutes ?? 0;

        if (targetName === originName) {
            runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§cYou can't ban yourself"}]}`);
            return;
        }

        if (targetName == null || targetName == "") {
            runCommand(`tellraw ${originName} {"rawtext":[{"text":"§cError: Please type name here. Do not use @a @e @r @s @p"}]}`);
            return;
        }

        if (runCommand(`testfor ${targetName}`).isSuccess() === false || PlayerDeviceID[targetName] == null) {
            runCommand(`tellraw ${originName} {"rawtext":[{"text":"§cError: You can not use this command for offline player"}]}`);
            runCommand(`tellraw ${originName} {"rawtext":[{"text":"§cError: If you know player deviceID use "/${OfflinePlayerDeivceBanCommand} <DeviceID>"}]}`);
            if (corg.isServerCommandOrigin()) {
                console.log(red("Error: You can not use this command for offline player"));
                console.log(yellow(`If you know player device ID use "${OfflinePlayerDeivceBanCommand} <DeviceID>"`));
            }
            return;
        }

        const banlist = fs.readdirSync("./banDB/");
        const banlist2 = fs.readdirSync("./DbanDB/");
        if (banlist.includes(targetName) === true || banlist2.includes(PlayerDeviceID[targetName]) === true) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(`${targetName} is already banned`));
                return;
            } else {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"${targetName} is already banned"}]}`);
                return;
            }
        }

        const date = new Date();
        let hours = date.getHours();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let minutes = date.getMinutes() + inputs.minutes;
        let day = date.getDate();

        for (true; minutes > 59; ) {
            minutes = minutes - 60;
            hours++;
            if (hours > 23) {
                hours = 0;
                day++;
                if (day > 29) {
                    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                        if (day > 31) {
                            day = 0;
                            month++;
                            if (month > 12) {
                                month = 1;
                                year++;
                            }
                        }
                    } else {
                        if (day > 30) {
                            day = 0;
                            month++;
                            if (month > 12) {
                                month = 1;
                                year++;
                            }
                        }
                    }
                }
            }
        }

        const BannedTime = `${day}/${month}/${year}, ${hours}:${minutes}`;
        const BannedTime2 = `${year}-${month}-${day}-${hours}-${minutes}`;

        const deviceId = PlayerDeviceID[targetName];

        fs.writeFileSync(`./DbanDB/${deviceId}`, BannedTime2);

        runCommand(`execute ${originName} ~ ~ ~ playsound random.orb ~ ~ ~ 1 1.5 1`);
        runCommand(`tellraw ${originName} {"rawtext":[{"text":"Banned ${targetName} (${deviceId})"}]}`);
        console.log(yellow(`${originName} : Banned ${targetName} (${deviceId})`));
        dunbanenum.addValues(deviceId);
        for (const player of inputs.player.newResults(corg)) {
            const ni = player.getNetworkIdentifier();
            if (inputs.minutes == 0 || !inputs.minutes) {
                kick(ni, bantitle);
            } else {
                kick(ni, `${bantitle}\n§fYour ban is expired on ${BannedTime}`);
            }
            return;
        }
    },
    {
        player: PlayerCommandSelector,
        minutes: [int32_t, true],
    },
);

command.register(Deviceunbancommand, "Unban player device", CommandPermissionLevel.Operator).overload(
    (inputs, corg) => {
        const originName = corg.getName();

        if (inputs.DeviceID == "") {
            runCommand(`tellraw ${originName} {"rawtext":[{"text":"§cError: Please type device id here"}]}`);
            return;
        }
        if (inputs.DeviceID.length !== DEVICE_ID_FMT_LENGTH && inputs.DeviceID.length !== DEVICE_ID_FMT_LENGTH_ANDROID) {
            if (corg.isServerCommandOrigin()) {
                console.log(red("Error: This command needs only device ID (Example : aa12aaa3-abc4-567a-b890-12c34dc567e8"));
                return;
            } else {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§cError: This command needs only device ID"}]}`);
                return;
            }
        }

        let Dbanlist = fs.readdirSync(`./DbanDB/`);
        if (!Dbanlist.includes(inputs.DeviceID)) {
            if (corg.isServerCommandOrigin() === true) {
                console.log(red(`${inputs.DeviceID} is already unbanned\nYou can see banlist using banlist`));
                return CANCEL;
            } else {
                runCommand(
                    `tellraw ${inputs.DeviceID} { "rawtext": [{ "text": "${inputs.DeviceID} is already unbanned\n§cYou can see banlist using §e/banlist" }] }`,
                );
                return CANCEL;
            }
        } else {
            fs.unlink(`./DbanDB/${inputs.DeviceID}`, (err) => {});
            runCommand(`tellraw ${originName} {"rawtext":[{"text":"Unbanned device ID ${inputs.DeviceID}"}]}`);
            console.log(yellow(`${originName} : Unbanned device ID ${inputs.DeviceID}`));
            dunbanenum.removeValues(inputs.DeviceID);
        }
    },
    {
        DeviceID: dunbanenum,
    },
);

command.register(showbanlistcommand, "Shows server ban list", CommandPermissionLevel.Operator).overload((asdf, corg) => {
    const plname = corg.getName();
    const banlist = fs.readdirSync("./banDB/", { withFileTypes: false });
    const Dbanlist = fs.readdirSync("./DbanDB/", { withFileTypes: false });
    if (corg.isServerCommandOrigin() == true) {
        console.log(yellow(`Name ban list : ${banlist}`));
        console.log(yellow(`Device ban list : ${Dbanlist}`));
    } else {
        runCommand(`tellraw ${plname} {"rawtext":[{"text":"Name ban list : ${banlist}"}]}`);
        runCommand(`tellraw ${plname} {"rawtext":[{"text":"Device ban list : ${Dbanlist}"}]}`);
    }
}, {});

command.register(OfflinePlayerDeivceBanCommand, "You can device ban even if the player is offline", CommandPermissionLevel.Operator).overload(
    (input, corg) => {
        const originName = corg.getName();
        const input_length = input.DeviceID.length;
        const targetDeviceId = input.DeviceID;
        if (input_length !== DEVICE_ID_FMT_LENGTH) {
            if (corg.isServerCommandOrigin()) {
                console.log(red("Error: This commmand needs only device ID (Example : aa12aaa3-abc4-567a-b890-12c34dc567e8"));
                return CANCEL;
            } else {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§cError: This commmand needs only device ID"}]}`);
                return CANCEL;
            }
        }
        const banlist = fs.readdirSync("./DbanDB/");
        if (banlist.includes(targetDeviceId) === true) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(`${targetDeviceId} is already banned`));
                return CANCEL;
            } else {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§cError: ${targetDeviceId} is already banned"}]}`);
                return CANCEL;
            }
        }

        fs.writeFileSync(`./DbanDB/${targetDeviceId}`, "");
        console.log(yellow(`${originName} : banned ${targetDeviceId}`));
    },
    {
        DeviceID: CxxString,
    },
);

const RakPeer = bedrockServer.rakPeer;
if (usegetinfocommand) {
    command.register(getinfocommand, "get player info", CommandPermissionLevel.Operator).overload(
        (param, origin, output) => {
            if (!origin.getEntity()?.isPlayer()) {
                console.log(red("You are the server console"));
                return;
            }

            for (const player of param.target.newResults(origin, ServerPlayer)) {
                const actorname = origin.getName();
                const DeviceId = player.deviceId;
                const ni = player.getNetworkIdentifier();
                const username = player.getName();
                const xuid = player.getXuid();
                const os = player.getPlatform();
                const address = player.getNetworkIdentifier().address;
                runCommand(
                    `tellraw @a[name="${actorname}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §b${username}§b's INFO\n\n§l§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${
                        BuildPlatform[os] || "UNKNOWN"
                    }\n§eDeviceID §f: §7${DeviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
                );
            }
        },
        {
            target: PlayerCommandSelector,
        },
    );
}

if (usemyinfocommand) {
    command.register(myinfocommand, "get my info").overload((param, origin, output) => {
        const player = origin.getEntity();
        if (!player?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        const username = origin.getName();
        const ip = player.getNetworkIdentifier();
        const DeviceId = player.deviceId;
        const xuid = player.getXuid();
        const os = player.getPlatform();
        const ni = player?.isPlayer() ? player.getNetworkIdentifier() : undefined;
        const address = player.getNetworkIdentifier().address;

        if (ni) {
            runCommand(
                `tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §b${username}§b's INFO\n\n§l§eIP §f: §7${ip}\n§eName §f: §7${username}\n§eOS §f: §7${
                    BuildPlatform[os] || "UNKNOWN"
                }\n§eDeviceID §f: §7${DeviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
            );
        }
    }, {});
}

if (usespawncommand) {
    command.register(spawncommand, "tp to spawn").overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${spawncoordinate}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§f§l[§7Server§f] §r${spawncommandtitle}"}]}`);
    }, {});
}

events.packetBefore(MinecraftPacketIds.CommandRequest).on((ev, ni) => {
    if (ev.command == "/about") {
        runCommand(`tellraw "${ni.getActor()!.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§cthis server use sos9533scr"}]}`);
        return CANCEL;
    }
});

if (usestpcommandA) {
    command.register(tpcommandA, tpcommandexplanationA).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateA}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §r${tpcommandtitleA}"}]}`);
    }, {});
}

if (usestpcommandB) {
    command.register(tpcommandB, tpcommandexplanationB).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateB}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §r${tpcommandtitleB}"}]}`);
    }, {});
}

if (usestpcommandC) {
    command.register(tpcommandC, tpcommandexplanationC).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateC}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §r${tpcommandtitleC}"}]}`);
    }, {});
}

command.register("sos9533scr", "BDSX Basic setting plugin - Copyright (c) 2022 sos9533", CommandPermissionLevel.Normal).overload((param, origin, output) => {
    runCommand(
        `tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §c§lthis server use sos9533scr. \nDownload : https://github.com/sos9533/bdsx-sos9533scr \nMade by sos9533"}]}`,
    );
}, {});
if (usebasicitemcommand) {
    command.register(basicitemcommand, "give basic item").overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        runCommand(`give @a[name="${username}"] ${basicitemA}`);
        runCommand(`give @a[name="${username}"] ${basicitemB}`);
        runCommand(`give @a[name="${username}"] ${basicitemC}`);
        runCommand(`give @a[name="${username}"] ${basicitemD}`);
        runCommand(`give @a[name="${username}"] ${basicitemE}`);
        runCommand(`give @a[name="${username}"] ${basicitemF}`);
        runCommand(`give @a[name="${username}"] ${basicitemG}`);
        runCommand(`give @a[name="${username}"] ${basicitemH}`);
    }, {});
}

const LAST = new Map<NetworkIdentifier, number>();
const COUNT = new Map<NetworkIdentifier, number>();
const DELAY_LIMIT = 3;

function kick(target: NetworkIdentifier, message = anticrasherkicktitle) {
    bedrockServer.serverInstance.disconnectClient(target, message);
}

events.packetAfter(MinecraftPacketIds.Login).on(async (pkt, ni) => {
    LAST.set(ni, 0);
    COUNT.set(ni, 0);
});
events.networkDisconnected.on(async (ni) => {
    LAST.delete(ni);
    COUNT.delete(ni);
});

if (useanticrasher) {
    events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((pkt, ni) => {
        if ([12, 26, 35, 42].includes(pkt.sound)) return;

        if (Date.now() - LAST.get(ni)! < DELAY_LIMIT) {
            const next = COUNT.get(ni)!;
            COUNT.set(ni, next + 1);
            if (next > 3) {
                kick(ni);
            }

            return CANCEL;
        }
        COUNT.set(ni, 0);
        LAST.set(ni, Date.now());
    });

    const FOOD_LAST = new Map<NetworkIdentifier, number>();
    const FOOD_COUNT = new Map<NetworkIdentifier, number>();
    events.packetBefore(MinecraftPacketIds.ActorEvent).on((pkt, ni) => {
        const action = pkt.event;
        if (action !== ActorEventPacket.Events.EatingItem) return;

        if (Date.now() - FOOD_LAST.get(ni)! < DELAY_LIMIT) {
            const next = FOOD_COUNT.get(ni)!;
            FOOD_COUNT.set(ni, next + 1);
            if (next > 3) {
                kick(ni);
            }

            return CANCEL;
        }
        FOOD_COUNT.set(ni, 0);
        FOOD_LAST.set(ni, Date.now());
    });

    events.packetBefore(MinecraftPacketIds.PlayerAuthInput).on((pkt, ni) => {
        switch (true) {
            case pkt.moveX > 1073741823:
            case pkt.moveZ > 1073741823:
            case pkt.pos.x > 1073741823:
            case pkt.pos.y > 1073741823:
            case pkt.pos.z > 1073741823:
                kick(ni);
                return CANCEL;
            default:
        }
    });
}

mkFileKeep(chin_json);

let chin: any = {};
chin = JSON.parse(fs.readFileSync(chin_json, "utf8"));

function updatechin() {
    try {
        chin = JSON.parse(fs.readFileSync(chin_json, "utf8"));
        return true;
    } catch (err) {}
    return false;
}

events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
    if (useblockcolorword === true) {
        if (ptr.message?.includes("§")) {
            runCommand(`tellraw @a[name="${ni.getActor()!.getName()}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${blockcolorwordtitle}"}]}`);
            return CANCEL;
        }
    }

    if (usechin === true) {
        let message = ptr.message.replace(/"/gi, `'`);
        if (chinchatset === "A")
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f<${chin[ni.getActor()!.getName()] || basicchin}§f> §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        else if (chinchatset === "B")
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f<${chin[ni.getActor()!.getName()] || basicchin}§f> §r${ptr.name}§r : ${message}"}]}`);
        else if (chinchatset === "C")
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[${chin[ni.getActor()!.getName()] || basicchin}§f] §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        else if (chinchatset === "D")
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[${chin[ni.getActor()!.getName()] || basicchin}§f] §r${ptr.name}§r : ${message}"}]}`);
        return CANCEL;
    }
});

if (usechin === true) {
    if (howusechin === "A") {
        command.register(chincommand, chincommandexplanation, CommandPermissionLevel.Operator).overload(
            (params, origin, output) => {
                if (params.prefix !== undefined && params.target !== undefined) {
                    for (const player of params.target.newResults(origin, ServerPlayer)) {
                        const chinObj = JSON.parse(fs.readFileSync(chin_json, "utf8"));
                        const target = params.target.newResults(origin)!;
                        const prefix = params.prefix;
                        const legnth = target.length;

                        for (let i = 0; i < legnth; i++) {
                            chinObj[player.getName()] = prefix!.toString();
                            fs.writeFileSync(chin_json, JSON.stringify(chinObj), "utf8");
                            updatechin();
                            runCommand(`playsound random.levelup @a[name="${origin.getName()}"]`);
                            runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§aprocessed successfully!"}]}`);
                        }
                    }
                }
            },
            {
                target: ActorWildcardCommandSelector,
                prefix: CxxString,
            },
        );
    }

    if (howusechin === "B") {
        command.register(chincommand, chincommandexplanation, CommandPermissionLevel.Normal).overload(
            (params, origin, output) => {
                if (params.prefix !== undefined && origin.getEntity() !== undefined) {
                    const chinObj = JSON.parse(fs.readFileSync(chin_json, "utf8"));
                    const prefix = params.prefix;
                    if (prefix.length < chinlength) {
                        chinObj[origin.getName()] = prefix!.toString();
                        fs.writeFileSync(chin_json, JSON.stringify(chinObj), "utf8");
                        updatechin();
                        runCommand(`playsound random.levelup @a[name="${origin.getName()}"]`);
                        runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§aprocessed successfully!"}]}`);
                    } else {
                        runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§cthe prefix is too long!"}]}`);
                        runCommand(`playsound random.orb @a[name="${origin.getName()}"]`);
                    }
                }
            },
            {
                prefix: CxxString,
            },
        );
    }

    if (howusechin === "C") {
        command.register(chincommand, chincommandexplanation).overload(async (params, origin, output) => {
            const actor = origin.getEntity();
            if (actor === null) {
                console.log(red("You are the server console"));
                return;
            }
            const ni = actor.getNetworkIdentifier();

            const res = await Form.sendTo(ni, {
                type: "custom_form",
                title: "§l§0prefix",
                content: [
                    {
                        type: "input",
                        text: "§l§7what is your prefix! §l§0[ §gsos9533scr §0]§r ",
                    },
                ],
            });

            if (res === null) return;

            if (res[0].length < chinlength) {
                chin[actor.getName()] = res[0];
                const chinObj = JSON.parse(fs.readFileSync(chin_json, "utf8"));
                const prefix = res[0];

                if (res[0] !== undefined && actor.getName() !== undefined) {
                    chinObj[actor.getName()] = prefix.toString();
                    fs.writeFileSync(chin_json, JSON.stringify(chinObj), "utf8");
                }
                runCommand(`playsound random.levelup @a[name="${actor.getName()}"]`);
                runCommand(`tellraw "${actor.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§aprocessed successfully"}]}`);
            } else {
                runCommand(`tellraw "${actor.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§cthe prefix is too long!"}]}`);
                runCommand(`playsound random.orb @a[name="${actor.getName()}"]`);
            }
        }, {});
    }
}

export function setBossBar(target: NetworkIdentifier, title: string, percent: number, color?: BossEventPacket.Colors): void {
    const pk = BossEventPacket.allocate();
    pk.entityUniqueId = target.getActor()!.getUniqueIdPointer().getBin64();
    pk.type = BossEventPacket.Types.Show;
    pk.title = title;
    pk.healthPercent = percent;
    if (color) pk.color = color;
    pk.sendTo(target);
    pk.dispose();
}

export function removeBossBar(target: NetworkIdentifier, title: string): void {
    const pk = BossEventPacket.allocate();
    pk.entityUniqueId = target.getActor()!.getUniqueIdPointer().getBin64();
    pk.type = BossEventPacket.Types.Hide;
    pk.sendTo(target);
    pk.dispose();
}

command.register(removebossbarcommand, "remove bossbar", CommandPermissionLevel.Operator).overload(
    (params, origin, output) => {
        for (const target of params.target.newResults(origin, ServerPlayer)) {
            const ni = target.getNetworkIdentifier();
            removeBossBar(ni, params.title);
        }
    },
    {
        target: ActorWildcardCommandSelector,
        title: CxxString,
    },
);

command.register(setbossbarcommand, "set bossbar", CommandPermissionLevel.Operator).overload(
    (params, origin, output) => {
        for (const target of params.target.newResults(origin, ServerPlayer)) {
            const ni = target.getNetworkIdentifier();
            if (params.enum === "blue") {
                setBossBar(ni, params.title, params.percent, BossEventPacket.Colors.Blue);
            }
            if (params.enum === "red") {
                setBossBar(ni, params.title, params.percent, BossEventPacket.Colors.Red);
            }
            if (params.enum === "green") {
                setBossBar(ni, params.title, params.percent, BossEventPacket.Colors.Green);
            }
            if (params.enum === "yellow") {
                setBossBar(ni, params.title, params.percent, BossEventPacket.Colors.Yellow);
            }
            if (params.enum === "purple") {
                setBossBar(ni, params.title, params.percent, BossEventPacket.Colors.Purple);
            }
            if (params.enum === "white") {
                setBossBar(ni, params.title, params.percent, BossEventPacket.Colors.White);
            }
        }
    },
    {
        target: ActorWildcardCommandSelector,
        title: CxxString,
        percent: float32_t,
        enum: command.enum("color", "blue", "red", "green", "yellow", "purple", "white"),
    },
);

mkFileKeep(sethome_json);

if (usesethomecommand) {
    command.register(sethomecommand, "set my home to here").overload((param, origin, output) => {
        const username = origin.getName();
        const player = origin.getEntity();

        if (!player?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }
        const pos = player.getPosition();
        const DeviceId = player.deviceId;

        if (pos !== undefined && player !== undefined) {
            const jsonObj = JSON.parse(fs.readFileSync(sethome_json, "utf8"));
            const writepos = `${pos?.x} ${pos?.y} ${pos?.z}`;
            jsonObj[DeviceId] = writepos!.toString();
            fs.writeFileSync(sethome_json, JSON.stringify(jsonObj), "utf8");
            runCommand(`tellraw "${username}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§eSet Home"}]}`);
        }
    }, {});

    command.register(homecommand, "go home").overload((param, origin, output) => {
        const username = origin.getName();
        const player = origin.getEntity();

        if (!player?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }
        const DeviceId = player.deviceId;
        const jsonObj = JSON.parse(fs.readFileSync(sethome_json, "utf8"));

        runCommand(`tp @a[name="${username}"] ${jsonObj[DeviceId]}`);
        runCommand(`tellraw "${username}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§eWarp Complete!"}]}`);
    }, {});
}

events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((ev, ni) => {
    const username = ni.getActor()?.getName();
    if (ev.sound === 42) {
        runCommand(`scoreboard players add @a[name="${username}"] cps 1`);

        if (cpsactionbar) {
            runCommand(`titleraw @a actionbar {"rawtext":[{"text":"§fCPS:§f "},{"score":{"name":"*","objective":"cps"}},{"text":""}]}`);
        }
    }
});

events.playerAttack.on((ev) => {
    const username = ev.player.getName();
    runCommand(`scoreboard players add @a[name="${username}"] cps 1`);

    if (cpsactionbar) {
        runCommand(`titleraw @a actionbar {"rawtext":[{"text":"§fCPS:§f "},{"score":{"name":"*","objective":"cps"}},{"text":""}]}`);
    }
});

let cool = setInterval(() => {
    runCommand(`scoreboard players set @a cps 0`);
}, 1000);

events.serverLeave.on(() => {
    clearInterval(cool);
});

if (usetpacommand) {
    const reqs = new Map<string, Set<string>>();

    command.register(tpacommand, "request tp to another user.").overload(
        (param, origin) => {
            const playerAr = param.player.newResults(origin);

            if (playerAr.length > 1 || playerAr.length < 1) {
                const oPlayer = origin.getEntity();

                if (oPlayer?.isPlayer()) {
                    oPlayer.sendMessage("§l§f[ §esos9533scr §f] §cselect one user correctly");
                }
                return;
            }

            const player = playerAr[0];

            runCommand(
                `tellraw "${player.getName()}" {"rawtext": [{"text": "§l§f------ ${origin.getName()} want tp to you ------\n§l§f------§c use '/${tpacceptcommand} ${origin.getName()}'§f ------"}]}`,
            );

            const set = reqs.get(origin.getName()) ?? new Set();
            if (!reqs.has(origin.getName())) reqs.set(origin.getName(), set);
            set.add(player.getName());

            setTimeout(() => {
                if (set.delete(player.getName()))
                    runCommand(`tellraw "${origin.getName()}" {"rawtext": [{"text":"§l§f------ §6Your tpa request §6has expired ------"}]}`);
            }, 60 * 1000);
        },
        { player: PlayerCommandSelector },
    );

    command.register(tpacceptcommand, "accept tpa request").overload(
        (param, origin) => {
            const playerAr = param.taret.newResults(origin);
            if (playerAr.length !== 1) {
                const oPlayer = origin.getEntity();
                if (oPlayer?.isPlayer()) {
                    oPlayer.sendMessage("§l§f[ §esos9533scr §f] §cselect one user correctly");
                }
                return;
            }

            let player = playerAr[0];

            if (reqs.has(player.getName())) {
                const set = reqs.get(player.getName());
                if (!set) return;

                if (set.delete(origin.getName())) {
                    runCommand(`tp "${player.getName()}" "${origin.getName()}"`);
                    runCommand(`tellraw "${player.getName()}" {"rawtext": [{"text":"§l§f------ §a${origin.getName()}§f accept your tpa request ------"}]}`);
                }
            }
        },
        { taret: PlayerCommandSelector },
    );
}

command.register("day", "Change server time to day", CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set day");
    const player = corg.getEntity();
    if (player?.isPlayer()) player.sendMessage("§6Changed server time to day");
}, {});

command.register("night", "Change server time to night", CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set night");
    const player = corg.getEntity();
    if (player?.isPlayer()) player.sendMessage("§6Changed server time to night");
}, {});
