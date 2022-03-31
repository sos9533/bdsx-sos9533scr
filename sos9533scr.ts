

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
// This plugin was made for Korean Omlet Arcade user

/*
    사용법, 적용법, 기능, 안내 (README.md)
     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/README.md

    저작권 안내 (LICENSE.md)
     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/LICENSE.md
    
     ctrl를 누른 상태로 링크를 클릭하고 open을 클릭하면 바로 이동됩니다.
*/


/////////////////////////////////////////////////////////////////////



//내용 변경하고 ctrl + s를 꼭 해서 저장하셔야지 적용이 됩니다.



/////////////////////////////////////////////////////////////////////

//참가 이벤트


//참여 환영 메시지 사용여부 (true/false)
let usewelcomemessage = "true"

//참여 환영 메시지 - 참가한 플레이어의 채팅창에 출력
const welcomemessage = "§l§7환영합니다!"




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




//영구밴 명령어 (/빼고) - 관리자 전용 명령어
const bancommand = "밴"

//밴 json 이름 (.json 포함)
const banjsonname = "ban.json"

//밴 안내 메시지 - 영구밴된 플레이어의 화면에 출력
const bantitle = "§l§f[ §cBAN §f]\n\n§c당신은 서버에서 영구밴 되셨습니다.\n§7재접속이 불가능합니다."

//밴 업데이트 명령어
const updatebancommand = "밴업데이트"

//밴 사용법 안내 (HowToUse_BAN.md)
//     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/HowToUse_BAN.md




//정보확인 명령어 (/빼고) - 관리자 전용 명령어 (원하는 유저의 정보 확인가능)
const getinfocommand = "정보확인"




/////////////////////////////////////////////////////////////////////

//일반인 명령어


//내정보 명령어 사용여부 (true/false) (자신의 정보만 확인가능)
let usemyinfocommand = "true"

//내정보 명령어 (/빼고) - 일반유저 명령어
const myinfocommand = "내정보"




//스폰 명령어 사용여부 (true/false)
let usespawncommand = "true"

//스폰 명령어 (/빼고) - 일반유저 명령어
const spawncommand = "스폰"

//스폰 좌표 (x y z)
const spawncoordinate = "0 10 0"

//스폰 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const spawncommandtitle = "§l§e스폰 이동 완료!"


    //기타 tp 명령어1 사용여부 (true/false)
    let usestpcommandA = "false"
    //기타 tp 명령어1 (/빼고) - 일반유저 명령어
    const tpcommandA = "광산"
    //기타 tp 명령어1 설명
    const tpcommandexplanationA = "광산으로 이동합니다."
    //기타 tp 명령어1 좌표 (x y z)
    const tpcoordinateA = "100 10 100"
    //기타 tp 명령어1 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
    const tpcommandtitleA = "§l§7광산 이동 완료!"

    //기타 tp 명령어2 사용여부 (true/false)
    let usestpcommandB = "false"
    //기타 tp 명령어2 (/빼고) - 일반유저 명령어
    const tpcommandB = "상점"
    //기타 tp 명령어2 설명 (/빼고)
    const tpcommandexplanationB = "상점으로 이동합니다."
    //기타 tp 명령어2 좌표 (x y z)
    const tpcoordinateB = "105 10 105"
    //기타 tp 명령어2 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
    const tpcommandtitleB = "§l§7상점 이동 완료!"

    //기타 tp 명령어3 사용여부 (true/false)
    let usestpcommandC = "false"
    //기타 tp 명령어3 (/빼고) - 일반유저 명령어
    const tpcommandC = "점프맵"
    //기타 tp 명령어3 설명 (/빼고)
    const tpcommandexplanationC = "점프맵으로 이동합니다."
    //기타 tp 명령어3 좌표 (x y z)
    const tpcoordinateC = "110 10 110"
    //기타 tp 명령어3 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
    const tpcommandtitleC = "§l§7점프맵 이동 완료!"




