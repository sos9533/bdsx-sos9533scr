////////////////////////////////////////////////////////////

//what is your language / 당신의 언어는 무엇인가요
//english / korean

let language = "english";

//한국인이시라면 sos9533scr-korean.ts 내부를 편집하여 사용해주세요.
//If you use English, please edit sos9533scr-english.ts and use.

////////////////////////////////////////////////////////////

require("./bds");

import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";

function isAbstracted(obj: any): boolean {
    try {
        Object.isExtensible(obj);
        return false;
    } catch (err) {
        if (err.message === "bedrock_server is not launched yet") {
            return true;
        }
        throw err;
    }
}

if (!isAbstracted(bedrockServer.minecraft)) {
    if (language === "korean") import("./sos9533scr-korean");
    if (language === "english") import("./sos9533scr-english");
} else {
    events.serverOpen.on(() => {
        if (language === "korean") import("./sos9533scr-korean");
        if (language === "english") import("./sos9533scr-english");
    });
}
