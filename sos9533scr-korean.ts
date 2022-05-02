//
//  _______  _______  _______   _____   _______  ______   ______
// (  ____ \(  ___  )(  ____ \ / ___ \ (  ____ \/ ___  \ / ___  \
// | (    \/| (   ) || (    \/( (   ) )| (    \/\/   \  \\/   \  \
// | (_____ | |   | || (_____ ( (___) || (____     ___) /   ___) /
// (_____  )| |   | |(_____  ) \____  |(_____ \   (___ (   (___ (
//       ) || |   | |      ) |      ) |      ) )      ) \      ) \
// /\____) || (___) |/\____) |/\____) )/\____) )/\___/  //\___/  /
// \_______)(_______)\_______)\______/ \______/ \______/ \______/

//  Made by sos9533
// ..

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
const usewelcomemessage: boolean = true;

//참여 환영 메시지 - 참가한 플레이어의 채팅창에 출력
const welcomemessage = "§l§7환영합니다!";

/////////////////////////////////////////////////////////////////////

//관리자 명령어

//강퇴 명령어 (/빼고) - 관리자 전용 명령어
const kickcommand = "강퇴";

//강퇴 안내 메시지 - 강퇴된 플레이어의 화면에 출력
const kicktitle = "§l§f[ §7Kick §f]\n\n§c당신은 서버에서 추방되셨습니다.\n§7재접속이 가능합니다.";

//뮤트 명령어 (/빼고) - 관리자 전용 명령어
const mutecommand = "뮤트";

//뮤트해제 명령어 (/빼고) - 관리자 전용 명령어
const unmutecommand = "뮤트해제";

//플레이어 디바이스 차단 명령어 (/빼고) - 관리자 전용 명령어
const Devicebancommand = "디바이스-밴";

//플레이어 차단 해제 명령어 (/빼고) - 관리자 전용 명령어
const Deviceunbancommand = "디바이스-밴해제";

//플레이어 차단 명령어 (/빼고) - 관리자 전용 명령어
const bancommand = "밴";

//플레이어 차단 해제 명령어 (/빼고) - 관리자 전용 명령어
const unbancommand = "밴해제";

//영구밴 플레이어 확인 (/빼고) - 관리자 전용 명령어
const showbanlistcommand = "밴목록";

//플레이어가 접속하지 않았을때 device id 를 이용해 차단 (/빼고) - 관리자 전용 명령어
const OfflinePlayerDeivceBanCommand = "미접속자-디바이스-밴";

//밴 안내 메시지 - 영구밴된 플레이어의 화면에 출력
const bantitle = "§l§f[ §cBAN §f]\n\n§c당신은 서버에서 영구밴 되셨습니다.\n§7재접속이 불가능합니다.";

//정보확인 명령어 사용여부 (true/false) (모든 op가 모든 어떤 유저든 정보 확인가능)
const usegetinfocommand: boolean = true;

//정보확인 명령어 (/빼고) - 관리자 전용 명령어 (원하는 유저의 정보 확인가능)
const getinfocommand = "정보확인";

/////////////////////////////////////////////////////////////////////

//일반인 명령어

//내정보 명령어 사용여부 (true/false) (자신의 정보만 확인가능)
const usemyinfocommand: boolean = true;

//내정보 명령어 (/빼고) - 일반유저 명령어
const myinfocommand = "내정보";

//스폰 명령어 사용여부 (true/false)
const usespawncommand: boolean = true;

//스폰 명령어 (/빼고) - 일반유저 명령어
const spawncommand = "스폰";

//스폰 좌표 (x y z)
const spawncoordinate = "0 10 0";

//스폰 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const spawncommandtitle = "§l§e스폰 이동 완료!";

//기타 tp 명령어1 사용여부 (true/false)
const usestpcommandA: boolean = false;
//기타 tp 명령어1 (/빼고) - 일반유저 명령어
const tpcommandA = "광산";
//기타 tp 명령어1 설명
const tpcommandexplanationA = "광산으로 이동합니다.";
//기타 tp 명령어1 좌표 (x y z)
const tpcoordinateA = "100 10 100";
//기타 tp 명령어1 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const tpcommandtitleA = "§l§7광산 이동 완료!";

//기타 tp 명령어2 사용여부 (true/false)
const usestpcommandB: boolean = false;
//기타 tp 명령어2 (/빼고) - 일반유저 명령어
const tpcommandB = "상점";
//기타 tp 명령어2 설명 (/빼고)
const tpcommandexplanationB = "상점으로 이동합니다.";
//기타 tp 명령어2 좌표 (x y z)
const tpcoordinateB = "105 10 105";
//기타 tp 명령어2 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const tpcommandtitleB = "§l§7상점 이동 완료!";

//기타 tp 명령어3 사용여부 (true/false)
const usestpcommandC: boolean = false;
//기타 tp 명령어3 (/빼고) - 일반유저 명령어
const tpcommandC = "점프맵";
//기타 tp 명령어3 설명 (/빼고)
const tpcommandexplanationC = "점프맵으로 이동합니다.";
//기타 tp 명령어3 좌표 (x y z)
const tpcoordinateC = "110 10 110";
//기타 tp 명령어3 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const tpcommandtitleC = "§l§7점프맵 이동 완료!";

//셋홈 명령어 사용여부
const usesethomecommand: boolean = true;

//셋홈 명령어 (/빼고) - 일반유저 명령어
const sethomecommand = "집설정";

//홈이동 명령어 (/빼고) - 일반유저 명령어
const homecommand = "집이동";

