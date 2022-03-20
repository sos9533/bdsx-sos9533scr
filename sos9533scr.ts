

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
    사용법, 적용법, 기능, 안내 (README.md)
     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/README.md

    저작권 안내 (LICENSE.md)
     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/LICENSE.md
    
     ctrl를 누른 상태로 링크를 클릭하고 open을 클릭하면 바로 이동됩니다.
*/


/////////////////////////////////////////////////////////////////////



//내용 변경하고 ctrl + s를 꼭 해서 저장하셔야지 작용이 됩니다.



/////////////////////////////////////////////////////////////////////

//참가 이벤트


//참여 환영 메시지 사용여부 (true/false)
let usewelcomemessage = true

//참여 환영 메시지 - 참가한 플레이어의 채팅창에 출력
const welcomemessage = "§l§7환영합니다!"




//참가시 긴 닉네임 강퇴하기 사용여부 (true/false) - 닉핵방지
let uselongnicknamekick = true

//긴 닉네임 길이 (권장:30)
const longnicknamekicklength = 30

//긴 닉네임 강퇴 안내 메시지 - 전체 유저에게 출력
const longnicknamekickmessage = "§e비정상적인 닉네임§f을 감지하여 접속중이던 플레이어를 강제퇴장조치 합니다."

//긴 닉네임 강퇴 안내 메시지 - 강퇴된 플레이어의 화면에 출력
const longnicknamekicktitle = "§l§f[ §7Kick §f]\n\n§c비정상적인 닉네임이 감지되어 서버에서 추방되셨습니다."




//참가시 삼성 툴박스 유저 강퇴하기 사용여부 (true/false) - 툴박방지
let usetoolboxkick = true

//툴박스 강퇴 안내 메시지 - 전체 유저에게 출력
const toolboxkickmessage = "§e툴박스§f를 감지하여 접속중이던 플레이어를 강제퇴장조치 합니다."

//툴박스 강퇴 안내 메시지 - 툴박스 사용 플레이어의 화면에 출력
const toolboxkicktitle = "§l§f[ §7Kick §f]\n\n§c툴박스가 감지되어 서버에서 추방되셨습니다."



/////////////////////////////////////////////////////////////////////

//관리자 명령어


//강퇴 명령어 (/빼고) - 관리자 전용 명령어
const kickcommand = "강퇴"

//강퇴 안내 메시지 - 강퇴된 플레이어의 화면에 출력
const kicktitle = "§l§f[ §7Kick §f]\n\n§c당신은 서버에서 추방되셨습니다.\n§7재접속이 가능합니다."




//뮤트 명령어 (/빼고) - 관리자 전용 명령어
const mutecommand = "뮤트"

//뮤트해제 명령어 (/빼고) - 관리자 전용 명령어
const unmutecommand = "뮤트해제"




/////////////////////////////////////////////////////////////////////

//일반인 명령어


//스폰 명령어 사용여부 (true/false)
let usespawncommand = true

//스폰 명령어 (/빼고) - 일반유저 명령어
const spawncommand = "스폰"

//스폰 좌표 (x y z)
const spawncoordinate = "0 10 0"

//스폰 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const spawncommandtitle = "§l§e스폰 이동 완료!"




//기타 tp 명령어 사용여부 (true/false)
let usestpcommand = true

//기타 tp 명령어 (/빼고) - 일반유저 명령어
const tpcommand = "광산"

//기타 tp명령어 설명 (/빼고)
const tpcommandexplanation = "광산으로 이동합니다."

//기타 tp 좌표 (x y z)
const tpcoordinate = "100 10 100"

//기타 tp 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const tpcommandtitle = "§l§7광산 이동 완료!"




/////////////////////////////////////////////////////////////////////

//기타 설정


//도배방지 사용여부 (true/false)
let usechatcut = true

//도배방지 장문방지 글자수 (권장:100)
const chatcutmessagelength = 100

