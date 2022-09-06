//     .d88888b     .88888.    .d88888b    .d888b.   888888P   d8888b.   d8888b.                            
//     88.    "'   d8'   `8b   88.    "'   Y8' `88   88'           `88       `88                            
//     `Y88888b.   88     88   `Y88888b.   `8bad88   88baaa.    aaad8'    aaad8'   .d8888b.   .d8888b.   88d888b. 
//           `8b   88     88         `8b       `88       `88       `88       `88   Y8ooooo.   88'  `""   88'  `88 
//     d8'   .8P   Y8.   .8P   d8'   .8P   d.  .88        88       .88       .88         88   88.  ...   88       
//      Y88888P     `8888P'     Y88888P    `8888P    d88888P   d88888P   d88888P   `88888P'   `88888P'   dP       
//                                                                  

//  Made by sos9533, mdisprgm, job-gut, Blue00123, kdg7313

/*
    How to use (README.md)
    사용법, 적용법, 기능, 안내 (README.md)
     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/README.md


    About sos9533scr (LICENSE.md)
    sos9533scr에 대해 (LICENSE.md)
     ㄴ  https://github.com/sos9533/bdsx-sos9533scr/blob/main/README.md#Note
*/

// Change the content and save it by pressing ctrl + s.
//내용 변경하고 ctrl + s를 꼭 해서 저장하셔야지 적용이 됩니다.

/////////////////////////////////////////////////////////////////////
//plugin setting
//플러그인 세팅


//language setting ("english" / "korean")
//언어 설정 ("english" / "korean")
let language = "english";


//system message
//시스템 메시지
const SystemMessageTitle = "§l§f[ §dSERVER §f]§r";




/////////////////////////////////////////////////////////////////////
//welcome message
//참가 환영


//use welcome message (true/false)
//참여 환영 메시지 사용여부 (true/false)
const UseWelcomeMessage: boolean = true;


//welcome message
//참여 환영 메시지 - 참가한 플레이어의 채팅창에 출력
const WelcomeMessage = "§7welcome! \nEdit plugin's custom settings in 'plugins/bdsx-sos9533scr-main/sos9533scr'.\n\n'plugins/bdsx-sos9533scr-main/sos9533scr'에서 플러그인을 세팅해주세요.\n§cneed help? Discord : sos9533#9533\n도움이 필요하신가요? 디스코드 : sos9533#9533";




/////////////////////////////////////////////////////////////////////
//kick command
//내보내기 명령어


//kick command (with out /) - For OP
//강퇴 명령어 (/빼고) - 관리자 전용 명령어
const KickCommand = "out";


//kick message
//강퇴 안내 메시지
const KickTitle = "§l§f[ §7Kick §f]\n\n§cYou are kicked from server\n§7You can join the server again";




/////////////////////////////////////////////////////////////////////
//mute command
//채팅금지 명령어


//mute command (with out /) - For OP
//뮤트 명령어 (/빼고) - 관리자 전용 명령어
const MuteCommand = "mute";


//unmute command (with out /) - For OP
//뮤트해제 명령어 (/빼고) - 관리자 전용 명령어
const UnmuteCommand = "unmute";


//mute message
//뮤트 안내 메시지
const MuteMessage = "you are muted!";




/////////////////////////////////////////////////////////////////////
//ban command
//밴 명령어


//Device ban command (with out /) - For OP
//플레이어 디바이스 차단 명령어 (/빼고) - 관리자 전용 명령어
const DeviceBanCommand = "device-ban";


//Device unban command (with out /) - For OP
//플레이어 디바이스 차단 해제 명령어 (/빼고) - 관리자 전용 명령어
const DeviceUnbanCommand = "device-unban";




//Name ban command (with out /) - For OP
//플레이어 닉네임 차단 명령어 (/빼고) - 관리자 전용 명령어
const NameBanCommand = "name-ban";


//Name unban command (with out /) - For OP
//플레이어 닉네임 차단 해제 명령어 (/빼고) - 관리자 전용 명령어
const NameUnBanCommand = "name-unban";




//ban list command (with out /) - For OP
//영구밴 플레이어 확인 (/빼고) - 관리자 전용 명령어
const ShowBanListCommand = "banlist";


//Offline Player Device Ban command [Only DeviceID] (with out /) - For OP
//플레이어가 접속하지 않았을때 device id 를 이용해 차단 (/빼고) - 관리자 전용 명령어
const OfflinePlayerDeivceBanCommand = "offline-ban-device";




//ban message
//밴 안내 메시지 - 영구밴된 플레이어의 화면에 출력
const BanTitle = "§l§f[ §cBAN §f]\n\n§cYou are banned from this server\n§7You can't join the server again";




/////////////////////////////////////////////////////////////////////
//getinfo command
//정보확인 명령어


//use get info command (true/false) (All OP can get user info(IP,Devcie ID,OS,Ping))
//정보확인 명령어 사용여부 (true/false) (모든 op가 모든 어떤 유저든 정보 확인가능)
const UseGetInfoCommand: boolean = true;


