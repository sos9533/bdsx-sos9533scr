import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { ActorEventPacket } from "bdsx/bds/packets";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { serverProperties } from "bdsx/serverproperties";
import { kick } from "../functions";
import { AntiCrasherTitle, UseAntiCrasher } from "../setting";
const levelname = serverProperties["level-name"];

export const LAST = new Map<NetworkIdentifier, number>();
export const COUNT = new Map<NetworkIdentifier, number>();
export const DELAY_LIMIT = 3;

events.packetAfter(MinecraftPacketIds.Login).on(async (pkt, ni) => {
    LAST.set(ni, 0);
    COUNT.set(ni, 0);
});
events.networkDisconnected.on(async ni => {
    LAST.delete(ni);
    COUNT.delete(ni);
});

if (UseAntiCrasher) {
    const Ignored = new Set<number>([12, 26, 35, 42, 43]);
    events.packetBefore(MinecraftPacketIds.LevelSoundEvent).on((pkt, ni) => {
        if (Ignored.has(pkt.sound)) return;

        if (Date.now() - LAST.get(ni)! < DELAY_LIMIT) {
            const next = COUNT.get(ni)!;
            COUNT.set(ni, next + 1);
            if (next > 3) {
                kick(ni, AntiCrasherTitle);
            }

            return CANCEL;
        }
        COUNT.set(ni, 0);
        LAST.set(ni, Date.now());
    });

    const FOOD_LAST = new Map<NetworkIdentifier, number>();
    const FOOD_COUNT = new Map<NetworkIdentifier, number>();
    events.packetBefore(MinecraftPacketIds.ActorEvent).on((pkt, ni) => {
        const action = pkt.event;
        if (action !== ActorEventPacket.Events.EatingItem) return;

        if (Date.now() - FOOD_LAST.get(ni)! < DELAY_LIMIT) {
            const next = FOOD_COUNT.get(ni)!;
            FOOD_COUNT.set(ni, next + 1);
            if (next > 3) {
                kick(ni, AntiCrasherTitle);
            }

            return CANCEL;
        }
        FOOD_COUNT.set(ni, 0);
        FOOD_LAST.set(ni, Date.now());
    });

    const opt_movement = serverProperties["server-authoritative-movement"];
    if (opt_movement === "client-auth") {
        events.packetBefore(MinecraftPacketIds.MovePlayer).on((pkt, ni) => {
            const X = pkt.pos.x;
            const Y = pkt.pos.y;
            const Z = pkt.pos.z;

            switch (true) {
                case X > 1073741823:
                case Y > 1073741823:
                case Z > 1073741823:
                    kick(ni, AntiCrasherTitle);
                    return CANCEL;
                default:
            }
        });
    } else {
        events.packetBefore(MinecraftPacketIds.PlayerAuthInput).on((pkt, ni) => {
            switch (true) {
                case pkt.moveX > 1073741823:
                case pkt.moveZ > 1073741823:
                case pkt.pos.x > 1073741823:
                case pkt.pos.y > 1073741823:
                case pkt.pos.z > 1073741823:
                    kick(ni, AntiCrasherTitle);
                    return CANCEL;
                default:
            }
        });
    }
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - anticrasher.ts loaded`.gray);
