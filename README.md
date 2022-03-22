# sos9533scr

본 플러그인은 sos9533이 제작한 기본 세팅 플러그인입니다.
기본적인 지식으로 만든 연습겸 공유 플러그인입니다.

-   제작자 연락처
    -   [OmletArcade](https://omlet.gg/profile/sos9533)
    -   [KakaoTalk OpneChat](https://open.kakao.com/me/sos9533)

## 기능

```txt
ㄴ 참가이벤트
   ㄴ 참여 환영 메시지
   ㄴ 참가시 긴 닉네임 강제퇴장시키기 (닉핵방지)

ㄴ 관리자 전용 명령어
   ㄴ 강제퇴장 명령어
   ㄴ 뮤트 명령어

ㄴ 일반인 명령어
   ㄴ 스폰 명령어
   ㄴ 커스텀 tp명령어

ㄴ 핵방지
   ㄴ 툴박스 접속방지 (툴박방지)
   ㄴ 도배방지
      ㄴ 장문방지
      ㄴ 단타방지
   ㄴ 크래셔 방지 (지퍼 크래셔 방지)
   
ㄴ 기타기능
   ㄴ § 사용 제한시키기
```

안티크래셔는 해당 코드를 사용하였습니다.
[mdisprgm/bdsx-anticrasher](https://github.com/mdisprgm/bdsx-anticrasher)
( 해당 소스는 MIT 라이센스로써 저작권 표시 및 허가 표시를 소프트웨어의 모든 복제물 또는 중요한 부분에 기재하고 사용할수 있습니다. )

## 적용법

1. `bdsx-master/plugins` 디렉터리에 플러그인 폴더를 두세요.

예시)

```
└─bdsx-master
    └─plugins
        └─sos9533
            └─ .gitignore
            └─ .npmignore
            └─ index.ts
            └─ LICENSE.txt
            └─ package.json
            └─ sos9533scr.ts
```
2. "[ sos9533scr ] allocated - sos9533"가 bdsx 콘솔에 뜨면 정상 적용된겁니다.

## 사용법

1. 위와같이 적용한 후 아래와 같이 sos9533scr.ts 파일 안에서 const또는 let부분을 원하는대로 변경하시면 됩니다.

> 아래와 같은 사용여부를 선택할때는 ""를 포함하고 true또는 false를 입력합니다.
> (true=네, false=아니요)

```ts
//참여 환영 메시지 사용여부 (true/false)
let usewelcomemessage = "true"
```

```ts
//참여 환영 메시지 사용여부 (true/false)
let usewelcomemessage = "false"
```

---

> 아래와 같은 글자를 적는 부분에서는 ""를 사용합니다.

```ts
//참여 환영 메시지 - 참가한 플레이어의 채팅창에 출력
const welcomemessage = "§l§7환영합니다!"
```

```ts
//참여 환영 메시지 - 참가한 플레이어의 채팅창에 출력
const welcomemessage = "§l§7안녕하세요!!"
```

---

> 아래와 같은 숫자를 적는 부분에서는 ""를 입력하지 않습니다.

```ts
//긴 닉네임 길이 (권장:30)
const longnicknamekicklength = 30
```

```ts
//긴 닉네임 길이 (권장:30)
const longnicknamekicklength = 50
```

---

> 아래와 같은 좌표를 적는 부분에는 ""를 사용합니다.

```ts
//스폰 좌표 (x y z)
const spawncoordinate = "0 10 0"
```

```ts
//스폰 좌표 (x y z)
const spawncoordinate = "100 5 100"
```
