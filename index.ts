require("./bds");
require("./scr");

import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { serverProperties } from "bdsx/serverproperties";

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

const levelname = serverProperties["level-name"]

if (!isAbstracted(bedrockServer.minecraft)) {
    console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Strat Loading...`.gray)
    import("./scr/anticrasher");
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
} else {
    events.serverOpen.on(() => {
        console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red +` - Plugin Strat Loading...`.gray)
        import("./scr/anticrasher");
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
    });
}

