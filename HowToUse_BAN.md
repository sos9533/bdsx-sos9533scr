## 설정법 

1. sos9533scr에서 관리자 명령어 부분에 있는 영구밴 기능으로 갑니다.
```ts
//영구밴 명령어 (/빼고) - 관리자 전용 명령어
const bancommand = "밴"

//밴 json 이름 (.json 포함)
const banjsonname = "ban.json"

//밴 안내 메시지 - 영구밴된 플레이어의 화면에 출력
const bantitle = "§l§f[ §cBAN §f]\n\n§c당신은 서버에서 영구밴 되셨습니다.\n§7재접속이 불가능합니다."

//밴 업대이트 명령어
const updatebancommand = "밴업대이트"

//밴 사용법 안내 (HowToUse_BAN.md)
//     ㄴ  https://github.com/sos9533/sos9533scr/blob/main/HowToUse_BAN.md
```
2. 원하는대로 설정을 합니다.
3. bdsx.bat을 실행하기 전에 `bdsx-master/bedrock_server` 위치에 우클릭을 하고 `새로만들기`를 클릭하고 `텍스트 문서`를 클릭합니다.
4. `새 텍스트 문서.txt`를 `ban.json`(또는 위 설정에서 설정한 json 이름) 으로 이름과 확장명을 변경합니다.
5. ban.json 안에 {}를 입력하고 ctrl+s를 눌러 저장합니다.
6. bdsx.bat를 실행하고 서버에 접속하여 /ban (플레이어)를 이용하여 밴을 테스트 합니다.

## 밴 해제하는법

1. `bdsx-master/bedrock_server/ban.json`를 엽니다.
2. `{"디바이스 아이디":"BANED"}` 와 적혀있는 곳에서 밴을 해제할 플레이어의 디바이스 아이디 옆에 있는 BANED를 지우고 ctrl+s를 눌러 저장합니다.
3. 서버를 재시작하거나 /update-ban 명령어를 사용하여 ban.json를 인게임에 적용합니다. 
