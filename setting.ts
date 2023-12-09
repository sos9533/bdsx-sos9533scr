//     .d88888b     .88888.    .d88888b    .d888b.   888888P   d8888b.   d8888b.
//     88.    "'   d8'   `8b   88.    "'   Y8' `88   88'           `88       `88
//     `Y88888b.   88     88   `Y88888b.   `8bad88   88baaa.    aaad8'    aaad8'   .d8888b.   .d8888b.   88d888b.
//           `8b   88     88         `8b       `88       `88       `88       `88   Y8ooooo.   88'  `""   88'  `88
//     d8'   .8P   Y8.   .8P   d8'   .8P   d.  .88        88       .88       .88         88   88.  ...   88
//      Y88888P     `8888P'     Y88888P    `8888P    d88888P   d88888P   d88888P   `88888P'   `88888P'   dP
//

//vr. 2.3.0

//  Made by sos9533, mdisprgm, job-gut, Blue00123, kdg7313, namacksin
//  Recommend using 'visual studio code'(https://code.visualstudio.com/)


/*
    How to use (README.md)
    사용법, 적용법, 기능, 안내 (README.md)
     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/README.md


    About sos9533scr (LICENSE.md)
    sos9533scr에 대해 (LICENSE.md)
     ㄴ  https://github.com/sos9533/bdsx-sos9533scr/blob/main/README.md#Note
*/


/////////////////////////////////////////////////////////////////////


// Change the content and save it by pressing ctrl + s.
//내용 변경하고 ctrl + s를 꼭 해서 저장하셔야지 적용이 됩니다.


/////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//plugin setting
//플러그인 세팅


//language setting ("english" / "korean")
//언어 설정 ("english" / "korean")
export let language = "english";


//system message
//시스템 메시지
export const SystemMessageTitle = "§l§f[ §dSERVER §f]§r";


//use logging (true/false)
//로그 수집 사용여부 (true/false)
export const UseLog: boolean = true;


/////////////////////////////////////////////////////////////////////
//welcome message
//참가 환영


//use welcome message (true/false)
//참여 환영 메시지 사용여부 (true/false)
export const UseWelcomeMessage: boolean = true;


//welcome message
//참여 환영 메시지 - 참가한 플레이어의 채팅창에 출력
export const WelcomeMessage = "§7welcome! \nEdit plugin's custom settings in 'plugins/bdsx-sos9533scr-main/setting'.\n\n'plugins/bdsx-sos9533scr-main/setting'에서 플러그인을 세팅해주세요.\n§cneed help? Discord : sos9533#3423\n도움이 필요하신가요? 디스코드 : sos9533#3423";




/////////////////////////////////////////////////////////////////////
//kick command
//내보내기 명령어


//kick command (with out /) - For OP
//강퇴 명령어 (/빼고) - 관리자 전용 명령어
export const KickCommand = "out";


//kick message
//강퇴 안내 메시지
export const KickTitle = "§l§f[ §7Kick §f]\n\n§cYou are kicked from server\n§7You can join the server again";




/////////////////////////////////////////////////////////////////////
//mute command
//채팅금지 명령어


//mute command (with out /) - For OP
//뮤트 명령어 (/빼고) - 관리자 전용 명령어
export const MuteCommand = "mute";


//unmute command (with out /) - For OP
//뮤트해제 명령어 (/빼고) - 관리자 전용 명령어
export const UnmuteCommand = "unmute";


//mute message
//뮤트 안내 메시지
export const MuteMessage = "you are muted!";




/////////////////////////////////////////////////////////////////////
//ban command
//밴 명령어


//Device ban command (with out /) - For OP
//플레이어 디바이스 차단 명령어 (/빼고) - 관리자 전용 명령어
export const DeviceBanCommand = "device-ban";


//Device unban command (with out /) - For OP
//플레이어 디바이스 차단 해제 명령어 (/빼고) - 관리자 전용 명령어
export const DeviceUnbanCommand = "device-unban";




//Name ban command (with out /) - For OP
//플레이어 닉네임 차단 명령어 (/빼고) - 관리자 전용 명령어
export const NameBanCommand = "name-ban";


//Name unban command (with out /) - For OP
//플레이어 닉네임 차단 해제 명령어 (/빼고) - 관리자 전용 명령어
export const NameUnBanCommand = "name-unban";




//ban list command (with out /) - For OP
//영구밴 플레이어 확인 (/빼고) - 관리자 전용 명령어
export const ShowBanListCommand = "banlist";


//Offline Player Device Ban command [Only DeviceID] (with out /) - For OP
//플레이어가 접속하지 않았을때 device id 를 이용해 차단 (/빼고) - 관리자 전용 명령어
export const OfflinePlayerDeviceBanCommand = "offline-ban-device";