//get info command (with out /) - For OP
//정보확인 명령어 (/빼고) - 관리자 전용 명령어 (원하는 유저의 정보 확인가능)
const GetInfoCommand = "getinfo";




//use my info command (true/false) (All user can get their info(IP,Devcie ID,OS,Ping))
//내정보 명령어 사용여부 (true/false) (자신의 정보만 확인가능)
const UseMyInfoCommand: boolean = true;


//my info command (with out /) - For User
//내정보 명령어 (/빼고) - 일반유저 명령어
const MyInfoCommand = "myinfo";




/////////////////////////////////////////////////////////////////////
//warp command
//티피 명령어


//use spawn command (true/false)
//스폰 명령어 사용여부 (true/false)
const UseSpawnCommand: boolean = true;


//spawn command (with out /) - For User
//스폰 명령어 (/빼고) - 일반유저 명령어
const SpawnCommand = "spawn";


//spawn command explanation
//기타 tp 명령어1 설명
const Spawncommandexplanation = "tp to spawn";


//spawn coordinate (x y z)
//스폰 좌표 (x y z)
const SpawnCoordinate = "0 10 0";


//spawn warp message
//스폰 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const SpawnCommandTitle = "§eWarp Complete!";




//use tp command A (true/false)
//기타 tp 명령어1 사용여부 (true/false)
const usestpcommandA: boolean = false;

//tp command A (with out /) - For user
//기타 tp 명령어1 (/빼고) - 일반유저 명령어
const tpcommandA = "warpA";

//tp command A explanation
//기타 tp 명령어1 설명
const tpcommandexplanationA = "tp to warp point A";

//tp command A coordinate (x y z)
//기타 tp 명령어1 좌표 (x y z)
const tpcoordinateA = "100 10 100";

//tp command A warp message
//기타 tp 명령어1 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const tpcommandtitleA = "§eWarp Complete!";




//use tp command B (true/false)
//기타 tp 명령어2 사용여부 (true/false)
const usestpcommandB: boolean = false;

//tp command B (with out /) - For user
//기타 tp 명령어2 (/빼고) - 일반유저 명령어
const tpcommandB = "warpB";

//tp command B explanation
//기타 tp 명령어2 설명 (/빼고)
const tpcommandexplanationB = "tp to warp point B";

//tp command B coordinate (x y z)
//기타 tp 명령어2 좌표 (x y z)
const tpcoordinateB = "105 10 105";

//tp command B warp message
//기타 tp 명령어2 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const tpcommandtitleB = "§eWarp Complete!";




//기타 tp 명령어3 사용여부 (true/false)
//use tp command C (true/false)
const usestpcommandC: boolean = false;

//tp command C (with out /) - For user
//기타 tp 명령어3 (/빼고) - 일반유저 명령어
const tpcommandC = "warpC";

//tp command C explanation
//기타 tp 명령어3 설명 (/빼고)
const tpcommandexplanationC = "tp to warp point C";

//tp command A coordinate (x y z)
//기타 tp 명령어3 좌표 (x y z)
const tpcoordinateC = "110 10 110";

//tp command A warp message
//기타 tp 명령어3 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
const tpcommandtitleC = "§eWarp Complete!";




/////////////////////////////////////////////////////////////////////
//sethome command 
//집설정 명령어


//use sethome command (true/false)
//셋홈 명령어 사용여부
const UseSethomeCommand: boolean = true;


//sethome command (with out /) - For user
//셋홈 명령어 (/빼고) - 일반유저 명령어
const SethomeCommand = "sethome";


//home command (with out /) - For user
//홈이동 명령어 (/빼고) - 일반유저 명령어
const HomeCommand = "home";




/////////////////////////////////////////////////////////////////////
//tpa command
//티피요청 명령어


//use tpa command (true/false)
//티피요청 명령어 사용여부 (true/false)
const UseTpaCommand: boolean = true;


//tpa command (with out /) - For user
//티피요청 명령어 (/빼고) - 일반유저 명령어
const TpaCommand = "tpa";


//tpaccept command (/with out /) - For user
//티피요청 수락 명령어 (/빼고) - 일반유저 명령어
const TpacceptCommand = "tpaccept";




/////////////////////////////////////////////////////////////////////
//item command
//기본템 명령어


//use basic item command (true/false)
//기본템 명령어 사용여부 (true/false)
const UseBasicitemCommand: boolean = true;


//basic item command (with out /) - For User
//기본템 명령어 (/빼고) - 일반유저 명령어
const BasicitemCommand = "item";


//give basic item when player join the server first time (true/false)
//처음 접속시 자동으로 기본템 지급 (true/false)
const JoinGiveBasictem: boolean = true;


