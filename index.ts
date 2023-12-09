require("./bds");

import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { serverProperties } from "bdsx/serverproperties";
import "bdsx/bds/implements";
import * as fs from "fs";
import * as ini from "ini";
import * as path from "path";
import { language, runCommand, SystemMessageTitle } from "./setting";
import { red } from "colors";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { CommandPermissionLevel } from "bdsx/bds/command";

export function isAbstracted(obj: any): boolean {
    try {
        Object.isExtensible(obj);
        return false;
    } catch (err) {
        if (err.message === "BDS is not loaded yet") {
            return true;
        } else if (err.message === "bedrock_server is not launched yet") {
            return true;
        }
        throw err;
    }
}

const FORMAT_SPECIFIER = "%v";

const lang = language

if (lang === "korean") {

} else if (lang === "english") {

} else {
    throw red("\n".white +"[".white +"sos9533scr".yellow +" ]".white +" ERROR / cant find language!".red +"\n\n\n" +"cant find language in setting.ts".gray +"\n\n" +"sos9533scr가 setting.ts에서 'language'설정을 찾지 못했습니다.".gray +"\n\n\n" +" /".white +" CODE : CFIL-sos9533scr".gray +"\n" +" / ".white +"Need help? Discord : sos9533#9533".green,);
}

const langDB = fs.readFileSync(path.join(__dirname, `./data/lang/${lang}.ini`), "utf8");
const __TRANSLATOR__ = ini.parse(langDB);

export function Translate(key: string, ...args: any[]): string {
    const raw: string | undefined = __TRANSLATOR__[key];
    if (raw === undefined) return key;
    let str = String(raw).replace(/\\n/g, "\n");
    for (let i = 0; i < args.length; i++) {
        const idx = str.lastIndexOf(FORMAT_SPECIFIER);
        if (idx < 0) return str;
        str = str.replace(FORMAT_SPECIFIER, args[i]);
    }
    return str;
}

export function SendTranslated(player: ServerPlayer, key: string, ...args: any[]) {
    const message = Translate(key, ...args);
    player.sendMessage(message);
}

const levelname = serverProperties["level-name"];

function Import(): void {
    console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - Plugin Strat Loading...`.gray);
    import("./scr/anticrasher");
    import("./scr/back");
    import("./scr/ban");
    import("./scr/bossbar");
    import("./scr/exit");
    import("./scr/home");
    import("./scr/info");
    import("./scr/item");
    import("./scr/join");
    import("./scr/kick");
    import("./scr/message");
    import("./scr/mute");
    import("./scr/prefix");
    import("./scr/timecommand");
    import("./scr/tpcommand");
    import("./scr/tpa");
    import("./scr/tag");
    
    if (language === "english") {
        command
            .register("sos9533scr", "§r§l§fThis server is using sos9533scr - §cCopyright (c) 2022 sos9533§r", CommandPermissionLevel.Normal)
            .overload((param, origin, output) => {
                if (origin.isServerCommandOrigin()) {
                    output.success("");
                } else {
                    runCommand(
                        `tellraw "${origin.getName()}" {"rawtext":[{"text":"${SystemMessageTitle}\nDownload : https://github.com/sos9533/bdsx-sos9533scr \nMade by sos9533, mdisprgm, job-gut, Blue00123, kdg7313, namacksin\nDiscord : sos9533#9533"}]}`,
                    );
                    output.success("");
                }
            }, {});
    }
    
    if (language === "korean") {
        command
            .register("sos9533scr", "§r§l§f이 서버는 sos9533scr 플러그인을 사용중입니다. - §cCopyright (c) 2022 sos9533§r", CommandPermissionLevel.Normal)
            .overload((param, origin, output) => {
                if (origin.isServerCommandOrigin()) {
                    output.success("");
                } else {
                    runCommand(
                        `tellraw "${origin.getName()}" {"rawtext":[{"text":"§l${SystemMessageTitle}§l\n다운로드 : https://github.com/sos9533/bdsx-sos9533scr \nMade by sos9533, mdisprgm, job-gut, Blue00123, kdg7313, namacksin\n디스코드 : sos9533#9533"}]}`,
                    );
                    output.success("");
                }
            }, {});
    }
}

if (!isAbstracted(bedrockServer.minecraft)) {
    Import();
} else {
    events.serverOpen.on(Import);
}