//티피요청 명령어 사용여부 (true/false)
const usetpacommand: boolean = true;

//티피요청 명령어 (/빼고) - 일반유저 명령어
const tpacommand = "티피요청";

//티피요청 수락 명령어 (/빼고) - 일반유저 명령어
const tpacceptcommand = "티피수락";

//기본템 명령어 사용여부 (true/false)
const usebasicitemcommand: boolean = true;

//기본템 명령어 (/빼고) - 일반유저 명령어
const basicitemcommand = "기본템";

//처음 접속시 자동으로 기본템 지급 (true/false)
const joingivebasicitem: boolean = true;

//아이템 1
const basicitemA = "wooden_sword 1";
//아이템 2
const basicitemB = "wooden_axe 1";
//아이템 3
const basicitemC = "wooden_pickaxe 1";
//아이템 4
const basicitemD = "wooden_hoe 1";
//아이템 5
const basicitemE = "wooden_shovel 1";
//아이템 6
const basicitemF = "leather_chestplate 1";
//아이템 7
const basicitemG = "leather_leggings 1";
//아이템 8
const basicitemH = "cooked_beef 64";
//(아이템 부분 비워놔도 버그 안남)

/////////////////////////////////////////////////////////////////////

//칭호

//칭호 사용여부
const usechin: boolean = true;

//칭호 형식 설정
//형식A     <칭호> <닉네임> : 채팅
//형식B     <칭호> 닉네임 : 채팅
//형식C     [칭호] <닉네임> : 채팅
//형식D     [칭호] 닉네임 : 채팅
const chinchatset = "A";

//칭호 사용법 - " " 써야함
//형식A     오피유저(커멘드)가 일반유저의 칭호 설정 - /칭호 (닉네임) "(칭호)"
//형식B     모든유저가 자신의 칭호를 설정 - /칭호 "(칭호)"
//형식C     모든유저가 UI를 사용하여 자신의 칭호를 설정 - /칭호  - (그 창같은거 나와서 칭호적는 칸 나오는거)
const howusechin: string = "A";

//칭호 명령어 (/빼고)
const chincommand = "칭호";

//칭호 명령어 설명
const chincommandexplanation = "칭호를 설정합니다.";

//칭호 글자수 제한 (칭호 사용법 형식A 제외)
const chinlength = 10;

//기본 칭호 - 아무칭호도 없을때 대신 출력될 칭호
const basicchin = "§l§7일반인";

/////////////////////////////////////////////////////////////////////

const DEFAULT_KICK_MESSAGE = "§c강제 퇴장 조치합니다";
const DEVICE_ID_FMT_LENGTH = 36;
const DEVICE_ID_FMT_LENGTH_ANDROID = 32;

//불법 프로그램 (핵) 방지

//참가시 삼성 툴박스 유저 강퇴하기 사용여부 (true/false) - 툴박방지
const usetoolboxkick: boolean = true;

//툴박스 강퇴 안내 메시지 - 전체 유저에게 출력
const toolboxkickmessage = "§e툴박스§f를 감지하여 접속중이던 플레이어를 강제퇴장조치 합니다.";

//툴박스 강퇴 안내 메시지 - 툴박스 사용 플레이어의 화면에 출력
const toolboxkicktitle = "§l§f[ §7Kick §f]\n\n§c툴박스가 감지되어 서버에서 추방되셨습니다.";

//가짜 OS 강퇴 안내 메시지 - 가짜 OS 사용 플레이어의 화면에 출력
const FakeOSdetectionTitle = "§l§f[ §7Kick §f]\n\n§c가짜 OS가 감지되어 서버에서 추방되셨습니다.";

//참가시 긴 닉네임 강퇴하기 사용여부 (true/false) - 닉핵방지
const uselongnicknamekick: boolean = true;

//긴 닉네임 길이 (권장:30)
const longnicknamekicklength = 30;

//긴 닉네임 강퇴 안내 메시지 - 전체 유저에게 출력
const longnicknamekickmessage = "§e비정상적인 닉네임§f을 감지하여 접속중이던 플레이어를 강제퇴장조치 합니다.";

//긴 닉네임 강퇴 안내 메시지 - 강퇴된 플레이어의 화면에 출력
const longnicknamekicktitle = "§l§f[ §7Kick §f]\n\n§c비정상적인 닉네임이 감지되어 서버에서 추방되셨습니다.";

//도배방지 사용여부 (true/false)
const usechatcut: boolean = true;

//일반채팅 도배방지-장문방지 글자수 (권장:100)
const chatcutmessagelength = 100;

//일반채팅 도배방지-단타방지 시간 (권장:1000)
const chatcutmessagespeedtime = 1000;

//일반채팅 도배방지-장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
const chatcutlongtitle = "§l§c채팅이 너무 깁니다!";

//일반채팅 도배방지-단타방지 안내 메시지 - 단타를 한 플레이어의 채팅창에 출력
const chatcutspeedtitle = "§l§c채팅이 너무 빠릅니다!";

//귓속말 도배방지-장문방지 (권장:30) (/w @a @e @e @e @e @e @e @e과 같은 방식으로 서버를 터트리는 방법이 있음)
const wcutmessagelength = 30;

//귓속말 도배방지-장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
const nowhispermessge = "§l§c귓속말을 이용한 강종을 막기위해 귓속말은 길게 사용이 금지되어 있습니다!";

//도배방지 오픈소스 출처 ( https://github.com/kdg7313/bdsx-script )
//해당 도배방지 코드는 MIT 라이센스로써 출처 삽입후 사용할수 있는 오픈소스입니다.