//도배방지 단타방지 시간 (권장:1000)
const chatcutmessagespeedtime = 1000

//도배방지 장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
const chatcutlongtitle = "§l§c채팅이 너무 깁니다!"

//도배방지 단타방지 안내 메시지 - 단타를 한 플레이어의 채팅창에 출력
const chatcutspeedtitle = "§l§c채팅이 너무 빠릅니다!"




//§ 사용 막기 사용여부 (true/false)
let useblockcolorword = true

//§ 사용시 안내메시지 - §를 입력한 플레이어의 채팅창에 출력
const blockcolorwordtitle = "§l§c색깔기호는 사용이 금지되어 있습니다! 평범하게 말하세요!"




/////////////////////////////////////////////////////////////////////


import { events } from "bdsx/event";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { bedrockServer } from "bdsx/launcher";
import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { ActorWildcardCommandSelector, CommandPermissionLevel } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { serverInstance } from "bdsx/bds/server";
import { command } from "bdsx/command";
import { BuildPlatform, CANCEL } from "bdsx/common";
import { gray, green, red } from "colors";

console.log("[","sos9533scr".yellow,"] allocated", " - sos9533".green);

events.serverOpen.on(() => {
    console.log("[","sos9533scr".yellow,"] launching", " - sos9533".green);
});

events.serverClose.on(() => {
    console.log("[","sos9533scr".yellow,"] closed", " - sos9533".red);
});

export const playerList = new Map<NetworkIdentifier, string>();
const peer = serverInstance.networkHandler.instance.peer;

events.packetAfter(MinecraftPacketIds.Login).on((ptr, networkIdentifier, packetId) => {
    const ip = networkIdentifier.getAddress();
    const connreq = ptr.connreq;
    if (connreq === null) return;
    const cert = connreq.cert;
    const username = cert.getId();
    const xuid = cert.getXuid();

    if (username) playerList.set(networkIdentifier, username);

    bedrockServer.executeCommand(`ability @a[name="${username}",tag=mute] mute true`, );

    if (uselongnicknamekick === true) {
        if (username.length > longnicknamekicklength) {
            serverInstance.disconnectClient(networkIdentifier, `${longnicknamekicktitle}`)
            console.log("\x1b[41m", `${username} kicked > [ Kicked by long nickname ]`, "\x1b[0m")
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§7[§fSYSTEM§7]§r ${longnicknamekickmessage}"}]}`, );
        } else {
            console.log(green(`${username}> IP:${ip}, XUID:${xuid} OS:${BuildPlatform[connreq.getDeviceOS()] || 'UNKNOWN'}`)); 
        }
    }
       
    if (usetoolboxkick === true) {
        if (DeviceModel?.includes(`samsung`)) {
            serverInstance.disconnectClient(networkIdentifier,`${toolboxkicktitle}`);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by toolbox ]`, "\x1b[0m")
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§7[§fSYSTEM§7]§r ${toolboxkickmessage}"}]}`, );
        }
    }   
       

    if (uselongnicknamekick === false) {
        console.log(green(`${username}> IP:${ip}, XUID:${xuid} OS:${BuildPlatform[connreq.getDeviceOS()] || 'UNKNOWN'}`)); 
    }
});

events.networkDisconnected.on(networkIdentifier => {
    const username = playerList.get(networkIdentifier);
    playerList.delete(networkIdentifier);
    console.log(red(`${username}> Exit server`));
    
});

events.playerJoin.on((ev)=>{
    const username = ev.player.getName();
    if (usewelcomemessage === true) {
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${welcomemessage}"}]}`, );
    }
});