//아이템 1 //item A
const basicitemA = "wooden_sword 1";
//아이템 2 //item B
const basicitemB = "wooden_axe 1";
//아이템 3 //item C
const basicitemC = "wooden_pickaxe 1";
//아이템 4 //item D
const basicitemD = "wooden_hoe 1";
//아이템 5 //item E
const basicitemE = "wooden_shovel 1";
//아이템 6 //item F
const basicitemF = "leather_chestplate 1";
//아이템 7 //item G
const basicitemG = "leather_leggings 1";
//아이템 8 //item H
const basicitemH = "cooked_beef 64";

//(아이템 부분 비워놔도 버그 안남)




/////////////////////////////////////////////////////////////////////
//Prefix
//칭호


//use Prefix
//칭호 사용여부
const UsePrefix: boolean = true;



//output style
//칭호 형식 설정

//style A     <Prefix> <Name> : message
//style B     <Prefix> Name : message
//style C     [Prefix] <Name> : message
//style D     [Prefix] Name : message
//형식A     <칭호> <닉네임> : 채팅 
//형식B     <칭호> 닉네임 : 채팅
//형식C     [칭호] <닉네임> : 채팅
//형식D     [칭호] 닉네임 : 채팅
let PrefixChatOutputType = "A";




//How to use Prefix
//칭호 사용법 설정

//style A     OP(command) set user's Prefix - /Prefix (name) "(Prefix)"
//style B     Any user can set their Prefix - /Prefix "(Prefix)"
//style C     Any user can set their Prefix by UI - /Prefix
//형식A     오피유저(커멘드)가 일반유저의 칭호 설정 - /칭호 (닉네임) "(칭호)"
//형식B     모든유저가 자신의 칭호를 설정 - /칭호 "(칭호)"
//형식C     모든유저가 UI를 사용하여 자신의 칭호를 설정 - /칭호  - (그 창같은거 나와서 칭호적는 칸 나오는거)
let PrefixCommandType: string = "A";



//Prefix command (with out /)
//칭호 명령어 (/빼고)
const PrefixCommand = "prefix";


//Prefix command explanation
//칭호 명령어 설명
const PrefixCommandExplanation = "set players Prefix";


//Prefix max length  (not include 'How to use' style A)
//칭호 글자수 제한 (칭호 사용법 형식A 제외)
const PrefixLength = 10;


//basic Prefix - output this when someone don't have any Prefix
//기본 칭호 - 아무칭호도 없을때 대신 출력될 칭호
const BasicPrefix = "§7Member";




/////////////////////////////////////////////////////////////////////
//anti toolbox
//툴박스 방지


//kick toolbox user, when join (true/false)
//참가시 삼성 툴박스 유저 강퇴하기 사용여부 (true/false)
const UseAntiToolbox: boolean = true;


//toolbox - kick message - output all player
//툴박스 강퇴 안내 메시지 - 전체 유저에게 출력
const AntiToolboxMessage = "§eKicked toolbox";


//toolbox - kick message - output kicked player
//툴박스 강퇴 안내 메시지 - 툴박스 사용 플레이어의 화면에 출력
const AntiToolBoxTitle = "§l§f[ §7Kick §f]\n\n§cDon't use ToolBox";




/////////////////////////////////////////////////////////////////////
//anti fake os 
//가까 OS 방지


//use kick fake OS user 
//가짜 OS 강퇴하기 사용여부 (true/false)
const UseFakeOSdetection: boolean = true;


//fakeOS - kick message - output kicked player
//가짜 OS 강퇴 안내 메시지 - 가짜 OS 사용 플레이어의 화면에 출력
const FakeOSdetectionTitle = "§l§f[ §7Kick §f]\n\n§cDon't use FakeOS";




/////////////////////////////////////////////////////////////////////
//anti long nickname
//닉핵 방지


//use kick long name (true/false)
//참가시 긴 닉네임 강퇴하기 사용여부 (true/false) - 닉핵방지
const UseAntiLongNickname: boolean = true;


//long name kick length
//긴 닉네임 길이 (권장:30)
const AntiLongNicknameLength = 30;


//long nickname - kick message - output all player
//긴 닉네임 강퇴 안내 메시지 - 전체 유저에게 출력
const AntiLongNicknameMessage = "§eKicked long nickname";


//long nickname - kick message - output kicked player
//긴 닉네임 강퇴 안내 메시지 - 강퇴된 플레이어의 화면에 출력
const AntiLongNicknameTitle = "§l§f[ §7Kick §f]\n\n§cyou use too long nickname";




/////////////////////////////////////////////////////////////////////
//chatcut
//도배 방지


//use chatcut (true/false)
//도배방지 사용여부 (true/false)
const UseChatCut: boolean = true;


//use whisper blocker (to block /w @a @e @e @e @e @e @e @e)
//귓속말 사용 금지하기 (권장:30) (/w @a @e @e @e @e @e @e @e과 같은 방식으로 서버를 터트리는 방법이 있음)
const ChatCutWhisperMessageLength: boolean = true;


//chatcut length
//일반채팅 도배방지-장문방지 글자수 (권장:100)
const ChatCutLongMessageLength = 100;