//안티크래셔 사용여부 (true/false) ----- Made By mdisprgm
const useanticrasher: boolean = true;

//안티크래셔 강퇴 안내 메시지 - 강종 사용 플레이어의 화면에 출력 ----- Made By mdisprgm
const anticrasherkicktitle = "§l§f[ §7Kick §f]\n\n§c크래셔가 감지되어 서버에서 추방되셨습니다.";

//안티크래셔 오픈소스 출처 ( https://github.com/mdisprgm/bdsx-anticrasher )
//해당 안티 크래셔 코드는 MIT 라이센스로써 출처 삽입후 사용할수 있는 오픈소스입니다.

/////////////////////////////////////////////////////////////////////

//기타기능

//§ 사용 막기 사용여부 (true/false)
const useblockcolorword: boolean = true;

//§ 사용시 안내메시지 - §를 입력한 플레이어의 채팅창에 출력
const blockcolorwordtitle = "§l§c색깔기호는 사용이 금지되어 있습니다! 평범하게 말하세요!";

//보스바 생성 명령어 (/빼고)
const setbossbarcommand = "보스바생성";

//보스바 삭제 명령어 (/빼고)
const removebossbarcommand = "보스바삭제";

//cps 액션바 표시 사용여부 (true/false) - false 시 cps 측정 & 표시 안 함
const useCPSchecker: boolean = true;

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
function makeFile(filepath: string, value = {}) {
    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(filepath, JSON.stringify(value));
        console.log("[", "sos9533scr".yellow, "]", `Made '${filepath}'`.gray, " - sos9533".green);
    }
}
function makeDir(dirname: string) {
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
}

makeDir("./banDB");
makeDir("./DbanDB");

const PlayerDeviceID: any = {};
const runCommand = bedrockServer.executeCommand;

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

console.log("[", "sos9533scr".yellow, "] allocated", " - sos9533".green);

events.serverOpen.on(() => {
    console.log("[", "sos9533scr".yellow, "] launching", " - sos9533".green);
});

events.serverClose.on(() => {
    console.log("[", "sos9533scr".yellow, "] closed", " - sos9533".red);
});

export const playerList = new Map<NetworkIdentifier, string>();

events.levelTick.once((ev) => {
    runCommand("scoreboard objectives add cps dummy");
});

events.packetAfter(MinecraftPacketIds.Login).on((ptr, networkIdentifier, packetId) => {
    const connreq = ptr.connreq;
    if (connreq === null) return;
    const cert = connreq.cert;
    const ip = networkIdentifier.getAddress();
    const xuid = cert.getXuid();
    const username = cert.getId();
    let deviceModel = connreq.getJsonValue()!["DeviceModel"];

    if (username) playerList.set(networkIdentifier, username);

    if (uselongnicknamekick) {
        if (username.length > longnicknamekicklength) {
            kick(networkIdentifier, longnicknamekicktitle);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by long nickname ]`, "\x1b[0m");
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${longnicknamekickmessage}"}]}`);
        }
    }

    if (usetoolboxkick) {
        if (deviceModel.includes("samsung")) {
            kick(networkIdentifier, toolboxkicktitle);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by toolbox ]`, "\x1b[0m");
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${toolboxkickmessage}"}]}`);
        }
    }

    if (deviceModel === "") deviceModel = "No Model";

    const OS = connreq.getDeviceOS();

    if (deviceModel !== "No Model" && OS === BuildPlatform.WINDOWS_10) {
        kick(networkIdentifier, FakeOSdetectionTitle);
        console.log(red(`[ sos9533scr ] ${username} | Fake OS Detection [조작된 OS]`));
    }

    if (deviceModel === "No Model" && OS !== BuildPlatform.WINDOWS_10) {
        kick(networkIdentifier, FakeOSdetectionTitle);
        console.log(red(`[ sos9533scr ] ${username} | Fake OS Detection [조작된 OS]`));
    }

    console.log(green(`${username}> IP:${ip}, XUID:${xuid}, OS:${BuildPlatform[connreq.getDeviceOS()] || "UNKNOWN"}, Model:${deviceModel}`));
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
    const message = ptr.message.replace(/"/g, "''");
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
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
        const username = ni.getActor()!.getName();

        if (ptr.message.length > chatcutmessagelength) {
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
    });
}

