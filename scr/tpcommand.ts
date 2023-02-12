import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { red } from "colors";
import { Translate } from "..";
import { runCommand, SpawnCommand, Spawncommandexplanation, SpawnCommandTitle, SpawnCoordinate, SystemMessageTitle, tpcommandA, tpcommandB, tpcommandC, tpcommandexplanationA, tpcommandexplanationB, tpcommandexplanationC, tpcommandtitleA, tpcommandtitleB, tpcommandtitleC, tpcoordinateA, tpcoordinateB, tpcoordinateC, UseSpawnCommand, usestpcommandA, usestpcommandB, usestpcommandC } from "../setting";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

if (UseSpawnCommand) {
    command.register(SpawnCommand, Spawncommandexplanation).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red(Translate("error.ConsoleUseCommand")));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${SpawnCoordinate}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${SpawnCommandTitle}"}]}`);
        addlog(`${username} tp to spawn`);
    }, {});
}

if (usestpcommandA) {
    command.register(tpcommandA, tpcommandexplanationA).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red(Translate("error.ConsoleUseCommand")));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateA}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${tpcommandtitleA}"}]}`);
        addlog(`${username} tp to  ${tpcoordinateA}`);
    }, {});
}

if (usestpcommandB) {
    command.register(tpcommandB, tpcommandexplanationB).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red(Translate("error.ConsoleUseCommand")));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateB}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${tpcommandtitleB}"}]}`);
        addlog(`${username} tp to  ${tpcoordinateB}`);
    }, {});
}

if (usestpcommandC) {
    command.register(tpcommandC, tpcommandexplanationC).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red(Translate("error.ConsoleUseCommand")));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateC}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${tpcommandtitleC}"}]}`);
        addlog(`${username} tp to  ${tpcoordinateC}`);
    }, {});
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - tpcommand.ts loaded`.gray);