//ban message
//밴 안내 메시지 - 영구밴된 플레이어의 화면에 출력
export const BanTitle = "§l§f[ §cBAN §f]\n\n§cYou are banned from this server\n§7You can't join the server again";




/////////////////////////////////////////////////////////////////////
//getinfo command
//정보확인 명령어


//use get info command (true/false) (All OP can get user info(IP,Device ID,OS,Ping))
//정보확인 명령어 사용여부 (true/false) (모든 op가 모든 어떤 유저든 정보 확인가능)
export const UseGetInfoCommand: boolean = true;


//get info command (with out /) - For OP
//정보확인 명령어 (/빼고) - 관리자 전용 명령어 (원하는 유저의 정보 확인가능)
export const GetInfoCommand = "getinfo";




//use my info command (true/false) (All user can get their info(IP,Device ID,OS,Ping))
//내정보 명령어 사용여부 (true/false) (자신의 정보만 확인가능)
export const UseMyInfoCommand: boolean = true;


//my info command (with out /) - For User
//내정보 명령어 (/빼고) - 일반유저 명령어
export const MyInfoCommand = "myinfo";




/////////////////////////////////////////////////////////////////////
//warp command
//티피 명령어


//use spawn command (true/false)
//스폰 명령어 사용여부 (true/false)
export const UseSpawnCommand: boolean = true;


//spawn command (with out /) - For User
//스폰 명령어 (/빼고) - 일반유저 명령어
export const SpawnCommand = "spawn";


//spawn command explanation
//기타 tp 명령어1 설명
export const Spawncommandexplanation = "tp to spawn";


//spawn coordinate (x y z)
//스폰 좌표 (x y z)
export const SpawnCoordinate = "0 10 0";


//spawn warp message
//스폰 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
export const SpawnCommandTitle = "§eWarp Complete!";


//use back command (true/false)
//백 명령어 사용여부 (true/false)
export const UseBackCommand: boolean = true;


//back command (with out /) - For User
//백 명령어 (/빼고) - 일반유저 명령어
export const BackCommand = "back";


//back command description (with out /) - For User
//백 명령어 설명 - 일반유저 명령어
export const BackCommandDescription = "back command";


//use tp command A (true/false)
//기타 tp 명령어1 사용여부 (true/false)
export const usestpcommandA: boolean = false;

//tp command A (with out /) - For user
//기타 tp 명령어1 (/빼고) - 일반유저 명령어
export const tpcommandA = "warpA";

//tp command A explanation
//기타 tp 명령어1 설명
export const tpcommandexplanationA = "tp to warp point A";

//tp command A coordinate (x y z)
//기타 tp 명령어1 좌표 (x y z)
export const tpcoordinateA = "100 10 100";

//tp command A warp message
//기타 tp 명령어1 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
export const tpcommandtitleA = "§eWarp Complete!";




//use tp command B (true/false)
//기타 tp 명령어2 사용여부 (true/false)
export const usestpcommandB: boolean = false;

//tp command B (with out /) - For user
//기타 tp 명령어2 (/빼고) - 일반유저 명령어
export const tpcommandB = "warpB";

//tp command B explanation
//기타 tp 명령어2 설명 (/빼고)
export const tpcommandexplanationB = "tp to warp point B";

//tp command B coordinate (x y z)
//기타 tp 명령어2 좌표 (x y z)
export const tpcoordinateB = "105 10 105";

//tp command B warp message
//기타 tp 명령어2 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
export const tpcommandtitleB = "§eWarp Complete!";




//기타 tp 명령어3 사용여부 (true/false)
//use tp command C (true/false)
export const usestpcommandC: boolean = false;

//tp command C (with out /) - For user
//기타 tp 명령어3 (/빼고) - 일반유저 명령어
export const tpcommandC = "warpC";

//tp command C explanation
//기타 tp 명령어3 설명 (/빼고)
export const tpcommandexplanationC = "tp to warp point C";

//tp command A coordinate (x y z)
//기타 tp 명령어3 좌표 (x y z)
export const tpcoordinateC = "110 10 110";

//tp command A warp message
//기타 tp 명령어3 이동 안내메시지 - 이동된 플레이어의 채팅창에 출력
export const tpcommandtitleC = "§eWarp Complete!";




/////////////////////////////////////////////////////////////////////
//sethome command
//집설정 명령어


//use sethome command (true/false)
//셋홈 명령어 사용여부
export const UseSethomeCommand: boolean = true;


//sethome command (with out /) - For user
//셋홈 명령어 (/빼고) - 일반유저 명령어
export const SethomeCommand = "sethome";


