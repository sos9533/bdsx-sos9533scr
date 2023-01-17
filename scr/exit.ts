import { events } from "bdsx/event";
import { serverProperties } from "bdsx/serverproperties";
import { red } from "colors";
import { playerList } from "./join";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

events.networkDisconnected.on(networkIdentifier => {
    const username = playerList.get(networkIdentifier);
    playerList.delete(networkIdentifier);
    console.log(red(`${username}> Exit server`));
    addlog(`${username}> Exit server`);
});

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - exit.ts loaded`.gray);
