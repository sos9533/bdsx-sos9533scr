import { PlayerCommandSelector } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { Translate } from "..";
import { runCommand, SystemMessageTitle, TpacceptCommand, TpaCommand, UseTpaCommand } from "../setting";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

if (UseTpaCommand) {
    const reqs = new Map<string, Set<string>>();

    command.register(TpaCommand, Translate("command.TpaExplanation")).overload(
        (param, origin) => {
            const players = param.player.newResults(origin);

            if (players.length > 1 || players.length < 1) {
                const oPlayer = origin.getEntity();

                if (oPlayer?.isPlayer()) {
                    oPlayer.sendMessage(`${SystemMessageTitle} ${Translate("tpa.error.CantFindUser")}`);
                }
                return;
            }

            const originName = origin.getName();
            const player = players[0];
            const username = player.getNameTag();

            runCommand(
                `tellraw "${username}" {"rawtext": [{"text": "${SystemMessageTitle}\n§f------ ${originName}${Translate("tpa.RequestMessage")}'/${TpacceptCommand} ${originName}'§f ------"}]}`,
            );

            const set = reqs.get(originName) ?? new Set();
            if (!reqs.has(originName)) reqs.set(originName, set);
            set.add(username);

            setTimeout(() => {
                if (set.delete(username))
                        runCommand(`tellraw "${originName}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ ${Translate("tpa.RequestExpired")} ------"}]}`);
            }, 60 * 1000);
        },
        { player: PlayerCommandSelector },
    );

    command.register(TpacceptCommand, Translate("command.TpacceptExplanation")).overload(
        (param, origin) => {
            const players = param.target.newResults(origin);
            if (players.length !== 1) {
                const oPlayer = origin.getEntity();
                if (oPlayer?.isPlayer()) {
                    oPlayer.sendMessage(`${SystemMessageTitle} ${Translate("tpa.error.CantFindUser")}`);
                }
                return;
            }   

            const player = players[0];
            const originName = origin.getName();
            const username = player.getNameTag();
            if (reqs.has(username)) {
                const set = reqs.get(username);
                if (!set) return;

                if (set.delete(originName)) {
                    runCommand(`tp "${username}" "${originName}"`);
                    runCommand(
                        `tellraw "${username}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ §a${originName}§f${Translate("tpa.AcceptSuccess")} ------"}]}`,
                    );
                    addlog(`${username} tp to ${originName} by tpa`);
                }
            }
        },
        { target: PlayerCommandSelector },
    );
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - tpa.ts loaded`.gray);