//chatcut speedchat - ms(recommended 1000)
//일반채팅 도배방지-단타방지 시간 (권장:1000)
const ChatCutSpeedMessageTime = 1000;


//chatcut message - too long chat
//일반채팅 도배방지-장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
const ChatCutLongMessageTitle = "§cYour chat is too long!";


//chatcut message - too fast chat
//일반채팅 도배방지-단타방지 안내 메시지 - 단타를 한 플레이어의 채팅창에 출력
const ChatCutSpeedMessageTitle = "§cYour chat is too fast!";


//chatcut message - same chat
//일반채팅 도배방지-똑같은 메세지 안내 메시지 - 똑같은 채팅 또는 전 채팅이랑 2글자 이상 차이나지않는 플레이어의 채팅창에 출력
const ChatCutSameMessageTitle = "§cDo not send same chat!";


//whisper blocker message (to block /w @a @e @e @e @e @e @e @e)
//귓속말 도배방지-장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
const ChatCutWhisperMessageTitle = "§cYou can't use whisper command";




/////////////////////////////////////////////////////////////////////
//anti crasher
//강제종료 방지


//use anti crasher (true/false)
//안티크래셔 사용여부 (true/false)
const UseAntiCrasher: boolean = true;


//anti crasher kick message - output kicked player
//안티크래셔 강퇴 안내 메시지 - 강종 사용 플레이어의 화면에 출력
const AntiCrasherTitle = "§l§f[ §7Kick §f]\n\n§cDon't use crasher";




/////////////////////////////////////////////////////////////////////
//color code blocker
//색깔 코드 방지


//block § (true/false)
//§ 사용 막기 사용여부 (true/false)
const UseBlockColorWord: boolean = true;


//block § message
//§ 사용시 안내메시지 - §를 입력한 플레이어의 채팅창에 출력
const BlockColorWordTitle = "§ccolor word is not allowed";




/////////////////////////////////////////////////////////////////////
//bossbar command
//보스바 명령어


//set bossbar command (with out /)
//보스바 생성 명령어 (/빼고)
const SetBossBarCommand = "setbossbar";


//remove bossbar command (with out /)
//보스바 삭제 명령어 (/빼고)
const RemoveBossBarCommand = "removebossbar";




/////////////////////////////////////////////////////////////////////
//change time command
//시간 변경 명령어


//change time to day command (with out /)
//시간 아침 변경 명령어
const ChangeTimeCommand_Day = "day"


//change time to night command (with out /)
//시간 밤 변경 명령어
const ChangeTimeCommand_Night = "night"





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
import { serverProperties } from "bdsx/serverproperties";
import { gray, green, red, yellow } from "colors";
import * as fs from "fs";

const levelname = serverProperties["level-name"]

if (serverProperties["allow-cheats"] === "false") { throw (red("\n".white +"[".white + " sos9533scr".yellow + " ]".white + " ERROR / Allow Cheat is fasle!".red+"\n\n\n"+"Enable cheat in 'bdsx-master/bedrock_server/server.properties'".gray+"\n\n"+"월드의 치트가 꺼져있습니다. 'bdsx-master/bedrock_server/server.properties'에서 치트를 활성화 하주세요.\n\n\n".gray + " / ".white+"CODE : ACF-sos9533scr".gray+"\n"+" / ".white+"Need help? Discord : sos9533#9533 ".green+"\n\n\n")); };

const runCommand = bedrockServer.executeCommand;

//sos9533scr의 MIT 저작권에 따라 아래 코드를 삭제하지마세요.
//dont remove under code
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

