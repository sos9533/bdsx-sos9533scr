import { events } from "bdsx/event";
import { serverProperties } from "bdsx/serverproperties";
import { UseJumptag, UseOStag, UseSneaktag } from "../setting";
const levelname = serverProperties["level-name"];

events.playerJoin.on(ev => {
    if (UseOStag) {
        const os = ev.player.getPlatform()
        ev.player.removeTag("os_android")
        ev.player.removeTag("os_ios")
        ev.player.removeTag("os_window10")
        ev.player.removeTag("os_playstation")
        ev.player.removeTag("os_nintendo")
        ev.player.removeTag("os_xbox")
        ev.player.removeTag("os_etc")

        if (os === 1) {
            ev.player.addTag("os_android");
        } else if (os === 2) {
            ev.player.addTag("os_ios");
        } else if (os === 7) {
            ev.player.addTag("os_window10");
        } else if (os === 11) {
            ev.player.addTag("os_playstation");
        } else if (os === 12) {
            ev.player.addTag("os_nintendo");
        } else if (os === 13) {
            ev.player.addTag("os_xbox");
        } else {
            ev.player.addTag("os_etc");
        }
    }
});

events.entitySneak.on(ev => {
    if (UseSneaktag) {
        if (ev.isSneaking) {
            ev.entity.addTag("event_sneaking")
        } else {
            ev.entity.removeTag("event_sneaking")
        }
    }
})

events.playerJump.on(ev => {
    if (UseJumptag) {
        ev.player.addTag("event_jumping")
        setTimeout(function() {
            ev.player.removeTag("event_jumping")
        }, 100);
    }
})

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - tag.ts loaded`.gray);
