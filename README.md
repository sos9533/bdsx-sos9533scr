

# sos9533scr
이곳은 구버전 sos9533scr의 공간입니다.
```sh
 본 플러그인은 sos9533가 제작하였습니다.
 얼마든지 코드를 참고해서 공부하셔도 되긴 하는데
 이 플러그인 퀄리티가 매우 안좋아서 제꺼말고 다른분들꺼 참고하는게 좋으실겁니다.
 
 자랑하거나 뭐 하려고 만든게 아니라 그냥 연습용으로 제작한겁니다.
 이참에 만든거 옴렛 bdsx 초보 유저분들한테 공유하고 싶어서 그런겁니다.
```
* 제작자 연락처
    * [OmletArcade](https://omlet.gg/profile/sos9533)
    * [KakaoTalk OpneChat](https://open.kakao.com/me/sos9533)


### 적용법

1. bdsx-master파일에 index.ts와 sos9533scr를 압축해제하여 넣습니다.

2. bdsx.bat을 작동시킵니다.

3. "[ sos9533scr ] allocated - sos9533"가 bdsx 콘솔에 뜨면 정상 적용된겁니다.



### 사용법
1. 위와같이 적용한 후 아래와 같은 부분에서 플러그인 세팅을 합니다.
아래를 참고하여 세팅을 하세요.


> 아래와 같은 사용여부를 선택할때는 "" 안에 true또는 false를 입력합니다.
> (true=네, false=아니요)

```ts
//참여 환영 메시지 사용여부 (true/false)
let usewelcomemessage = "true"
```

> 아래와 같은 글자를 적는 부분에서는 ""를 사용합니다.

```ts
//참여 환영 메시지 - 참가한 플레이어의 채팅창에 출력
const welcomemessage = "§l§7환영합니다!"
```

> 아래와 같은 숫자를 적는 부분에서는 ""를 입력하지 않습니다.

```ts
//긴 닉네임 길이 (권장:30)
const longnicknamekicklength = 30
```

> 아래와 같은 좌표를 적는 부분에는 ""를 사용합니다.
```ts
//스폰 좌표 (x y z)
const spawncoordinate = "0 10 0"
```