command.register("sos9533scr", "§r§l§fThis server is using sos9533scr - §cCopyright (c) 2022 sos9533§r", CommandPermissionLevel.Normal).overload((param, origin, output) => {
    if (origin.isServerCommandOrigin()) {
        output.success("");
    } else {
        runCommand(
            `tellraw "${origin.getName()}" {"rawtext":[{"text":"§l${SystemMessageTitle}§l\nDownload : https://github.com/sos9533/bdsx-sos9533scr \nMade by sos9533, mdisprgm, job-gut, Blue00123, kdg7313"}]}`,
        );
        output.success("");
    };
}, {});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Loading... 0/5`.gray)

const Prefix_json = "Prefix.json";
const sethome_json = "sethome_pos.json";

const DEVICE_ID_FMT_LENGTH = 36;
const DEVICE_ID_FMT_LENGTH_ANDROID = 32;
/*
 *                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */if (!runCommand("sos9533scr").isSuccess()) { throw (red("\n".white+"[".white + " sos9533scr".yellow + " ]".white + " ERROR / Can't Find Important Code!".red+"\n\n\n"+"sos9533scr can't Find Important Code".gray+"\n\n"+"sos9533scr가 중요 코드를 찾지 못했습니다.".gray+"\n\n\n"+" /".white+" CODE : CFIC-sos9533scr".gray+"\n"+" / ".white+"Need help? Discord : sos9533#9533".green)); }; /*
 */
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

    const OS = connreq.getDeviceOS();

    if (deviceModel !== "No Model" && OS === BuildPlatform.WINDOWS_10) {
        if (UseFakeOSdetection) {
            kick(networkIdentifier, FakeOSdetectionTitle);
            console.log(red(`[ sos9533scr ] ${username} | Fake OS Detection`));
        }
    }

    if (deviceModel === "No Model" && OS !== BuildPlatform.WINDOWS_10) {
        if (UseFakeOSdetection) {
            kick(networkIdentifier, FakeOSdetectionTitle);
            console.log(red(`[ sos9533scr ] ${username} | Fake OS Detection`));
        }
    }

    console.log(green(`${username}> IP:${ip}, XUID:${xuid}, OS:${BuildPlatform[connreq.getDeviceOS()] || "UNKNOWN"}, Model:${deviceModel}, DeviceID:${deviceid}`));
});

events.networkDisconnected.on((networkIdentifier) => {
    const username = playerList.get(networkIdentifier);
    playerList.delete(networkIdentifier);
    console.log(red(`${username}> Exit server`));
});

events.playerJoin.on((ev) => {
    const username = ev.player.getName();

    if (UseWelcomeMessage) {
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${WelcomeMessage}"}]}`);
    }

    if (UseBasicitemCommand) {
        if (JoinGiveBasictem) {
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
    }
});

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Loading... 1/5`.gray)

events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const message = ptr.message.replace(/"/g, "''");
    const username = ni.getActor()!.getName();


    if (ni.getActor()?.getTags().includes("mute")) {
        console.log(gray(`[${month}/${day}/${hours}/${minutes}/${seconds}] <${username}> : ${message}`));
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} ${MuteMessage}"}]}`);
        return CANCEL;
    }
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

if (UseChatCut) {
    const lastChatTimes: Record<string, number> = {};
    const LastChat: Record<string, string> = {};
    events.packetBefore(MinecraftPacketIds.Text).on((pkt, ni, id) => {
        const actor = ni.getActor()!;
        const username = actor.getName();
        const msg = pkt.message.replace(" ", "");

        if (msg.length > ChatCutLongMessageLength) {
            runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} ${ChatCutLongMessageTitle}"}]}`);
            return CANCEL;
        }

        if (lastChatTimes[username] === undefined) {
            lastChatTimes[username] = Date.now();
        } else if (Date.now() - lastChatTimes[username] < ChatCutSpeedMessageTime) {
            runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} ${ChatCutSpeedMessageTitle}"}]}`);
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
                actor.sendMessage(ChatCutSameMessageTitle);
                return CANCEL;
            }
            if (Math.abs(oldMsg.length - msg.length) < 3) {
                if (oldMsg.includes(msg) || msg.includes(oldMsg)) {
                    LastChat[username] = msg;
                    actor.sendMessage(ChatCutSameMessageTitle);
                    return CANCEL;
                }
            }
        }
        LastChat[username] = msg;
    });
}

events.command.on((command, origin) => {
    const cmdhead = command.split(" ")[0];
    if (UseChatCut) {
        if (cmdhead === "/w") {
            if (ChatCutWhisperMessageLength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"${SystemMessageTitle} ${ChatCutWhisperMessageTitle}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/tell") {
            if (ChatCutWhisperMessageLength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"${SystemMessageTitle} ${ChatCutWhisperMessageTitle}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/msg") {
            if (ChatCutWhisperMessageLength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"${SystemMessageTitle} ${ChatCutWhisperMessageTitle}"}]}`);
                return 0;
            }
        }

        if (cmdhead === "/me") {
            if (ChatCutWhisperMessageLength) {
                runCommand(`tellraw "${origin}" {"rawtext":[{"text":"${SystemMessageTitle} ${ChatCutWhisperMessageTitle}"}]}`);
                return 0;
            }
        }
    }
});

command.register(KickCommand, "kick player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();
            const ni = target.getNetworkIdentifier();
            kick(ni, KickTitle);
            if (language === "english") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §c${username}§f is kicked by ${origin.getName()}"}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §c${username}§f님이 ${origin.getName()}님에 의해 강제퇴장 조치 되었습니다."}]}`);
            }

            console.log("\x1b[41m", `${username} kicked > [ Kicked by ${origin.getName()} ]`, "\x1b[0m");
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

command.register(MuteCommand, "mute player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();

            runCommand(`tag @a[name="${username}"] add mute`);
            if (language === "english") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f is §cmuted§f by ${origin.getName()}"}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f님이 ${origin.getName()}님에 의해 §c채팅금지§f 조치 되었습니다."}]}`);
            }

            console.log("\x1b[41m", `${username} Mute > [ Muted by ${origin.getName()} ]`, "\x1b[0m");
        }
    },
    {
        target: PlayerCommandSelector,
    },
);

command.register(UnmuteCommand, "unmute player", CommandPermissionLevel.Operator).overload(
    (param, origin, output) => {
        for (const target of param.target.newResults(origin, ServerPlayer)) {
            const username = target.getName();

            if (language === "english") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f is §aunmuted§f by ${origin.getName()}"}]}`);
            }
            if (language === "korean") {
                runCommand(`tellraw @a {"rawtext":[{"text":"${SystemMessageTitle} §7${username}§f님이 ${origin.getName()}님에 의해 §a채팅금지 해제§f 조치 되었습니다."}]}`);
            }
            runCommand(`tag @a[name="${username}"] remove mute`);
            console.log("\x1b[41m", `${username} UnMute > [ UnMuted by ${origin.getName()} ]`, "\x1b[0m");

        }
    },
    {
        target: PlayerCommandSelector,
    },
);

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

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Loading... 2/5`.gray)

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
                const username = player.getName();
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

if (UseSpawnCommand) {
    command.register(SpawnCommand, Spawncommandexplanation).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${SpawnCoordinate}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${SpawnCommandTitle}"}]}`);
    }, {});
}