//기본템 명령어 사용여부 (true/false)
let usebasicitemcommand = "true"

//기본템 명령어 (/빼고) - 일반유저 명령어
const basicitemcommand = "기본템"

//처음 접속시 자동으로 기본템 지급 (true/false)
let joingivebasicitem = "true"

//아이템 1
const basicitemA = "wooden_sword 1"
//아이템 2
const basicitemB = "wooden_axe 1"
//아이템 3
const basicitemC = "wooden_pickaxe 1"
//아이템 4
const basicitemD = "wooden_hoe 1"
//아이템 5
const basicitemE = "wooden_shovel 1"
//아이템 6
const basicitemF = "leather_chestplate 1"
//아이템 7
const basicitemG = "leather_leggings 1"
//아이템 8
const basicitemH = "cooked_beef 64"
//(아이템 부분 비워놔도 버그 안남)



/////////////////////////////////////////////////////////////////////

//불법 프로그램 (핵) 방지


//참가시 삼성 툴박스 유저 강퇴하기 사용여부 (true/false) - 툴박방지
let usetoolboxkick = "true"

//툴박스 강퇴 안내 메시지 - 전체 유저에게 출력
const toolboxkickmessage = "§e툴박스§f를 감지하여 접속중이던 플레이어를 강제퇴장조치 합니다."

//툴박스 강퇴 안내 메시지 - 툴박스 사용 플레이어의 화면에 출력
const toolboxkicktitle = "§l§f[ §7Kick §f]\n\n§c툴박스가 감지되어 서버에서 추방되셨습니다."




//참가시 긴 닉네임 강퇴하기 사용여부 (true/false) - 닉핵방지
let uselongnicknamekick = "true"

//긴 닉네임 길이 (권장:30)
const longnicknamekicklength = 30

//긴 닉네임 강퇴 안내 메시지 - 전체 유저에게 출력
const longnicknamekickmessage = "§e비정상적인 닉네임§f을 감지하여 접속중이던 플레이어를 강제퇴장조치 합니다."

//긴 닉네임 강퇴 안내 메시지 - 강퇴된 플레이어의 화면에 출력
const longnicknamekicktitle = "§l§f[ §7Kick §f]\n\n§c비정상적인 닉네임이 감지되어 서버에서 추방되셨습니다."




//도배방지 사용여부 (true/false)
let usechatcut = "true"

//일반채팅 도배방지-장문방지 글자수 (권장:100)
const chatcutmessagelength = 100

//일반채팅 도배방지-단타방지 시간 (권장:1000)
const chatcutmessagespeedtime = 1000

//일반채팅 도배방지-장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
const chatcutlongtitle = "§l§c채팅이 너무 깁니다!"

//일반채팅 도배방지-단타방지 안내 메시지 - 단타를 한 플레이어의 채팅창에 출력
const chatcutspeedtitle = "§l§c채팅이 너무 빠릅니다!"


//귓속말 도배방지-장문방지 (권장:30) (/w @a @e @e @e @e @e @e @e과 같은 방식으로 서버를 터트리는 방법이 있음)
const wcutmessagelength = 30

//귓속말 도배방지-장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
const nowhispermessge = "§l§c귓속말을 이용한 강종을 막기위해 귓속말은 길게 사용이 금지되어 있습니다!"

//도배방지 오픈소스 출처 ( https://github.com/kdg7313/bdsx-script )
//해당 도배방지 코드는 MIT 라이센스로써 출처 삽입후 사용할수 있는 오픈소스입니다.




//안티크래셔 사용여부 (true/false) ----- Made By mdisprgm
let useanticrasher = "true"

//안티크래셔 강퇴 안내 메시지 - 강종 사용 플레이어의 화면에 출력 ----- Made By mdisprgm
const anticrasherkicktitle = "§l§f[ §7Kick §f]\n\n§c크래셔가 감지되어 서버에서 추방되셨습니다."