events.command.on((command, origin) => {
    const cmdhead = command.split(" ")[0];
    if (usechatcut) {
        if (cmdhead === "/w") {
            if (command.length > wcutmessagelength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/tell") {
            if (command.length > wcutmessagelength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/msg") {
            if (command.length > wcutmessagelength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${nowhispermessge}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/me") {
            if (command.length > wcutmessagelength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${nowhispermessge}"}]}`);
                return 0;
            }
        }
    }
});

command.register(kickcommand, "플레이어를 강퇴합니다.", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();
            const ni = target.getNetworkIdentifier();
            kick(ni, kicktitle);
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §c${username}§f님이 서버에서 추방되셨습니다."}]}`);
            console.log("\x1b[41m", `${username} kicked > [ Kicked by ${origin.getName()} ]`, "\x1b[0m");
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

command.register(mutecommand, "플레이어를 뮤트처리 합니다.", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();

            runCommand(`ability @a[name="${username}"] mute true`);
            runCommand(`tag @a[name="${username}"] add mute`);
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §7${username}§f님이 §c뮤트처리 §f되셨습니다."}]}`);
            console.log("\x1b[41m", `${username} Mute > [ Muted by ${origin.getName()} ]`, "\x1b[0m");
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

command.register(unmutecommand, "플레이어를 뮤트해제처리 합니다.", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();

            runCommand(`ability @a[name="${username}"] mute false`);
            runCommand(`tag @a[name="${username}"] remove mute`);
            console.log("\x1b[41m", `${username} UnMute > [ UnMuted by ${origin.getName()} ]`, "\x1b[0m");
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §7${username}§f님이 §a뮤트해제 §f되셨습니다."}]}`);
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

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
                onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§f§l §c${username}(이)가 연결을 시도했습니다 [Name Ban Player]`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Name Ban Player]`));
            return CANCEL;
        }
        const ToString = String(getbantime);
        if (ToString == "null" || ToString == "") {
            kick(ni, bantitle);
            for (let i1 = 0; i1 < op_count; i1++) {
                onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§f§l §c${username}(이)가 연결을 시도했습니다 [Name Ban Player]`);
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
        const banTime = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;

        const Now = dateWithZero().split("-");
        const nyear = Number(Now[0]);
        const nmonth = Number(Now[1]);
        const nday = Number(Now[2]);
        const nhours = Number(Now[3]);
        const nminutes = Number(Now[4]);

        if (nyear >= year && nmonth >= month && nday >= day && nhours >= hours && nminutes >= minutes) {
            unbanenum.removeValues(`${username}`);
            fs.unlink(`./banDB/${username}`, (err) => { });
            return;
        }

        kick(ni, `${bantitle}\n§f차단은 §l${banTime}§r까지입니다`);
        for (let i1 = 0; i1 < op_count; i1++) {
            onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§f§l §c${username}(이)가 연결을 시도했습니다 [Name Ban Player]`);
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
                onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§f§l §c${username}(이)가 연결을 시도했습니다 [Device Ban Player]`);
            }
            console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player]`));
            return CANCEL;
        }
        const ToString = String(getbantime);
        if (ToString == "null" || ToString == "") {
            kick(ni, bantitle);
            for (let i1 = 0; i1 < op_count; i1++) {
                onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§f§l §c${username}(이)가 연결을 시도했습니다 [Device Ban Player]`);
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
        const banTime = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;

        const Now = dateWithZero().split("-");
        const nyear = Number(Now[0]);
        const nmonth = Number(Now[1]);
        const nday = Number(Now[2]);
        const nhours = Number(Now[3]);
        const nminutes = Number(Now[4]);

        if (nyear >= year && nmonth >= month && nday >= day && nhours >= hours && nminutes >= minutes) {
            unbanenum.removeValues(PlayerDeviceID[username]);
            fs.unlink(`./DbanDB/${PlayerDeviceID[username]}`, (err) => { });
            return;
        }

        kick(ni, `${bantitle}\n§f차단은 §l${banTime}§r까지입니다`);
        for (let i1 = 0; i1 < op_count; i1++) {
            onlineops[i1].sendMessage(`§l§f[ §esos9533scr §f]§f§l §c${username}(이)가 연결을 시도했습니다 [Device Ban Player]`);
        }
        console.log(red(`[ sos9533scr ] ${username} tried connection [Device Ban Player]`));
        return CANCEL;
    }
});

const cmd_unban = command.register(unbancommand, "차단된 플레이어를 서버에 접속가능하도록 합니다", CommandPermissionLevel.Operator);

const unbanenum = command.softEnum("player", fs.readdirSync("./banDB/"));
const dunbanenum = command.softEnum("DeviceID", fs.readdirSync("./DbanDB/"));

cmd_unban.overload(
    (inputs, ni) => {
        const plname = ni.getName();

        if (plname === inputs.player) {
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§e행운을 빌게요 :)"}]}`);
            return 0;
        }
        if (inputs.player === "") {
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §cError: 이름을 적어주세요"}]}`);
            return;
        }

        let banlist = fs.readdirSync("./banDB/");
        if (banlist.includes(`${inputs.player}`) === false) {
            if (ni.isServerCommandOrigin() === true) {
                console.log(red(`${inputs.player}(은)는 이 서버에서 차단되어있지 않습니다\nbanlist로 차단 목록을 확인하세요`));
                return CANCEL;
            } else {
                runCommand(
                    `tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${inputs.player}(은)는 이 서버에서 차단되어있지 않습니다\n§e/banlist §c로 차단 목록을 확인하세요"}]}`,
                );
                return CANCEL;
            }
        } else {
            fs.unlink(`./banDB/${inputs.player}`, (err) => { });
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l 플레이어 ${inputs.player}(을)를 차단해제 했습니다"}]}`);
            console.log(yellow(`${plname} : ${inputs.player}(을)를 차단해제 했습니다`));
            unbanenum.removeValues(`${inputs.player}`);
        }
    },
    {
        player: unbanenum,
    },
);