if (usestpcommandA) {
    command.register(tpcommandA, tpcommandexplanationA).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateA}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${tpcommandtitleA}"}]}`);
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
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${tpcommandtitleB}"}]}`);
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
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${tpcommandtitleC}"}]}`);
    }, {});
}

if (UseBasicitemCommand) {
    command.register(BasicitemCommand, "기본템을 지급합니다.").overload((param, origin, output) => {
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

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Loading... 3/5`.gray)



const LAST = new Map<NetworkIdentifier, number>();
const COUNT = new Map<NetworkIdentifier, number>();
const DELAY_LIMIT = 3;

function kick(target: NetworkIdentifier, message = KickTitle) {
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

if (UseAntiCrasher) {
    const Ignored = new Set<number>([12, 26, 35, 42, 43]);
    events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((pkt, ni) => {
        if (Ignored.has(pkt.sound)) return;

        if (Date.now() - LAST.get(ni)! < DELAY_LIMIT) {
            const next = COUNT.get(ni)!;
            COUNT.set(ni, next + 1);
            if (next > 3) {
                kick(ni, AntiCrasherTitle);
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
                kick(ni, AntiCrasherTitle);
            }

            return CANCEL;
        }
        FOOD_COUNT.set(ni, 0);
        FOOD_LAST.set(ni, Date.now());
    });

    const opt_movement = serverProperties["server-authoritative-movement"];
    if (opt_movement === "client-auth") {
        events.packetBefore(MinecraftPacketIds.MovePlayer).on((pkt, ni) => {
            const X = pkt.pos.x;
            const Y = pkt.pos.y;
            const Z = pkt.pos.z;

            switch (true) {
                case X > 1073741823:
                case Y > 1073741823:
                case Z > 1073741823:
                    kick(ni, AntiCrasherTitle);
                    return CANCEL;
                default:
            }
        });
    } else {
        events.packetBefore(MinecraftPacketIds.PlayerAuthInput).on((pkt, ni) => {
            switch (true) {
                case pkt.moveX > 1073741823:
                case pkt.moveZ > 1073741823:
                case pkt.pos.x > 1073741823:
                case pkt.pos.y > 1073741823:
                case pkt.pos.z > 1073741823:
                    kick(ni, AntiCrasherTitle);
                    return CANCEL;
                default:
            }
        });
    }
}

makeFile(Prefix_json);

const PrefixData = JSON.parse(fs.readFileSync(Prefix_json, "utf8"));
function savePrefix() {
    fs.writeFileSync(Prefix_json, JSON.stringify(PrefixData), "utf8");
}

if (UseBlockColorWord === true) {
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
        const actor = ni.getActor()!;
        const username = actor.getName();

        if (UseBlockColorWord === true) {
            if (ptr.message?.includes("§")) {
                runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} ${BlockColorWordTitle}"}]}`);
                return CANCEL;
            }
        }
    });
}