//안티크래셔 오픈소스 출처 ( https://github.com/mdisprgm/bdsx-anticrasher )
//해당 안티 크래셔 코드는 MIT 라이센스로써 출처 삽입후 사용할수 있는 오픈소스입니다.




/////////////////////////////////////////////////////////////////////

//기타기능

//§ 사용 막기 사용여부 (true/false)
let useblockcolorword = "true"

//§ 사용시 안내메시지 - §를 입력한 플레이어의 채팅창에 출력
const blockcolorwordtitle = "§l§c색깔기호는 사용이 금지되어 있습니다! 평범하게 말하세요!"




/////////////////////////////////////////////////////////////////////


import { ActorCommandSelector, ActorWildcardCommandSelector, CommandPermissionLevel } from "bdsx/bds/command"
import { NetworkIdentifier } from "bdsx/bds/networkidentifier"
import { MinecraftPacketIds } from "bdsx/bds/packetids"
import { ActorEventPacket } from "bdsx/bds/packets"
import { ServerPlayer } from "bdsx/bds/player"
import { serverInstance } from "bdsx/bds/server"
import { command } from "bdsx/command"
import { BuildPlatform, CANCEL } from "bdsx/common"
import { events } from "bdsx/event"
import { bedrockServer } from "bdsx/launcher"
import { gray, green, red } from "colors"
import * as fs from 'fs'

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
    const DeviceModel = connreq.getJsonValue()!["DeviceModel"];

    if (username) playerList.set(networkIdentifier, username);

    if (uselongnicknamekick === "true") {
        if (username.length > longnicknamekicklength) {
            serverInstance.disconnectClient(networkIdentifier, `${longnicknamekicktitle}`)
            console.log("\x1b[41m", `${username} kicked > [ Kicked by long nickname ]`, "\x1b[0m")
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§7[§fSYSTEM§7]§r ${longnicknamekickmessage}"}]}`, );
        } else {
            console.log(green(`${username}> IP:${ip}, XUID:${xuid} OS:${BuildPlatform[connreq.getDeviceOS()] || 'UNKNOWN'}`)); 
        }
    }
       
    if (usetoolboxkick === "true") {
        if (DeviceModel?.includes(`samsung`)) {
            serverInstance.disconnectClient(networkIdentifier,`${toolboxkicktitle}`);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by toolbox ]`, "\x1b[0m")
            bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"§l§7[§fSYSTEM§7]§r ${toolboxkickmessage}"}]}`, );
        }
    }   
       

    if (uselongnicknamekick === "false") {
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

    if (usewelcomemessage === "true") {
        bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${welcomemessage}"}]}`, );
    }

    if (usebasicitemcommand = "true") {
        if (joingivebasicitem = "true") {
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemA}`, );
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemB}`, );
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemC}`, );
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemD}`, );
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemE}`, );
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemF}`, );
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemG}`, );
            bedrockServer.executeCommand(`give @a[name="${username}",tag=!joinbasicitem] ${basicitemH}`, );
            bedrockServer.executeCommand(`tag @a[name="${username}",tag=!joinbasicitem] add joinbasicitem`, );
        }
    
    bedrockServer.executeCommand(`ability @a[name="${username}",tag=mute] mute true`, );
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

    if (usechatcut === "true") {
        
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

events.command.on((command, origin) => {
    if (usechatcut === "true") {
        
        if (command.startsWith(`/w `)) {
            if (command.length > wcutmessagelength) {
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"${nowhispermessge}"}]}`, );
                return 0;
            }
        }

        if (command.startsWith(`/tell `)) {
            if (command.length > wcutmessagelength) {
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"${nowhispermessge}"}]}`, );
                return 0;
            }
        }

        if (command.startsWith(`/msg `)) {
            if (command.length > wcutmessagelength) {
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"${nowhispermessge}"}]}`, );
                return 0;
            }
        }

        if (command.startsWith(`/me `)) {
            if (command.length > wcutmessagelength) {
                bedrockServer.executeCommand(`tellraw @a {"rawtext":[{"text":"${nowhispermessge}"}]}`, );
                return 0;
            }
        }
    }   
});

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
                console.log("\x1b[41m", `${username} Mute > [ Muted by ${origin.getName()} ]`, "\x1b[0m")
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
                console.log("\x1b[41m", `${username} UnMute > [ UnMuted by ${origin.getName()} ]`, "\x1b[0m")
            }
        }
    }
}, {
    target: ActorWildcardCommandSelector
});

