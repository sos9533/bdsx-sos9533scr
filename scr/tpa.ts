import { PlayerCommandSelector } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { serverProperties } from "bdsx/serverproperties";
import { language, runCommand, SystemMessageTitle, TpacceptCommand, TpaCommand, UseTpaCommand } from "../setting";
import { addlog } from "./log";
const levelname = serverProperties["level-name"];

if (UseTpaCommand) {
    const reqs = new Map<string, Set<string>>();

    command.register(TpaCommand, "request tp to another user").overload(
        (param, origin) => {
            const players = param.player.newResults(origin);

            if (players.length > 1 || players.length < 1) {
                const oPlayer = origin.getEntity();

                if (oPlayer?.isPlayer()) {
                    if (language === "english") {
                        oPlayer.sendMessage(`${SystemMessageTitle} §cselect one user correctly`);
                    }
                    if (language === "korean") {
                        oPlayer.sendMessage(`${SystemMessageTitle} §c유저 한명을 정확하게 선택해주세요.`);
                    }
                }
                return;
            }

            const originName = origin.getName();
            const player = players[0];
            const username = player.getNameTag();

            if (language === "english") {
                runCommand(
                    `tellraw "${username}" {"rawtext": [{"text": "${SystemMessageTitle}\n§f------ ${originName} want tp to you ------\n§f------§c use '/${TpacceptCommand} ${originName}'§f ------"}]}`,
                );
            }
            if (language === "korean") {
                runCommand(
                    `tellraw "${username}" {"rawtext": [{"text": "${SystemMessageTitle}\n§f------ ${originName}님이 §a티피요청§f을 원합니다 ------\n§f------§c '/${TpacceptCommand} ${originName}'§f 명령어로 수락하세요. ------"}]}`,
                );
            }

            const set = reqs.get(originName) ?? new Set();
            if (!reqs.has(originName)) reqs.set(originName, set);
            set.add(username);

            setTimeout(() => {
                if (set.delete(username))
                    if (language === "english") {
                        runCommand(`tellraw "${originName}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ §6Your tpa request §6has expired ------"}]}`);
                    }
                if (language === "korean") {
                    runCommand(
                        `tellraw "${originName}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ §a${username}§f님에게 보낸 티피요청이 만료되었습니다 ------"}]}`,
                    );
                }
            }, 60 * 1000);
        },
        { player: PlayerCommandSelector },
    );

    command.register(TpacceptCommand, "accept tpa request").overload(
        (param, origin) => {
            const players = param.target.newResults(origin);
            if (players.length !== 1) {
                const oPlayer = origin.getEntity();
                if (oPlayer?.isPlayer()) {
                    if (language === "english") {
                        oPlayer.sendMessage(`${SystemMessageTitle} §cselect one user correctly`);
                    }
                    if (language === "korean") {
                        oPlayer.sendMessage(`${SystemMessageTitle} §c유저 한명을 정확하게 선택해주세요.`);
                    }
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
                    if (language === "english") {
                        runCommand(`tp "${username}" "${originName}"`);
                        runCommand(
                            `tellraw "${username}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ §a${origin.getName()}§f accept your tpa request ------"}]}`,
                        );
                        addlog(`${username} tp to ${originName} by tpa`);
                    }
                    if (language === "korean") {
                        runCommand(
                            `tellraw "${username}" {"rawtext": [{"text":"${SystemMessageTitle}\n§f------ 상대가 수락을 하여 §a${originName}§f 님에게 이동됩니다 ------"}]}`,
                        );
                        runCommand(`tp "${username}" "${originName}"`);
                        addlog(`${username} tp to ${originName} by tpa`);
                    }
                }
            }
        },
        { target: PlayerCommandSelector },
    );
}

console.info("[ " + "sos9533scr".yellow + " ] " + `${levelname}`.red + ` - tpa.ts loaded`.gray);