if (UsePrefix === true) {
    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
        const actor = ni.getActor()!;
        const username = actor.getName();
        const message = ptr.message.replace(/"/gi, `''`);

        if (PrefixChatOutputType === "A") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§f<${PrefixData[username] || BasicPrefix}§f> §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        } else if (PrefixChatOutputType === "B") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§f<${PrefixData[username] || BasicPrefix}§f> §r${ptr.name}§r : ${message}"}]}`);
        } else if (PrefixChatOutputType === "C") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§f[${PrefixData[username] || BasicPrefix}§f] §r<§r${ptr.name}§r>§r : ${message}"}]}`);
        } else if (PrefixChatOutputType === "D") {
            runCommand(`tellraw @a {"rawtext":[{"text":"§f[${PrefixData[username] || BasicPrefix}§f] §r${ptr.name}§r : ${message}"}]}`);
        }
        return CANCEL;
    });

    if (PrefixCommandType === "A") {
        command.register(PrefixCommand, PrefixCommandExplanation, CommandPermissionLevel.Operator).overload(
            (params, origin, output) => {
                if (params.Prefix !== undefined && params.target !== undefined) {
                    for (const player of params.target.newResults(origin, ServerPlayer)) {
                        const username = player.getName();
                        const target = params.target.newResults(origin)!;
                        const Prefix = params.Prefix;
                        const legnth = target.length;

                        for (let i = 0; i < legnth; i++) {
                            PrefixData[username] = Prefix;
                            savePrefix();
                            if (language === "english") {
                                runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"${SystemMessageTitle} §aprocessed successfully!"}]}`);
                            }
                            if (language === "korean") {
                                runCommand(`tellraw "${origin.getName()}" {"rawtext":[{"text":"${SystemMessageTitle} §a해당유저에게 칭호가 적용됬습니다!"}]}`);
                            }
                            runCommand(`playsound random.levelup @a[name="${origin.getName()}"]`);
                        }
                    }
                }
            },
            {
                target: ActorWildcardCommandSelector,
                Prefix: CxxString,
            },
        );
    }

    if (PrefixCommandType === "B") {
        command.register(PrefixCommand, PrefixCommandExplanation, CommandPermissionLevel.Normal).overload(
            (params, origin, output) => {
                const originName = origin.getName();
                if (params.Prefix !== undefined && origin.getEntity() !== undefined) {
                    const Prefix = params.Prefix;
                    if (Prefix.length < PrefixLength) {
                        PrefixData[originName] = Prefix;
                        savePrefix();
                        runCommand(`playsound random.levelup @a[name="${originName}"]`);
                        if (language === "english") {
                            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §aprocessed successfully!"}]}`);
                        }
                        if (language === "korean") {
                            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §a칭호가 적용됬습니다!"}]}`);
                        }
                    } else {
                        if (language === "english") {
                            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §cthe Prefix is too long!"}]}`);
                        }
                        if (language === "korean") {
                            runCommand(`tellraw "${originName}" {"rawtext":[{"text":"${SystemMessageTitle} §c칭호가 너무 깁니다!"}]}`);  
                        }
                        runCommand(`playsound random.orb @a[name="${originName}"]`);
                    }
                }
            },
            {
                Prefix: CxxString,
            },
        );
    }

    if (PrefixCommandType === "C") {
        command.register(PrefixCommand, PrefixCommandExplanation).overload(async (params, origin, output) => {
            const actor = origin.getEntity();
            if (!actor?.isPlayer()) {
                console.log(red("You are the server console"));
                return;
            }
            const ni = actor.getNetworkIdentifier();
            const username = actor.getName();
            if (language === "english") {
                const res = await Form.sendTo(ni, {
                    type: "custom_form",
                    title: "§l§0Prefix",
                    content: [
                        {
                            type: "input",
                            text: "§l§7what is your Prefix! §l§0[ §gsos9533scr §0]§r ",
                            default: "§7Member",
                        },
                    ],
                });
    
                if (res === null) return;
    
                if (res[0]?.length < PrefixLength && username) {
                    const Prefix = res[0];
                    PrefixData[username] = Prefix;
                    savePrefix();
    
                    runCommand(`playsound random.levelup @a[name="${username}"]`);
                    runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §aprocessed successfully"}]}`);
                } else {
                    runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §cthe Prefix is too long!"}]}`);
                    runCommand(`playsound random.orb @a[name="${username}"]`);
                }
            }
            if (language === "korean") {
                const res = await Form.sendTo(ni, {
                    type: "custom_form",
                    title: "§0칭호",
                    content: [
                        {
                            type: "input",
                            text: "§7사용할 칭호를 입력하세요! §0[ §gsos9533scr §0]§r ",
                            default: "§7일반인",
                        },
                    ],
                });

                if (res === null) return;

                if (res[0]?.length < PrefixLength && username) {
                    const Prefix = res[0];
                    PrefixData[username] = Prefix;
                    savePrefix();
    
                    runCommand(`playsound random.levelup @a[name="${username}"]`);
                    runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §a칭호가 적용됬습니다!"}]}`);
                } else {
                    runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §c칭호가 너무 깁니다!"}]}`);
                    runCommand(`playsound random.orb @a[name="${username}"]`);
                }
            }
        }, {});
    }
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Loading... 4/5`.gray)

command.register(RemoveBossBarCommand, "remove bossbar", CommandPermissionLevel.Operator).overload(
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

command.register(SetBossBarCommand, "set bossbar", CommandPermissionLevel.Operator).overload(
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

if (UseSethomeCommand) {
    makeFile(sethome_json);
    command.register(SethomeCommand, "set my home to here").overload((param, origin, output) => {
        const player = origin.getEntity();

        if (!player?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        const username = origin.getName();
        const pos = player.getPosition();
        const deviceId = player.deviceId;

        const jsonObj = JSON.parse(fs.readFileSync(sethome_json, "utf8"));
        const homePos = `${pos?.x ?? "??"} ${pos?.y ?? "??"} ${pos?.z ?? "??"}`;
        jsonObj[deviceId] = homePos;
        fs.writeFileSync(sethome_json, JSON.stringify(jsonObj), "utf8");
        if (language === "english") {
            runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §eSetted Home"}]}`);
        }
        if (language === "korean") {
            runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §a현재 위치가 집으로 설정되었습니다."}]}`);
        }
    }, {});

    command.register(HomeCommand, "go to home").overload((param, origin, output) => {
        const player = origin.getEntity();
        if (!player?.isPlayer()) {
            console.log(red("You are the server console"));
            return;
        }

        const username = origin.getName();
        const deviceId = player.deviceId;
        const jsonObj = JSON.parse(fs.readFileSync(sethome_json, "utf8"));

        runCommand(`tp @a[name="${username}"] ${jsonObj[deviceId]}`);
        if (language === "english") {
            runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §l§eWarp Complete!"}]}`);   
        }
        if (language === "korean") {
            runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} §a집으로 이동되었습니다!"}]}`);
        }
    }, {});
}