let ban: any = {};
ban = JSON.parse(fs.readFileSync(banjsonname, "utf8")); 

command.register(`${bancommand}`, "플레이어를 밴처리 합니다.", CommandPermissionLevel.Operator).overload((param, origin, output)=>{
        for (const player of param.target.newResults(origin, ServerPlayer)) {
            if (param.target !== undefined) {
                const DeviceId = player.deviceId;
                const ip = player.getNetworkIdentifier();
                const username = player.getName();
                const banObj = JSON.parse(fs.readFileSync(banjsonname, "utf8"));
                const target = param.target.newResults(origin)!;
                const legnth = target.length;
                for (let i = 0; i < legnth; i++) {
                    banObj[DeviceId] = "BADED";
                    fs.writeFileSync(banjsonname, JSON.stringify(banObj), 'utf8');
                    updateban();
                    serverInstance.disconnectClient(ip,`${bantitle}`);
                    console.log("\x1b[41me", `${username} - Device BANed`, "\x1b[0m")
                }
            }
        
    }
}, {
    target: ActorCommandSelector,
});
command.register("sos953"+"3scr","this server use sos9"+"533's plugin. Omlet Arcade : sos9"+"533", CommandPermissionLevel.Normal);
command.register(`${updatebancommand}`,`${banjsonname}를 업대이트 합니다.`,CommandPermissionLevel.Operator).overload((param, origin, output) => {
    ban = JSON.parse(fs.readFileSync(banjsonname, "utf8"));
    console.log(green(`${banjsonname} updated`));

    if (origin.as(ServerPlayer).isPlayer()) {
        bedrockServer.executeCommand(`tellraw @a[name="${origin.getName()}"] {"rawtext":[{"text":"§f§l[§7Server§f] §7${banjsonname}이(가) 서버에 정상적으로 적용되었습니다."}]}`, );
    }
}, {});

events.packetAfter(MinecraftPacketIds.Login).on((ptr, networkIdentifier, packetId) => {
    const connreq = ptr.connreq;
    if (connreq === null) return; 
    const DeviceId = connreq.getDeviceId(); 

    if (ban[DeviceId]?.includes("BADED")) {
        serverInstance.disconnectClient(networkIdentifier,`${bantitle}`);
    }
});


function updateban() {
    try {
        ban = JSON.parse(fs.readFileSync(banjsonname, "utf8"));
        return true;
    } catch (err) {}
    return false;
}

command.register(`${getinfocommand}`, "원하는 유저의 정보를 확인합니다.").overload((param, origin, output) => {
    for (const player of param.target.newResults(origin, ServerPlayer)) {
        if (param.target !== undefined) {

            if (player?.isPlayer()) {

                if (player === null) {
                    console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
                    return;
                }
                const actor = origin.getName();
                const DeviceId = player.deviceId;
                const ip = player.getNetworkIdentifier();
                const username = player.getName();
                const xuid = player.getXuid();
                const os = player.getPlatform();
            
                if (origin.as(ServerPlayer).isPlayer()) {
                    bedrockServer.executeCommand(`tellraw @a[name="${actor}"] {"rawtext":[{"text":"§f§l[§7Server§f] §b${username}§b님의 정보\n\n§l§eIP §f: §7${ip}\n§eName §f: §7${username}\n§eOS §f: §7${BuildPlatform[os] || 'UNKNOWN'}\n§eDeviceID §f: §7${DeviceId}\n§eXuid §f: §7${xuid}"}]}`, );
                }
            }
        }
    }    
}, { 
    target: ActorCommandSelector,
})