events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const message = ptr.message.replace(/"/gi, `'`);
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

events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
    let time : any = {}
    const player = ni.getActor()!.getName()

    if (usechatcut === true) {
        
        if (ptr.message.length > chatcutmessagelength) {
            bedrockServer.executeCommand(`tellraw @a[name="${player}"] {"rawtext":[{"text":"${chatcutlongtitle}"}]}`, );
            return CANCEL; 
        }

        if (time[player] === undefined){
                time[player] = new Date()
        } 
        else if (Number(new Date()) - time[player] < chatcutmessagespeedtime) {
            bedrockServer.executeCommand(`tellraw @a[name="${player}"] {"rawtext":[{"text":"${chatcutspeedtitle}"}]}`, );
            return CANCEL;
        } else {
            time[player] = new Date();
        }
    }
 });

command.register("sos953"+"3scr","this server use sos9"+"533's plugin. Omlet Arcade : sos9"+"533", CommandPermissionLevel.Normal);
command.register(`${kickcommand}`, "플레이어를 강퇴합니다.", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    for (const target of param.target.newResults(origin)) {
        const username = target.getName();
        const ip = target.getNetworkIdentifier();
        const actor = origin.getName();

        for (let actor of param.target.newResults(origin)) {
            if (actor.as(ServerPlayer).isPlayer()) {
                serverInstance.disconnectClient(ip,`${kicktitle}`);
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§f§l[§7Server§f] §c${username}§f님이 서버에서 추방되셨습니다."}]}`, );
                console.log("\x1b[41m", `${username} kicked > [ Kicked by ${actor} ]`, "\x1b[0m")
            
            }
        }
    }
}, {
    target: ActorWildcardCommandSelector
});

command.register(`${mutecommand}`, "플레이어를 뮤트처리 합니다.", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    for (const target of param.target.newResults(origin)) {
        const username = target.getName();

        for (let actor of param.target.newResults(origin)) {
            if (actor.as(ServerPlayer).isPlayer()) {
                bedrockServer.executeCommand(`ability @a[name="${username}"] mute true`, );
                bedrockServer.executeCommand(`tag @a[name="${username}"] add mute`, );
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§f§l[§7Server§f] §7${username}§f님이 §c뮤트처리 §f되셨습니다."}]}`, );
            }
        }
    }
}, {
    target: ActorWildcardCommandSelector
});

command.register(`${unmutecommand}`, "플레이어를 뮤트해제처리 합니다.", CommandPermissionLevel.Operator).overload((param, origin, output) => {
    for (const target of param.target.newResults(origin)) {
        const username = target.getName();

        for (let actor of param.target.newResults(origin)) {
            if (actor.as(ServerPlayer).isPlayer()) {
                bedrockServer.executeCommand(`ability @a[name="${username}"] mute false`, );
                bedrockServer.executeCommand(`tag @a[name="${username}"] remove mute`, );
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§f§l[§7Server§f] §7${username}§f님이 §a뮤트해제 §f되셨습니다."}]}`, );
            }
        }
    }
}, {
    target: ActorWildcardCommandSelector
});

if (usespawncommand === true) {
    command.register(`${spawncommand}`, "스폰으로 이동합니다.").overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (entity === null) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        if (origin.as(ServerPlayer).isPlayer()) {
            bedrockServer.executeCommand(`tp @a[name="${username}"] ${spawncoordinate}`, );
            bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§f§l[§7Server§f] §r${spawncommandtitle}"}]}`, );
        }
    }, { })
};

if (usestpcommand === true) {
    command.register(`${tpcommand}`, `${tpcommandexplanation}`).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (entity === null) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        if (origin.as(ServerPlayer).isPlayer()) {
            bedrockServer.executeCommand(`tp @a[name="${username}"] ${tpcoordinate}`, );
            bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§f§l[§7Server§f] §r${tpcommandtitle}"}]}`, );
        }
    }, { })
};

if (useblockcolorword === true) {
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {

        if (ptr.message?.includes("§")) {
            bedrockServer.executeCommand(`tellraw @a[name="${ni.getActor()!.getName()}"] {"rawtext":[{"text":"${blockcolorwordtitle}"}]}`, );
            return CANCEL;
        }
    })
};

