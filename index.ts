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
    import("./sos9533scr");
} else {
    events.serverOpen.on(() => {
        import("./sos9533scr");
    });
}

