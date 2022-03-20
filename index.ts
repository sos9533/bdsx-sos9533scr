import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";

if (bedrockServer.isLaunched()) {
    import("./sos9533scr");
} else {
    events.serverOpen.on(() => {
        import("./sos9533scr");
    });
}