if (UseTpaCommand) {
    const reqs = new Map<string, Set<string>>();

    command.register(TpaCommand, "request tp to another user").overload(
        (param, origin) => {
            const players = param.player.newResults(origin);

            if (players.length > 1 || players.length < 1) {
                const oPlayer = origin.getEntity();

                if (oPlayer?.isPlayer()) {
                    if (language === "english") {
                        oPlayer.sendMessage(`${SystemMessageTitle} §cselect one user correctly`);
                    }
                    if (language === "korean") {
                        oPlayer.sendMessage(`${SystemMessageTitle} §c유저 한명을 정확하게 선택해주세요.`);
                    }

                }
                return;
            }

            const originName = origin.getName();
            const player = players[0];
            const username = player.getName();

            if (language === "english") {
                runCommand(`tellraw "${username}" {"rawtext": [{"text": "${SystemMessageTitle}\n§f------ ${originName} want tp to you ------\n§f------§c use '/${TpacceptCommand} ${originName}'§f ------"}]}`,);
            }
            if (language === "korean") {
                runCommand(`tellraw "${username}" {"rawtext": [{"text": "${SystemMessageTitle}\n§f------ ${originName}님이 §a티피요청§f을 원합니다 ------\n§f------§c '/${TpacceptCommand} ${originName}'§f 명령어로 수락하세요. ------"}]}`,);
            }
            

            const set = reqs.get(originName) ?? new Set();
            if (!reqs.has(originName)) reqs.set(originName, set);
            set.add(username);

            setTimeout(() => {
                if (set.delete(username))
                if (language === "english") {
                    runCommand(`tellraw "${originName}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ §6Your tpa request §6has expired ------"}]}`); 
                }
                if (language === "korean") {
                    runCommand(`tellraw "${originName}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ §a${username}§f님에게 보낸 티피요청이 만료되었습니다 ------"}]}`);
                }
            }, 60 * 1000);
        },
        { player: PlayerCommandSelector },
    );

    command.register(TpacceptCommand, "accept tpa request").overload(
        (param, origin) => {
            const players = param.target.newResults(origin);
            if (players.length !== 1) {
                const oPlayer = origin.getEntity();
                if (oPlayer?.isPlayer()) {
                    if (language === "english") {
                        oPlayer.sendMessage(`${SystemMessageTitle} §cselect one user correctly`);
                    }
                    if (language === "korean") {
                        oPlayer.sendMessage(`${SystemMessageTitle} §c유저 한명을 정확하게 선택해주세요.`); 
                    }
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
                    if (language === "english") {
                        runCommand(`tp "${username}" "${originName}"`);
                        runCommand(`tellraw "${username}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ §a${origin.getName()}§f accept your tpa request ------"}]}`);
                    }
                    if (language === "korean") {
                        runCommand(`tellraw "${username}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ 상대가 수락을 하여 §a${originName}§f 님에게 이동됩니다 ------"}]}`);
                        runCommand(`tp "${username}" "${originName}"`);
                    }
                }
            }
        },
        { target: PlayerCommandSelector },
    );
}

command.register(ChangeTimeCommand_Day, "Change world's time to day", CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set day");
    const player = corg.getEntity();
    if (language === "english") {
        if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} §6Changed server time to day`);
    }
    if (language === "korean") {
        if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} §6서버의 시간 낮으로 변경되었습니다.`);
    }
}, {});

command.register(ChangeTimeCommand_Night, "Change world's time to night", CommandPermissionLevel.Operator).overload((input, corg) => {
    runCommand("time set night");
    const player = corg.getEntity();
    if (language === "english") {
        if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} §6Changed server time to night`);
    }
    if (language === "korean") {
        if (player?.isPlayer()) player.sendMessage(`${SystemMessageTitle} §6서버의 시간이 밤으로 변경되었습니다.`);
    }
    
}, {});

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Loading... 5/5`.gray)
console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Loading Completed Successfully`.gray)
