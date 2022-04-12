////////////////////////////////////////////////////////////

//what is your language / 당신의 언어는 무엇인가요
//english / korean

let language = "english"

//한국인이시라면 sos9533scr-korean.ts 내부를 편집하여 사용해주세요.
//If you use English, please edit sos9533scr-english.ts and use.

////////////////////////////////////////////////////////////

import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";

if (bedrockServer.isLaunched()) {
    if (language === "korean") import("./sos9533scr-korean");
    if (language === "english") import("./sos9533scr-english");
} else {
    events.serverOpen.on(() => {
        if (language === "korean") import("./sos9533scr-korean");
        if (language === "english") import("./sos9533scr-english");
    });
}
