import { command } from "bdsx/command";
import { events } from "bdsx/event";
import { serverProperties } from "bdsx/serverproperties";
import { red } from "colors";
import { Translate } from "..";
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
} from "../setting";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

if (UseBasicitemCommand) {
    command.register(BasicitemCommand, Translate("command.ItemExplanation")).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red(Translate("error.ConsoleUseCommand")));
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
