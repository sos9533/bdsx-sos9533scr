import { events } from "bdsx/event";
import { playerList } from "./join";
import { red } from "colors";
import { serverProperties } from "bdsx/serverproperties";
import { addlog } from "./log";
const levelname = serverProperties["level-name"]

events.networkDisconnected.on((networkIdentifier) => {
    const username = playerList.get(networkIdentifier);
    playerList.delete(networkIdentifier);
    console.log(red(`${username}> Exit server`));
    addlog(`${username}> Exit server`)
});

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - exit.ts loaded`.gray)
