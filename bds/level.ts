import { Level } from "bdsx/bds/level";
import { Player } from "bdsx/bds/player";
import { CxxString } from "bdsx/nativetype";
import { procHacker } from "bdsx/prochacker";

declare module "bdsx/bds/level" {
    interface Level {
        getPlayerByName(name: string): Player | null;
    }
}

Level.prototype.getPlayerByName = procHacker.js(
    "?getPlayer@Level@@UEBAPEAVPlayer@@AEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z",
    Player,
    { this: Level },
    CxxString,
);