command.register(bancommand, "플레이어가 이 서버에 접속하지 못하도록 합니다 (시간은 분 단위, 0이나 입력하지 않으면 영구)", CommandPermissionLevel.Operator).overload(
    (inputs, corg) => {
        const plname = corg.getName();
        if (inputs.player.getName() === plname) {
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§e자기자신은 가장 소중한 존재입니다"}]}`);
            return CANCEL;
        }

        if (inputs.player.getName() == null || inputs.player.getName() == "") {
            runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §cError: 이름을 적어주세요"}]}`);
            return CANCEL;
        }

        let banlist = fs.readdirSync(`./banDB/`);
        if (banlist.includes(`${inputs.player.getName()}`) == true) {
            if (corg.isServerCommandOrigin() == true) {
                console.log(red(`플레이어 ${inputs.player.getName()}(은)는 이미 차단된 플레이어입니다`));

                return CANCEL;
            } else {
                runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l 플레이어 ${inputs.player.getName()}(은)는 이미 차단된 플레이어입니다"}]}`);
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

        for (true; minutes > 59;) {
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

        const BannedTime = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
        const BannedTime2 = `${year}-${month}-${day}-${hours}-${minutes}`;

        fs.writeFileSync(`./banDB/${inputs.player.getName()}`, BannedTime2);

        console.log(yellow(`${plname} : ${inputs.player.getName()}(을)를 차단했습니다`));
        runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l 플레이어 ${inputs.player.getName()}(을)를 차단했습니다"}]}`);
        unbanenum.addValues(`${inputs.player.getName()}`);
        if (runCommand(`testfor "${inputs.player.getName()}"`).isSuccess() == true) {
            for (const pl of inputs.player.newResults(corg)) {
                const Ni = pl.getNetworkIdentifier();
                if (inputs.minutes == 0 || !inputs.minutes) {
                   kick(Ni, bantitle);
                } else {
                    kick(Ni, `${bantitle}\n§f차단은 §l${BannedTime}§r까지입니다`);
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

command.register(Devicebancommand,"플레이어의 디바이스가 이 서버에 접속하지 못하도록 합니다 (시간은 분 단위, 0이나 입력하지 않으면 영구)",CommandPermissionLevel.Operator,).overload(async (inputs, corg) => {
            const originName = corg.getName();
            const targetName = inputs.player.getName();
            inputs.minutes = inputs.minutes ?? 0;

            if (targetName === originName) {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§e자기자신은 가장 소중한 존재입니다"}]}`);
                return;
            }

            if (targetName == null || targetName == "") {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §cError: 이름을 적어주세요"}]}`);
                return;
            }

            if (runCommand(`testfor ${targetName}`).isSuccess() === false || PlayerDeviceID[targetName] == null) {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §cError: 해당 명령어는 접속하지 않은 플레이어에겐 사용할 수 없습니다"}]}`);
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §cError: 접속하지 않은 플레이어의 디바이스를 이미 알고있고 차단하고싶다면 "c-d-ban <DeviceID>"로 차단 할 수 있습니다"}]}`,);
                if (corg.isServerCommandOrigin()) {
                    console.log(red("Error: 해당 명령어는 접속하지 않은 플레이어에겐 사용할 수 없습니다"));
                    console.log(yellow('접속하지 않은 플레이어의 디바이스를 이미 알고있고 차단하고싶다면 "c-d-ban <DeviceID>"로 차단 할 수 있습니다'));
                }
                return;
            }

            const banlist = fs.readdirSync("./banDB/");
            const banlist2 = fs.readdirSync("./DbanDB/");
            if (banlist.includes(targetName) === true || banlist2.includes(PlayerDeviceID[targetName]) === true) {
                if (corg.isServerCommandOrigin()) {
                    console.log(red(`플레이어 ${targetName}(은)는 이미 차단된 플레이어입니다`));
                    return;
                } else {
                    runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l 플레이어 ${targetName}(은)는 이미 차단된 플레이어입니다"}]}`);
                    return;
                }
            }

    const date = new Date();
    let hours = date.getHours();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let minutes = date.getMinutes() + inputs.minutes;
    let day = date.getDate();

    for (true; minutes > 59;) {
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

    const BannedTime = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
    const BannedTime2 = `${year}-${month}-${day}-${hours}-${minutes}`;

    const deviceId = PlayerDeviceID[targetName];

    fs.writeFileSync(`./DbanDB/${deviceId}`, BannedTime2);

            runCommand(`execute ${originName} ~ ~ ~ playsound random.orb ~ ~ ~ 1 1.5 1`);
            runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l 플레이어 ${targetName}(을)를 차단했습니다 (${deviceId})"}]}`);
            console.log(yellow(`${originName} : ${targetName}(을)를 차단했습니다 (${deviceId})`));
            dunbanenum.addValues(deviceId);
            for (const player of inputs.player.newResults(corg)) {
                const ni = player.getNetworkIdentifier();
                if (inputs.minutes == 0 || !inputs.minutes) {
                    kick(ni, bantitle);
                } else {
                    kick(ni, `${bantitle}\n§f차단은 §l${BannedTime}§r까지입니다`);
                }
                return;
            }
        },
        {
            player: PlayerCommandSelector,
            minutes: [int32_t, true],
        },
    );

command.register(Deviceunbancommand, "디바이스 차단된 플레이어를 서버에 접속가능하도록 합니다", CommandPermissionLevel.Operator).overload(
    (inputs, corg) => {
        const originName = corg.getName();

        if (inputs.DeviceID == "") {
            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"§cError: 이름을 적어주세요"}]}`);
            return;
        }
        if (inputs.DeviceID.length !== DEVICE_ID_FMT_LENGTH && inputs.DeviceID.length !== DEVICE_ID_FMT_LENGTH_ANDROID) {
            if (corg.isServerCommandOrigin()) {
                console.log(red("Error: 해당 명령어는 DeviceID만 입력할 수 있습니다 (DeviceID의 예시 : aa12aaa3-abc4-567a-b890-12c34dc567e8)"));
                return;
            } else {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §cError: 해당 명령어는 DeviceID만 입력할 수 있습니다"}]}`);
                return;
            }
        }

        let Dbanlist = fs.readdirSync(`./DbanDB/`);
        if (!Dbanlist.includes(inputs.DeviceID)) {
            if (corg.isServerCommandOrigin()) {
                console.log(red(`${inputs.DeviceID}(은)는 이 서버에서 차단되어있지 않습니다\nbanlist로 차단 목록을 확인하세요`));

                return;
            } else {
                runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §c${inputs.DeviceID}(은)는 이 서버에서 차단되어있지 않습니다\n§e/banlist §c로 차단 목록을 확인하세요"}]}`,);
                return;
            }
        } else {
            fs.unlink(`./DbanDB/${inputs.DeviceID}`, (err) => { });
            runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l 디바이스 아이디 ${inputs.DeviceID}(을)를 차단해제 했습니다"}]}`);
            console.log(yellow(`${originName} : ${inputs.DeviceID}(을)를 차단해제 했습니다`));
            dunbanenum.removeValues(inputs.DeviceID);
        }
    },
    {
        DeviceID: dunbanenum,
    },
);

command.register(showbanlistcommand, "서버에서 차단당한 플레이어 목록을 보여줍니다", CommandPermissionLevel.Operator).overload((asdf, corg) => {
    const plname = corg.getName();
    const banlist = fs.readdirSync("./banDB/", { withFileTypes: false });
    const Dbanlist = fs.readdirSync("./DbanDB/", { withFileTypes: false });
    if (corg.isServerCommandOrigin() == true) {
        console.log(yellow(`차단된 플레이어 목록 : ${banlist}`));
        console.log(yellow(`디바이스 차단된 플레이어 목록 : ${Dbanlist}`));
    } else {
        runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l 차단된 플레이어 목록 : ${banlist}"}]}`);
        runCommand(`tellraw ${plname} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l 디바이스 차단된 플레이어 목록 : ${Dbanlist}"}]}`);
    }
}, {});

command.register(OfflinePlayerDeivceBanCommand,"플레이어가 접속하지 않더라도 디바이스 아이디를 이용해 차단합니다 (시간제 차단이 되지 않습니다)",CommandPermissionLevel.Operator,).overload((input, corg) => {
            const originName = corg.getName();
            const input_length = input.DeviceID.length;
            const targetDeviceId = input.DeviceID;
            if (input_length !== DEVICE_ID_FMT_LENGTH && input_length !== DEVICE_ID_FMT_LENGTH_ANDROID) {
                if (corg.isServerCommandOrigin()) {
                    console.log(red("Error: 해당 명령어는 DeviceID만 입력할 수 있습니다 (DeviceID의 예시 : aa12aaa3-abc4-567a-b890-12c34dc567e8"));
                    return CANCEL;
                } else {
                    runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §cError: 해당 명령어는 DeviceID만 입력할 수 있습니다"}]}`);
                    return CANCEL;
                }
            }
            const banlist = fs.readdirSync("./DbanDB/");
            if (banlist.includes(targetDeviceId) === true) {
                if (corg.isServerCommandOrigin()) {
                    console.log(red(`디바이스 ${targetDeviceId}(은)는 이미 차단되어있습니다`));
                    return CANCEL;
                } else {
                    runCommand(`tellraw ${originName} {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §cError: 디바이스 ${targetDeviceId}(은)는 이미 차단되어있습니다"}]}`);
                    return CANCEL;
                }
            }

    fs.writeFileSync(`./DbanDB/${targetDeviceId}`, "");
    console.log(yellow(`${originName} : ${targetDeviceId}(을)를 차단했습니다`));
},
    {
        DeviceID: CxxString,
    },
);

const RakPeer = bedrockServer.rakPeer;

if (usegetinfocommand) {
    command.register(getinfocommand, "원하는 유저의 정보를 확인합니다.", CommandPermissionLevel.Operator).overload(
        (param, origin, output) => {
            if (!origin.getEntity()?.isPlayer()) {
                console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
                return;
            }

            for (const player of param.target.newResults(origin, ServerPlayer)) {
                const originName = origin.getName();
                const DeviceId = player.deviceId;
                const ni = player.getNetworkIdentifier();
                const username = player.getName();
                const xuid = player.getXuid();
                const os = player.getPlatform();
                const address = player.getNetworkIdentifier().address;
                runCommand(
                    `tellraw @a[name="${originName}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §b${username}§b님의 정보\n\n§l§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${BuildPlatform[os] || "UNKNOWN"
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
    command.register(myinfocommand, "내정보를 확인합니다.").overload((param, origin, output) => {
        const player = origin.getEntity();
        if (!player?.isPlayer()) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        const username = origin.getName();
        const ni = player.getNetworkIdentifier();
        const address = ni.address;
        const deviceId = player.deviceId;
        const xuid = player.getXuid();
        const os = player.getPlatform();

        runCommand(
            `tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§r §b${username}§b님의 정보\n\n§l§eIP §f: §7${ni}\n§eName §f: §7${username}\n§eOS §f: §7${BuildPlatform[os] || "UNKNOWN"
            }\n§eDeviceID §f: §7${deviceId}\n§eXuid §f: §7${xuid}\n§ePing §f: §7${RakPeer.GetAveragePing(address)}ms"}]}`,
        );
    }, {});
}

if (usespawncommand) {
    command.register(spawncommand, "스폰으로 이동합니다.").overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${spawncoordinate}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §r${spawncommandtitle}"}]}`);
    }, {});
}

if (usestpcommandA) {
    command.register(tpcommandA, tpcommandexplanationA).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateA}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §r${tpcommandtitleA}"}]}`);
    }, {});
}

