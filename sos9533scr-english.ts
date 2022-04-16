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
const kicktitle = "§l§f[ §7Kick §f]\n\n§cYou Kicked by server\n§7You can join the server again";

//mute command (with out /) - For OP
const mutecommand = "mute";

//unmute command (with out /) - For OP
const unmutecommand = "unmute";

//ban command (with out /) - For OP
const bancommand = "ban";

//ban message
const bantitle = "§l§f[ §cBAN §f]\n\n§cYou BANed by server\n§7You cant join the server again";

//ban update command (with out /) - For OP
const updatebancommand = "ban-update";

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

/////////////////////////////////////////////////////////////////////

//Anti Hacker

//kick toolbox user, when join (true/false)
let usetoolboxkick: boolean = true;

//toolbox - kick message - output all player
const toolboxkickmessage = "§l§eKicked toolbox";

//toolbox - kick message - output kicked player
const toolboxkicktitle = "§l§f[ §7Kick §f]\n\n§cDont use ToolBox";

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

//chatcut length
const chatcutmessagelength = 100;

//chatcut speedchat
const chatcutmessagespeedtime = 1000;

//chatcut message - too long chat
const chatcutlongtitle = "§l§cYour chat is too long!";

//chatcut message - too fast chat
const chatcutspeedtitle = "§l§cYour chat is too fast!";

//whisper chatcut (to block /w @a @e @e @e @e @e @e @e)
const wcutmessagelength = 30;

//whisper chatcut message
const nowhispermessge = "§l§cYou cant chat long message by whisper";

//chatcut open source ( https://github.com/kdg7313/bdsx-script )


//use anti crasher (true/false)
let useanticrasher: boolean = true;

//anti crasher kick message - output kicked player
const anticrasherkicktitle = "§l§f[ §7Kick §f]\n\n§cDont use crasher";

//anti crasher open source (MIT) ( https://github.com/mdisprgm/bdsx-anticrasher )

/////////////////////////////////////////////////////////////////////

//etc

//block § (true/false)
let useblockcolorword: boolean = false;

//block § message
const blockcolorwordtitle = "§l§ccolor word is not allow";

//set bossbar command (with out /)
const setbossbarcommand = "setbossbar"

//remove bossbar command (with out /)
const removebossbarcommand = "removebossbar"

/////////////////////////////////////////////////////////////////////

import { ActorWildcardCommandSelector, CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { Form } from "bdsx/bds/form";
import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { ActorEventPacket, BossEventPacket } from "bdsx/bds/packets";
import { ServerPlayer } from "bdsx/bds/player";
import { serverInstance } from "bdsx/bds/server";
import { command } from "bdsx/command";
import { BuildPlatform, CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { CxxString, float32_t } from "bdsx/nativetype";
import { gray, green, red } from "colors";
import * as fs from "fs";

const chin_json = "chin.json";
const ban_json = "ban.json";
const sethome_json = "sethome-pos.json";
function mkFileKeep(filepath: string, value = {}) {
    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(filepath, JSON.stringify(value));
        console.log("[", "sos9533scr".yellow, "]", `Made '${filepath}'`.gray, " - sos9533".green);
    }
}

console.log("[", "sos9533scr".yellow, "] allocated", " - sos9533".green);

events.serverOpen.on(() => {
    console.log("[", "sos9533scr".yellow, "] launching", " - sos9533".green);
});

events.serverClose.on(() => {
    console.log("[", "sos9533scr".yellow, "] closed", " - sos9533".red);
});

export const playerList = new Map<NetworkIdentifier, string>();

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
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${longnicknamekickmessage}"}]}`);
        } else {
            console.log(green(`${username}> IP:${ip}, XUID:${xuid} OS:${BuildPlatform[connreq.getDeviceOS()] || "UNKNOWN"}`));
        }
    }

    if (usetoolboxkick) {
        if (deviceModel.includes("samsung")) {
            kick(networkIdentifier, toolboxkicktitle);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by toolbox ]`, "\x1b[0m");
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${toolboxkickmessage}"}]}`);
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
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${welcomemessage}"}]}`);
    }

    if (usebasicitemcommand) {
        if (joingivebasicitem) {
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemA}`);
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemB}`);
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemC}`);
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemD}`);
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemE}`);
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemF}`);
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemG}`);
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemH}`);
            bedrockServer.executeCommand(`tag @a[name="${username}",tag=!joinbasicitem] add joinbasicitem`);
        }
        bedrockServer.executeCommand(`ability @a[name="${username}",tag=mute] mute true`);
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

const time: Record<string, number> = {};
events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
    const playername = ni.getActor()!.getName();

    if (usechatcut) {
        if (ptr.message.length > chatcutmessagelength) {
            bedrockServer.executeCommand(`tellraw @a[name="${playername}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${chatcutlongtitle}"}]}`);
            return CANCEL;
        }

        if (time[playername] === undefined) {
            time[playername] = Date.now();
        } else if (Date.now() - time[playername] < chatcutmessagespeedtime) {
            bedrockServer.executeCommand(`tellraw @a[name="${playername}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${chatcutspeedtitle}"}]}`);
            return CANCEL;
        } else {
            time[playername] = Date.now();
        }
    }
});

