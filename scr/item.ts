import { command } from "bdsx/command";
import {
    basicitemA,
    basicitemB,
    basicitemC,
    BasicitemCommand,
    basicitemD,
    basicitemE,
    basicitemF,
    basicitemG,
    basicitemH,
    JoinGiveBasictem,
    runCommand,
    UseBasicitemCommand,
    UseWelcomeMessage,
    WelcomeMessage,
} from "../setting";
import { red } from "colors";
import { events } from "bdsx/event";
import { serverProperties } from "bdsx/serverproperties";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

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
        addlog(`${username} get items`);
    }, {});
}

events.playerJoin.on(ev => {
    const username = ev.player.getNameTag();

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
            addlog(`${username} get items`);
        }
    }
});

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - item.ts loaded`.gray);