if (usestpcommandB) {
    command.register(tpcommandB, tpcommandexplanationB).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateB}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §r${tpcommandtitleB}"}]}`);
    }, {});
}

if (usestpcommandC) {
    command.register(tpcommandC, tpcommandexplanationC).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateC}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §r${tpcommandtitleC}"}]}`);
    }, {});
}
command.register("sos9533scr", "§r§l§fBDSX 기본세팅 플러그인 - §cCopyright (c) 2022 sos9533§r", CommandPermissionLevel.Normal).overload((param, origin, output) => {
    runCommand(
        `tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§c본서버는 sos9533scr를 사용중입니다. \n다운로드 : https://github.com/sos9533/bdsx-sos9533scr \n제작자 : sos9533 (omlet)"}]}`,
    );
}, {});
if (usebasicitemcommand) {
    command.register(basicitemcommand, "기본템을 지급합니다.").overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
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

function kick(target: NetworkIdentifier, message = DEFAULT_KICK_MESSAGE) {
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

makeFile(chin_json);

const ChinData = JSON.parse(fs.readFileSync(chin_json, "utf8"));
function saveChin() {
    fs.writeFileSync(chin_json, JSON.stringify(ChinData), "utf8");
}

if (useblockcolorword === true) {
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
        const actor = ni.getActor()!;
        const username = actor.getName();

        if (useblockcolorword === true) {
            if (ptr.message?.includes("§")) {
                runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l ${blockcolorwordtitle}"}]}`);
                return CANCEL;
            }
        }
    });
}

