"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const serverproperties_1 = require("bdsx/serverproperties");
const colors_1 = require("colors");
const __1 = require("..");
const setting_1 = require("../setting");
const log_1 = require("./log");
const levelname = serverproperties_1.serverProperties["level-name"];
if (setting_1.UseSpawnCommand) {
    command_1.command.register(setting_1.SpawnCommand, setting_1.Spawncommandexplanation).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();
        if (!(entity === null || entity === void 0 ? void 0 : entity.isPlayer())) {
            console.log((0, colors_1.red)((0, __1.Translate)("error.ConsoleUseCommand")));
            return;
        }
        (0, setting_1.runCommand)(`tp @a[name="${username}"] ${setting_1.SpawnCoordinate}`);
        (0, setting_1.runCommand)(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${setting_1.SystemMessageTitle} §r${setting_1.SpawnCommandTitle}"}]}`);
        (0, log_1.addlog)(`${username} tp to spawn`);
    }, {});
}
if (setting_1.usestpcommandA) {
    command_1.command.register(setting_1.tpcommandA, setting_1.tpcommandexplanationA).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();
        if (!(entity === null || entity === void 0 ? void 0 : entity.isPlayer())) {
            console.log((0, colors_1.red)((0, __1.Translate)("error.ConsoleUseCommand")));
            return;
        }
        (0, setting_1.runCommand)(`tp @a[name="${username}"] ${setting_1.tpcoordinateA}`);
        (0, setting_1.runCommand)(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${setting_1.SystemMessageTitle} §r${setting_1.tpcommandtitleA}"}]}`);
        (0, log_1.addlog)(`${username} tp to  ${setting_1.tpcoordinateA}`);
    }, {});
}
if (setting_1.usestpcommandB) {
    command_1.command.register(setting_1.tpcommandB, setting_1.tpcommandexplanationB).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();
        if (!(entity === null || entity === void 0 ? void 0 : entity.isPlayer())) {
            console.log((0, colors_1.red)((0, __1.Translate)("error.ConsoleUseCommand")));
            return;
        }
        (0, setting_1.runCommand)(`tp @a[name="${username}"] ${setting_1.tpcoordinateB}`);
        (0, setting_1.runCommand)(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${setting_1.SystemMessageTitle} §r${setting_1.tpcommandtitleB}"}]}`);
        (0, log_1.addlog)(`${username} tp to  ${setting_1.tpcoordinateB}`);
    }, {});
}
if (setting_1.usestpcommandC) {
    command_1.command.register(setting_1.tpcommandC, setting_1.tpcommandexplanationC).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();
        if (!(entity === null || entity === void 0 ? void 0 : entity.isPlayer())) {
            console.log((0, colors_1.red)((0, __1.Translate)("error.ConsoleUseCommand")));
            return;
        }
        (0, setting_1.runCommand)(`tp @a[name="${username}"] ${setting_1.tpcoordinateC}`);
        (0, setting_1.runCommand)(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${setting_1.SystemMessageTitle} §r${setting_1.tpcommandtitleC}"}]}`);
        (0, log_1.addlog)(`${username} tp to  ${setting_1.tpcoordinateC}`);
    }, {});
}
console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - tpcommand.ts loaded`.gray);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHBjb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHBjb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXVDO0FBQ3ZDLDREQUF5RDtBQUN6RCxtQ0FBNkI7QUFDN0IsMEJBQStCO0FBQy9CLHdDQUFpWjtBQUNqWiwrQkFBK0I7QUFDL0IsTUFBTSxTQUFTLEdBQUcsbUNBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFakQsSUFBSSx5QkFBZSxFQUFFO0lBQ2pCLGlCQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFZLEVBQUUsaUNBQXVCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3ZGLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFFBQVEsRUFBRSxDQUFBLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFBLFlBQUcsRUFBQyxJQUFBLGFBQVMsRUFBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxPQUFPO1NBQ1Y7UUFFRCxJQUFBLG9CQUFVLEVBQUMsZUFBZSxRQUFRLE1BQU0seUJBQWUsRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBQSxvQkFBVSxFQUFDLG9CQUFvQixRQUFRLDJCQUEyQiw0QkFBa0IsTUFBTSwyQkFBaUIsTUFBTSxDQUFDLENBQUM7UUFDbkgsSUFBQSxZQUFNLEVBQUMsR0FBRyxRQUFRLGNBQWMsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUNWO0FBRUQsSUFBSSx3QkFBYyxFQUFFO0lBQ2hCLGlCQUFPLENBQUMsUUFBUSxDQUFDLG9CQUFVLEVBQUUsK0JBQXFCLENB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