//home command (with out /) - For user
//홈이동 명령어 (/빼고) - 일반유저 명령어
export const HomeCommand = "home";




/////////////////////////////////////////////////////////////////////
//tpa command
//티피요청 명령어


//use tpa command (true/false)
//티피요청 명령어 사용여부 (true/false)
export const UseTpaCommand: boolean = true;


//tpa command (with out /) - For user
//티피요청 명령어 (/빼고) - 일반유저 명령어
export const TpaCommand = "tpa";


//tpaccept command (/with out /) - For user
//티피요청 수락 명령어 (/빼고) - 일반유저 명령어
export const TpacceptCommand = "tpaccept";




/////////////////////////////////////////////////////////////////////
//item command
//기본템 명령어


//use basic item command (true/false)
//기본템 명령어 사용여부 (true/false)
export const UseBasicitemCommand: boolean = true;


//basic item command (with out /) - For User
//기본템 명령어 (/빼고) - 일반유저 명령어
export const BasicitemCommand = "item";


//give basic item when player join the server first time (true/false)
//처음 접속시 자동으로 기본템 지급 (true/false)
export const JoinGiveBasictem: boolean = true;


//아이템 1 //item A
export const basicitemA = "wooden_sword 1";
//아이템 2 //item B
export const basicitemB = "wooden_axe 1";
//아이템 3 //item C
export const basicitemC = "wooden_pickaxe 1";
//아이템 4 //item D
export const basicitemD = "wooden_hoe 1";
//아이템 5 //item E
export const basicitemE = "wooden_shovel 1";
//아이템 6 //item F
export const basicitemF = "leather_chestplate 1";
//아이템 7 //item G
export const basicitemG = "leather_leggings 1";
//아이템 8 //item H
export const basicitemH = "cooked_beef 64";

//(아이템 부분 비워놔도 버그 안남)




/////////////////////////////////////////////////////////////////////
//Prefix
//칭호


//use Prefix
//칭호 사용여부
export const UsePrefix: boolean = true;



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
export let PrefixChatOutputType = "A";




//How to use Prefix
//칭호 사용법 설정

//style A     OP(command) set user's Prefix - /Prefix (name) "(Prefix)"
//style B     Any user can set their Prefix - /Prefix "(Prefix)"
//style C     Any user can set their Prefix by UI - /Prefix
//형식A     오피유저(커멘드)가 일반유저의 칭호 설정 - /칭호 (닉네임) "(칭호)"
//형식B     모든유저가 자신의 칭호를 설정 - /칭호 "(칭호)"
//형식C     모든유저가 UI를 사용하여 자신의 칭호를 설정 - /칭호  - (그 창같은거 나와서 칭호적는 칸 나오는거)
export let PrefixCommandType: string = "A";



//Prefix command (with out /)
//칭호 명령어 (/빼고)
export const PrefixCommand = "prefix";


//Prefix command explanation
//칭호 명령어 설명
export const PrefixCommandExplanation = "set players Prefix";


//Prefix max length  (not include 'How to use' style A)
//칭호 글자수 제한 (칭호 사용법 형식A 제외)
export const PrefixLength = 10;


//basic Prefix - output this when someone don't have any Prefix
//기본 칭호 - 아무칭호도 없을때 대신 출력될 칭호
export const BasicPrefix = "§7Member";




/////////////////////////////////////////////////////////////////////
//anti toolbox
//툴박스 방지


//kick toolbox user, when join (true/false)
//참가시 삼성 툴박스 유저 강퇴하기 사용여부 (true/false)
export const UseAntiToolbox: boolean = true;


//toolbox - kick message - output all player
//툴박스 강퇴 안내 메시지 - 전체 유저에게 출력
export const AntiToolboxMessage = "§eKicked toolbox";


//toolbox - kick message - output kicked player
//툴박스 강퇴 안내 메시지 - 툴박스 사용 플레이어의 화면에 출력
export const AntiToolBoxTitle = "§l§f[ §7Kick §f]\n\n§cDon't use ToolBox";




/////////////////////////////////////////////////////////////////////
//anti long nickname
//닉핵 방지


//use kick long name (true/false)
//참가시 긴 닉네임 강퇴하기 사용여부 (true/false) - 닉핵방지
export const UseAntiLongNickname: boolean = true;


//long name kick length
//긴 닉네임 길이 (권장:30)
export const AntiLongNicknameLength = 30;


//long nickname - kick message - output all player
//긴 닉네임 강퇴 안내 메시지 - 전체 유저에게 출력
export const AntiLongNicknameMessage = "§eKicked long nickname";