if (usechin === true) {
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
        const actor = ni.getActor()!;
        const username = actor.getName();
        const message = ptr.message.replace(/"/gi, `''`);

        if (chinchatset === "A") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f<${ChinData[username] || basicchin}§f> §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        } else if (chinchatset === "B") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f<${ChinData[username] || basicchin}§f> §r${ptr.name}§r : ${message}"}]}`);
        } else if (chinchatset === "C") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[${ChinData[username] || basicchin}§f] §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        } else if (chinchatset === "D") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§l§f[${ChinData[username] || basicchin}§f] §r${ptr.name}§r : ${message}"}]}`);
        }
        return CANCEL;
    });

    if (howusechin === "A") {
        command.register(chincommand, chincommandexplanation, CommandPermissionLevel.Operator).overload(
            (params, origin, output) => {
                if (params.prefix !== undefined && params.target !== undefined) {
                    for (const player of params.target.newResults(origin, ServerPlayer)) {
                        const username = player.getName();
                        const target = params.target.newResults(origin)!;
                        const prefix = params.prefix;
                        const legnth = target.length;

                        for (let i = 0; i < legnth; i++) {
                            ChinData[username] = prefix;
                            saveChin();
                            runCommand(`playsound random.levelup @a[name="${origin.getName()}"]`);
                            runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§a해당유저에게 칭호가 적용됬습니다!"}]}`);
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
                const originName = origin.getName();
                if (params.prefix !== undefined && origin.getEntity() !== undefined) {
                    const prefix = params.prefix;
                    if (prefix.length < chinlength) {
                        ChinData[originName] = prefix;
                        saveChin();
                        runCommand(`playsound random.levelup @a[name="${originName}"]`);
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§a칭호가 적용됬습니다!"}]}`);
                    } else {
                        runCommand(`tellraw "${originName}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§c칭호가 너무 깁니다!"}]}`);
                        runCommand(`playsound random.orb @a[name="${originName}"]`);
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
            if (!actor?.isPlayer()) {
                console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
                return;
            }
            const ni = actor.getNetworkIdentifier();
            const username = actor.getName();

            const res = await Form.sendTo(ni, {
                type: "custom_form",
                title: "§l§0칭호",
                content: [
                    {
                        type: "input",
                        text: "§l§7사용할 칭호를 입력하세요! §l§0[ §gsos9533scr §0]§r ",
                        default: "§l§7일반인",
                    },
                ],
            });

            if (res === null) return;

            if (res[0]?.length < chinlength && username) {
                const prefix = res[0];
                ChinData[username] = prefix;
                saveChin();

                runCommand(`playsound random.levelup @a[name="${username}"]`);
                runCommand(`tellraw "${username}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§a칭호가 적용됬습니다!"}]}`);
            } else {
                runCommand(`tellraw "${username}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§c칭호가 너무 깁니다!"}]}`);
                runCommand(`playsound random.orb @a[name="${username}"]`);
            }
        }, {});
    }
}

command.register(removebossbarcommand, "보스바를 삭제합니다.", CommandPermissionLevel.Operator).overload(
    (params, origin, output) => {
        for (const target of params.target.newResults(origin, ServerPlayer)) {
            target.removeBossBar();
        }
    },
    {
        target: PlayerCommandSelector,
        title: CxxString,
    },
);

command.register(setbossbarcommand, "보스바를 생성합니다.", CommandPermissionLevel.Operator).overload(
    (params, origin, output) => {
        for (const target of params.target.newResults(origin, ServerPlayer)) {
            let color: BossEventPacket.Colors = BossEventPacket.Colors.Purple;
            if (params.enum === "blue") {
                color = BossEventPacket.Colors.Blue;
            } else if (params.enum === "red") {
                color = BossEventPacket.Colors.Red;
            } else if (params.enum === "green") {
                color = BossEventPacket.Colors.Green;
            } else if (params.enum === "yellow") {
                color = BossEventPacket.Colors.Yellow;
            } else if (params.enum === "purple") {
                color = BossEventPacket.Colors.Purple;
            } else if (params.enum === "white") {
                color = BossEventPacket.Colors.White;
            }
            target.setBossBar(params.title, params.percent, color);
        }
    },
    {
        target: PlayerCommandSelector,
        title: CxxString,
        percent: float32_t,
        enum: command.enum("color", "blue", "red", "green", "yellow", "purple", "white"),
    },
);

if (usesethomecommand) {
    makeFile(sethome_json);
    command.register(sethomecommand, "현재 좌표를 집으로 등록합니다.").overload((param, origin, output) => {
        const username = origin.getName();
        const player = origin.getEntity();

        if (!player?.isPlayer()) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }
        const pos = player.getPosition();
        const DeviceId = player.deviceId;

        const jsonObj = JSON.parse(fs.readFileSync(sethome_json, "utf8"));
        const homePos = `${pos?.x ?? "??"} ${pos?.y ?? "??"} ${pos?.z ?? "??"}`;
        jsonObj[DeviceId] = homePos;
        fs.writeFileSync(sethome_json, JSON.stringify(jsonObj), "utf8");
        runCommand(`tellraw "${username}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§a현재 위치가 집으로 설정되었습니다."}]}`);
    }, {});

    command.register(homecommand, "집으로 이동합니다.").overload((param, origin, output) => {
        const username = origin.getName();
        const player = origin.getEntity();

        if (!player?.isPlayer()) {
            console.log(red("본 명령어는 콘솔에서 사용할수 없습니다."));
            return;
        }
        const DeviceId = player.deviceId;
        const jsonObj = JSON.parse(fs.readFileSync(sethome_json, "utf8"));

        runCommand(`tp @a[name="${username}"] ${jsonObj[DeviceId]}`);
        runCommand(`tellraw "${username}" {"rawtext":[{"text":"§l§f[ §esos9533scr §f]§f§l §l§a집으로 이동되었습니다!"}]}`);
    }, {});
}

const playerCPS: any = {};
events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((pkt, ni) => {
    if (useCPSchecker) {
        const playerName = ni.getActor()!.getName();
        if (pkt.sound === 42 || pkt.sound === 43) {
            if (isNaN(playerCPS[playerName])) {
                playerCPS[playerName] = 0;
            };
            playerCPS[playerName]++;
            runCommand(`title ${playerName} actionbar CPS : ${playerCPS[playerName]}`);
            setTimeout(() => {
                playerCPS[playerName]--;
                runCommand(`title ${playerName} actionbar CPS : ${playerCPS[playerName]}`);
            }, 1000);
        }
    }
});

if (usetpacommand) {
    const reqs = new Map<string, Set<string>>();

    command.register(tpacommand, "티피를 요청합니다.").overload(
        (param, origin) => {
            const players = param.player.newResults(origin);
            const originName = origin.getName();

            if (players.length > 1 || players.length < 1) {
                const oPlayer = origin.getEntity();

                if (oPlayer?.isPlayer()) {
                    oPlayer.sendMessage("§l§f[ §esos9533scr §f]§f§l §c유저 한명을 정확하게 선택해주세요.");
                }
                return;
            }

            const player = players[0];
            const username = player.getName();

            runCommand(
                `tellraw "${username}" {"rawtext": [{"text": "§l§f------ ${originName}님이 §a§l티피요청§f을 원합니다 ------\n§l§f------§c '/${tpacceptcommand} ${originName}'§f 명령어로 수락하세요. ------"}]}`,
            );

            const set = reqs.get(originName) ?? new Set();
            if (!reqs.has(originName)) reqs.set(originName, set);
            set.add(username);

            setTimeout(() => {
                if (set.delete(username))
                    runCommand(
                        `tellraw "${originName}" {"rawtext": [{"text":"§l§f------ 상대가 수락을 하여 §a${username}§f 님에게 이동됩니다 ------"}]}`,
                    );
            }, 60 * 1000);
        },
        { player: PlayerCommandSelector },
    );

    command.register(tpacceptcommand, "티피요청를 수락합니다").overload(
        (param, origin) => {
            const players = param.target.newResults(origin);
            if (players.length !== 1) {
                const oPlayer = origin.getEntity();
                if (oPlayer?.isPlayer()) {
                    oPlayer.sendMessage("§l§f[ §esos9533scr §f]§f§l §c유저 한명을 정확하게 선택해주세요.");
                }
                return;
            }

            const player = players[0];
            const originName = origin.getName();
            const username = player.getName();
            if (reqs.has(username)) {
                const set = reqs.get(username);
                if (!set) return;

                if (set.delete(originName)) {
                    runCommand(`tp "${username}" "${originName}"`);
                    runCommand(
                        `tellraw "${originName}" {"rawtext": [{"text":"§l§f-------------------- 상대가 이동합니다 --------------------"}]}`,
                    );
                    runCommand(
                        `tellraw "${username}" {"rawtext": [{"text":"§l§f-------------------- 상대가 수락을 하여 §a${originName}§f 님에게 이동됩니다 --------------------"}]}`,
                    );
                }
            }
        },
        { target: PlayerCommandSelector },
    );
}

command.register("낮", "서버의 시간을 낮으로 바꿉니다", CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set day");
    const player = corg.getEntity();
    if (player?.isPlayer()) player.sendMessage("§l§f[ §esos9533scr §f]§f§l §6서버의 시간 낮으로 변경되었습니다.");
}, {});

command.register("밤", "서버의 시간을 밤으로 바꿉니다", CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set night");
    const player = corg.getEntity();
    if (player?.isPlayer()) player.sendMessage("§l§f[ §esos9533scr §f]§f§l §6서버의 시간이 밤으로 변경되었습니다.");
}, {});