events.command.on((command, origin) => {
    const cmdhead = command.split(" ")[0];
    if (usechatcut) {
        if (cmdhead === "/w") {
            if (command.length > wcutmessagelength) {
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/tell") {
            if (command.length > wcutmessagelength) {
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/msg") {
            if (command.length > wcutmessagelength) {
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/me") {
            if (command.length > wcutmessagelength) {
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${nowhispermessge}"}]}`);
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
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §c${username}§fis kicked"}]}`);
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

            bedrockServer.executeCommand(`ability @a[name="${username}"] mute true`);
            bedrockServer.executeCommand(`tag @a[name="${username}"] add mute`);
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r§l §7${username}§fis §cMuted"}]}`);
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

            bedrockServer.executeCommand(`ability @a[name="${username}"] mute false`);
            bedrockServer.executeCommand(`tag @a[name="${username}"] remove mute`);
            console.log("\x1b[41m", `${username} UnMute > [ UnMuted by ${origin.getName()} ]`, "\x1b[0m");
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r§l §7${username}§fis §aUnMuted"}]}`);
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

mkFileKeep(ban_json);

let ban: any = {};
ban = JSON.parse(fs.readFileSync(ban_json, "utf8"));

command.register(bancommand, "Ban player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const player of param.target.newResults(origin, ServerPlayer)) {
            const DeviceId = player.deviceId;
            const ip = player.getNetworkIdentifier();
            const username = player.getName();
            const banObj = JSON.parse(fs.readFileSync(ban_json, "utf8"));
            const target = param.target.newResults(origin)!;
            const legnth = target.length;
            for (let i = 0; i < legnth; i++) {
                banObj[DeviceId] = "BANNED";
                fs.writeFileSync(ban_json, JSON.stringify(banObj), "utf8");
                updateban();
                kick(ip, bantitle);
                console.log("\x1b[41me", `${username} - Device BANed`, "\x1b[0m");
            }
        }
    },
    {
        target: PlayerCommandSelector,
    },
);
command.register(updatebancommand, "update ban.json", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    ban = JSON.parse(fs.readFileSync(ban_json, "utf8"));
    console.log(green("ban.json updated"));

    const entity = origin.getEntity();
    if (entity?.isPlayer()) {
        bedrockServer.executeCommand(
            `tellraw @a[name="${origin.getName()}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§7ban.json applied normally."}]}`,
        );
    }
}, {});

events.packetAfter(MinecraftPacketIds.Login).on((ptr, networkIdentifier, packetId) => {
    const connreq = ptr.connreq;
    if (connreq === null) return;
    const DeviceId = connreq.getDeviceId();

    if (ban[DeviceId]?.includes("BADED")) {
        kick(networkIdentifier, bantitle);
    }
});

function updateban() {
    try {
        ban = JSON.parse(fs.readFileSync(ban_json, "utf8"));
        return true;
    } catch (err) {}
    return false;
}

const peer = serverInstance.networkHandler.instance.peer;

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
                bedrockServer.executeCommand(
                    `tellraw @a[name="${actorname}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §b${username}§b's info\n\n§l§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${
                        BuildPlatform[os] || "UNKNOWN"
                    }\n§eDeviceID §f: §7${DeviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${peer.GetAveragePing(address)}ms"}]}`,
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
            bedrockServer.executeCommand(
                `tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §b${username}§b님의 정보\n\n§l§eIP §f: §7${ip}\n§eName §f: §7${username}\n§eOS §f: §7${
                    BuildPlatform[os] || "UNKNOWN"
                }\n§eDeviceID §f: §7${DeviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${peer.GetAveragePing(address)}ms"}]}`,
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

        bedrockServer.executeCommand(`tp @a[name="${username}"] ${spawncoordinate}`);
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§f§l[§7Server§f] §r${spawncommandtitle}"}]}`);
    }, {});
}

events.packetBefore(MinecraftPacketIds.CommandRequest).on((ev, ni) => {
    if (ev.command == "/about") {
        bedrockServer.executeCommand(
            `tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §c§lthis server use sos9533scr."}]}`,
        );
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

        bedrockServer.executeCommand(`tp @a[name="${username}"] ${tpcoordinateA}`);
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §r${tpcommandtitleA}"}]}`);
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

        bedrockServer.executeCommand(`tp @a[name="${username}"] ${tpcoordinateB}`);
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §r${tpcommandtitleB}"}]}`);
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

        bedrockServer.executeCommand(`tp @a[name="${username}"] ${tpcoordinateC}`);
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §r${tpcommandtitleC}"}]}`);
    }, {});
}
command.register("sos9533scr", "This Server use sos9533scr", CommandPermissionLevel.Normal).overload((param, origin, output) => {
    bedrockServer.executeCommand(
        `tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §c§lthis server use sos9533scr. download : https://github.com/sos9533/bdsx-sos9533scr-english / made by sos9533"}]}`,
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

        bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemA}`);
        bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemB}`);
        bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemC}`);
        bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemD}`);
        bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemE}`);
        bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemF}`);
        bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemG}`);
        bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemH}`);
    }, {});
}

