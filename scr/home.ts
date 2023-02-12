import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { red } from "colors";
import * as fs from "fs";
import { Translate } from "..";
import { makeFile } from "../functions";
import { HomeCommand, runCommand, SethomeCommand, sethome_json, SystemMessageTitle, UseSethomeCommand } from "../setting";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

if (UseSethomeCommand) {
    makeFile(sethome_json);
    command.register(SethomeCommand, Translate("command.SetHomeExplanation")).overload((param, origin, output) => {
        const player = origin.getEntity();

        if (!player?.isPlayer()) {
            console.log(red(Translate("error.ConsoleUseCommand")));
            return;
        }

        const username = origin.getName();
        const pos = player.getPosition();
        const deviceId = player.deviceId;

        const jsonObj = JSON.parse(fs.readFileSync(sethome_json, "utf8"));
        const homePos = `${pos?.x ?? "??"} ${pos?.y ?? "??"} ${pos?.z ?? "??"}`;
        jsonObj[deviceId] = homePos;
        fs.writeFileSync(sethome_json, JSON.stringify(jsonObj), "utf8");
        runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("sethome.SetHomeSuccess")}"}]}`);
    }, {});

    command.register(HomeCommand, Translate("command.HomeExplanation")).overload((param, origin, output) => {
        const player = origin.getEntity();
        if (!player?.isPlayer()) {
            console.log(red(Translate("error.ConsoleUseCommand")));
            return;
        }

        const username = origin.getName();
        const deviceId = player.deviceId;
        const jsonObj = JSON.parse(fs.readFileSync(sethome_json, "utf8"));

        runCommand(`tp @a[name="${username}"] ${jsonObj[deviceId]}`);
        addlog(`${username} tp to ${jsonObj[deviceId]}`);
        runCommand(`tellraw "${username}" {"rawtext":[{"text":"${SystemMessageTitle} ${Translate("sethome.TeleportHomeSuccess")}"}]}`);
    }, {});
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - home.ts loaded`.gray);
