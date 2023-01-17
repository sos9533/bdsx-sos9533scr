import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { red } from "colors";
import { runCommand, SpawnCommand, Spawncommandexplanation, SpawnCommandTitle, SpawnCoordinate, SystemMessageTitle, tpcommandA, tpcommandB, tpcommandC, tpcommandexplanationA, tpcommandexplanationB, tpcommandexplanationC, tpcommandtitleA, tpcommandtitleB, tpcommandtitleC, tpcoordinateA, tpcoordinateB, tpcoordinateC, UseSpawnCommand, usestpcommandA, usestpcommandB, usestpcommandC } from "../setting";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

if (UseSpawnCommand) {
    command.register(SpawnCommand, Spawncommandexplanation).overload((param, origin, output) => {
        const username = origin.getName();
        const entity = origin.getEntity();

        if (!entity?.isPlayer()) {
            console.log(red("You are the server console"));
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
            console.log(red("You are the server console"));
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
            console.log(red("You are the server console"));
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
            console.log(red("You are the server console"));
            return;
        }

        runCommand(`tp @a[name="${username}"] ${tpcoordinateC}`);
        runCommand(`tellraw @a[name="${username}"] {"rawtext":[{"text":"${SystemMessageTitle} §r${tpcommandtitleC}"}]}`);
        addlog(`${username} tp to  ${tpcoordinateC}`);
    }, {});
}

/*
 *                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */ if (
    !runCommand("sos9533scr").isSuccess()
) {
    throw red(
        "\n".white +
            "[".white +
            " sos9533scr".yellow +
            " ]".white +
            " ERROR / Can't Find Important Code!".red +
            "\n\n\n" +
            "sos9533scr can't Find Important Code".gray +
            "\n\n" +
            "sos9533scr가 중요 코드를 찾지 못했습니다.".gray +
            "\n\n\n" +
            " /".white +
            " CODE : CFIC-sos9533scr".gray +
            "\n" +
            " / ".white +
            "Need help? Discord : sos9533#9533".green,
    );
}
/*
 */

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - tpcommand.ts loaded`.gray);