const LAST = new Map<NetworkIdentifier, number>();
const COUNT = new Map<NetworkIdentifier, number>();
const DELAY_LIMIT = 3;

function kick(target: NetworkIdentifier, message = anticrasherkicktitle) {
    serverInstance.disconnectClient(target, message);
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
            bedrockServer.executeCommand(`tellraw @a[name="${ni.getActor()!.getName()}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r ${blockcolorwordtitle}"}]}`);
            return CANCEL;
        }
    }

    if (usechin === true) {
        let message = ptr.message.replace(/"/gi, `'`);
        if (chinchatset === "A")
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f<${chin[ni.getActor()!.getName()]}§f> §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        else if (chinchatset === "B")
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f<${chin[ni.getActor()!.getName()]}§f> §r${ptr.name}§r : ${message}"}]}`);
        else if (chinchatset === "C")
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[${chin[ni.getActor()!.getName()]}§f] §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        else if (chinchatset === "D")
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§f[${chin[ni.getActor()!.getName()]}§f] §r${ptr.name}§r : ${message}"}]}`);
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
                            bedrockServer.executeCommand(`playsound random.levelup @a[name="${origin.getName()}"]`);
                            bedrockServer.executeCommand(
                                `tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§aprocessed successfully!"}]}`,
                            );
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
                        bedrockServer.executeCommand(`playsound random.levelup @a[name="${origin.getName()}"]`);
                        bedrockServer.executeCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§aprocessed successfully!"}]}`);
                    } else {
                        bedrockServer.executeCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§cthe prefix is too long!"}]}`);
                        bedrockServer.executeCommand(`playsound random.orb @a[name="${origin.getName()}"]`);
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
                bedrockServer.executeCommand(`playsound random.levelup @a[name="${actor.getName()}"]`);
                bedrockServer.executeCommand(`tellraw "${actor.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§aprocessed successfully"}]}`);
            } else {
                bedrockServer.executeCommand(`tellraw "${actor.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§cthe prefix is too long!"}]}`);
                bedrockServer.executeCommand(`playsound random.orb @a[name="${actor.getName()}"]`);
            }
        }, {});
    }
}

export function setBossBar(target: NetworkIdentifier,title: string, percent: number, color?: BossEventPacket.Colors): void {
    const pk = BossEventPacket.allocate();
    pk.entityUniqueId = target.getActor()!.getUniqueIdPointer().getBin64();
    pk.type = BossEventPacket.Types.Show;
    pk.title = title;
    pk.healthPercent = percent;
    if(color) pk.color = color;
    pk.sendTo(target)
    pk.dispose();
}

export function removeBossBar(target: NetworkIdentifier,title: string): void {
    const pk = BossEventPacket.allocate();
    pk.entityUniqueId = target.getActor()!.getUniqueIdPointer().getBin64();
    pk.type = BossEventPacket.Types.Hide;
    pk.sendTo(target)
    pk.dispose();
}

command.register(removebossbarcommand, 'remove bossbar', CommandPermissionLevel.Operator).overload((params, origin, output) => {
    for (const target of params.target.newResults(origin, ServerPlayer)) {
        const ni = target.getNetworkIdentifier();
        removeBossBar(ni, params.title)
    }
}, {
    target: ActorWildcardCommandSelector,
    title: CxxString,
});

command.register(setbossbarcommand, 'set bossbar', CommandPermissionLevel.Operator).overload((params, origin, output) => {
    for (const target of params.target.newResults(origin, ServerPlayer)) {
        const ni = target.getNetworkIdentifier();
        if ( params.enum === 'blue' ) {
            setBossBar(ni, params.title, params.percent,BossEventPacket.Colors.Blue)
        }
        if ( params.enum === 'red' ) {
            setBossBar(ni, params.title, params.percent,BossEventPacket.Colors.Red)
        }
        if ( params.enum === 'green' ) {
            setBossBar(ni, params.title, params.percent,BossEventPacket.Colors.Green)
        }
        if ( params.enum === 'yellow' ) {
            setBossBar(ni, params.title, params.percent,BossEventPacket.Colors.Yellow)
        }
        if ( params.enum === 'purple' ) {
            setBossBar(ni, params.title, params.percent,BossEventPacket.Colors.Purple)
        }
        if ( params.enum === 'white' ) {
            setBossBar(ni, params.title, params.percent,BossEventPacket.Colors.White)
        }
    }

}, {
    target: ActorWildcardCommandSelector,
    title: CxxString,
    percent: float32_t,
    enum: command.enum('color','blue','red','green','yellow','purple','white'), 
});

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
            bedrockServer.executeCommand(`tellraw "${username}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§eSet Home"}]}`);
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

        bedrockServer.executeCommand(`tp @a[name="${username}"] ${jsonObj[DeviceId]}`);
        bedrockServer.executeCommand(`tellraw "${username}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §l§eWarp Complete!"}]}`);
    }, {});
}
