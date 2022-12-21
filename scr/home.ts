import { command } from "bdsx/command";
import { makeFile } from "../functions";
import { HomeCommand, language, runCommand, SethomeCommand, sethome_json, SystemMessageTitle, UseSethomeCommand } from "../setting";
import * as fs from "fs";
import { red } from "colors";
import { serverProperties } from "bdsx/serverproperties";
const levelname = serverProperties["level-name"]

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

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - home.ts loaded`.gray)