//long nickname - kick message - output kicked player
//긴 닉네임 강퇴 안내 메시지 - 강퇴된 플레이어의 화면에 출력
export const AntiLongNicknameTitle = "§l§f[ §7Kick §f]\n\n§cyou use too long nickname";




/////////////////////////////////////////////////////////////////////
//chatcut
//도배 방지


//use chatcut (true/false)
//도배방지 사용여부 (true/false)
export const UseChatCut: boolean = true;


//use whisper blocker (to block /w @a @e @e @e @e @e @e @e)
//귓속말 사용 금지하기 (권장:30) (/w @a @e @e @e @e @e @e @e과 같은 방식으로 서버를 터트리는 방법이 있음)
export const ChatCutWhisperMessageLength: boolean = true;


//chatcut length
//일반채팅 도배방지-장문방지 글자수 (권장:100)
export const ChatCutLongMessageLength = 100;


//chatcut speedchat - ms(recommended 1000)
//일반채팅 도배방지-단타방지 시간 (권장:1000)
export const ChatCutSpeedMessageTime = 1000;


//chatcut message - too long chat
//일반채팅 도배방지-장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
export const ChatCutLongMessageTitle = "§cYour chat is too long!";


//chatcut message - too fast chat
//일반채팅 도배방지-단타방지 안내 메시지 - 단타를 한 플레이어의 채팅창에 출력
export const ChatCutSpeedMessageTitle = "§cYour chat is too fast!";


//chatcut message - same chat
//일반채팅 도배방지-똑같은 메세지 안내 메시지 - 똑같은 채팅 또는 전 채팅이랑 2글자 이상 차이나지않는 플레이어의 채팅창에 출력
export const ChatCutSameMessageTitle = "§cDo not send same chat!";


//whisper blocker message (to block /w @a @e @e @e @e @e @e @e)
//귓속말 도배방지-장문방지 안내 메시지 - 장문을 한 플레이어의 채팅창에 출력
export const ChatCutWhisperMessageTitle = "§cYou can't use whisper command";




/////////////////////////////////////////////////////////////////////
//anti crasher
//강제종료 방지


//use anti crasher (true/false)
//안티크래셔 사용여부 (true/false)
export const UseAntiCrasher: boolean = true;


//anti crasher kick message - output kicked player
//안티크래셔 강퇴 안내 메시지 - 강종 사용 플레이어의 화면에 출력
export const AntiCrasherTitle = "§l§f[ §7Kick §f]\n\n§cDon't use crasher";




/////////////////////////////////////////////////////////////////////
//color code blocker
//색깔 코드 방지


//block § (true/false)
//§ 사용 막기 사용여부 (true/false)
export const UseBlockColorWord: boolean = true;


//block § message
//§ 사용시 안내메시지 - §를 입력한 플레이어의 채팅창에 출력
export const BlockColorWordTitle = "§ccolor word is not allowed";




/////////////////////////////////////////////////////////////////////
//bossbar command
//보스바 명령어


//set bossbar command (with out /)
//보스바 생성 명령어 (/빼고)
export const SetBossBarCommand = "setbossbar";


//remove bossbar command (with out /)
//보스바 삭제 명령어 (/빼고)
export const RemoveBossBarCommand = "removebossbar";




/////////////////////////////////////////////////////////////////////
//change time command
//시간 변경 명령어


//change time to day command (with out /)
//시간 아침 변경 명령어
export const ChangeTimeCommand_Day = "day"


//change time to night command (with out /)
//시간 밤 변경 명령어
export const ChangeTimeCommand_Night = "night"




/////////////////////////////////////////////////////////////////////
//tag
//태그 기능


//OS tag (When player join, Add his OS as tag.)
//OS 태그 (플레이어가 접속시 플레이어의 OS를 태그로 추가합니다.)
export const UseOStag: boolean = true;


//sneaking tag (when player is sneaking, Add the "event_sneaking" tag.)
//웅크리기 태그 (플레이어가 웅크리기를 할때 "event_sneaking" 태그를 추가합니다.)
export const UseSneaktag: boolean = true;


//jumping tag (when player jump, Add the "event_umping" tag.)
//점프 태그 (플레이어가 점프를 할때 "event_jumping" 태그를 추가합니다.)
export const UseJumptag: boolean = true;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// don't touch this part
import { bedrockServer } from "bdsx/launcher";
export const runCommand = bedrockServer.executeCommand;
export const DEVICE_ID_FMT_LENGTH = 36;
export const DEVICE_ID_FMT_LENGTH_ANDROID = 32;
export const Prefix_json = "Prefix.json";
export const sethome_json = "sethome_pos.json";
export const log_json = "server.log";
export const back_json = "back.json";