if (usemyinfocommand === "true") {
    command.register(`${myinfocommand}`, "내정보를 확인합니다.").overload((param, origin, output) => {
        const player = origin.getEntity();
        if (player?.isPlayer()) {

            if (player === null) {
                console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
                return;
            }
            const username = origin.getName();
            const ip = player.getNetworkIdentifier();
            const DeviceId = player.deviceId
            const xuid = player.getXuid();
            const os = player.getPlatform();
            


            if (origin.as(ServerPlayer).isPlayer()) {
                bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§f§l[§7Server§f] §b${username}§b님의 정보\n\n§l§eIP §f: §7${ip}\n§eName §f: §7${username}\n§eOS §f: §7${BuildPlatform[os] || 'UNKNOWN'}\n§eDeviceID §f: §7${DeviceId}\n§eXuid §f: §7${xuid}"}]}`, );
            }
        }
        
    }, { })
}

if (usespawncommand === "true") {
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


if (usestpcommandA === "true") {
    command.register(`${tpcommandA}`, `${tpcommandexplanationA}`).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (entity === null) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        if (origin.as(ServerPlayer).isPlayer()) {
            bedrockServer.executeCommand(`tp @a[name="${username}"] ${tpcoordinateA}`, );
            bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§f§l[§7Server§f] §r${tpcommandtitleA}"}]}`, );
        }
    }, { })
};

if (usestpcommandB === "true") {
    command.register(`${tpcommandB}`, `${tpcommandexplanationB}`).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (entity === null) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        if (origin.as(ServerPlayer).isPlayer()) {
            bedrockServer.executeCommand(`tp @a[name="${username}"] ${tpcoordinateB}`, );
            bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§f§l[§7Server§f] §r${tpcommandtitleB}"}]}`, );
        }
    }, { })
};

if (usestpcommandC === "true") {
    command.register(`${tpcommandC}`, `${tpcommandexplanationC}`).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (entity === null) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        if (origin.as(ServerPlayer).isPlayer()) {
            bedrockServer.executeCommand(`tp @a[name="${username}"] ${tpcoordinateC}`, );
            bedrockServer.executeCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§f§l[§7Server§f] §r${tpcommandtitleC}"}]}`, );
        }
    }, { })
};

if (usebasicitemcommand === "true") {
    command.register(`${basicitemcommand}`, `기본템을 지급합니다.`).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (entity === null) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        if (origin.as(ServerPlayer).isPlayer()) {
            bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemA}`, );
            bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemB}`, );
            bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemC}`, );
            bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemD}`, );
            bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemE}`, );
            bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemF}`, );
            bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemG}`, );
            bedrockServer.executeCommand(`give @a[name="${username}"] ${basicitemH}`, );

        }
    }, { })
};


if (useblockcolorword === "true") {
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {

        if (ptr.message?.includes("§")) {
            bedrockServer.executeCommand(`tellraw @a[name="${ni.getActor()!.getName()}"] {"rawtext":[{"text":"${blockcolorwordtitle}"}]}`, );
            return CANCEL;
        }
    })
};


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

events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((pkt, ni) => {
    if (useanticrasher === "true") {
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
    }
});

{
    const FOOD_LAST = new Map<NetworkIdentifier, number>(); 
    const FOOD_COUNT = new Map<NetworkIdentifier, number>(); 

    events.packetBefore(MinecraftPacketIds.ActorEvent).on((pkt, ni) => {
        if (useanticrasher === "ture") {
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
        }   
    });
}

events.packetBefore(MinecraftPacketIds.PlayerAuthInput).on((pkt, ni) => {
    if (useanticrasher === "ture") {
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
    }
});
