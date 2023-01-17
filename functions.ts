import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { CANCEL } from "bdsx/common";
import { bedrockServer } from "bdsx/launcher";
import * as fs from "fs";
import { addlog } from "./scr/log";

export function kick(target: NetworkIdentifier, message: string): CANCEL {
    bedrockServer.serverInstance.disconnectClient(target, message);
    addlog(`${target.getActor()?.getNameTag()} kicked`);
    return CANCEL;
}

export function makeFile(filepath: string, value = {}): void {
    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(filepath, JSON.stringify(value));
        console.log("[", "sos9533scr".yellow, "]", `Made '${filepath}'`.gray, " - sos9533".green);
    }
}

export function makeDir(dirname: string): void {
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
        console.log("[", "sos9533scr".yellow, "]", `Made '${dirname}'`.gray, " - sos9533".green);
    }
}

export function leadZero(num: number, n: number): string {
    var leadZero = "";
    let num2 = num.toString();
    if (num2.length < n) {
        for (var i = 0; i < n - num2.length; i++) leadZero += "0";
    }
    return leadZero + num;
}

export function dateWithZero(): string {
    var d = new Date();
    return (
        d.getFullYear() +
        "-" +
        leadZero(d.getMonth() + 1, 2) +
        "-" +
        leadZero(d.getDate(), 2) +
        "-" +
        leadZero(d.getHours(), 2) +
        "-" +
        leadZero(d.getMinutes(), 2) +
        "-"
    );
}
