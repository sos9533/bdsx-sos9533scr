import { DimensionId } from "bdsx/bds/actor";
import { Vec3 } from "bdsx/bds/blockpos";
import { Player, ServerPlayer } from "bdsx/bds/player";
import { events } from "bdsx/event";
import * as fs from "fs";
import { BackCommand, BackCommandDescription, UseBackCommand, back_json } from "../setting";
import { Translate } from "..";
import { command } from "bdsx/command";
import { makeFile } from "../functions";

class Back {
    public position: Vec3;

    public dimensionid: DimensionId;

    public static setBackData(player: Player): void {
        const read = JSON.parse(fs.readFileSync(back_json, "utf8"));
        const back = new Back(player);
        read[player.getXuid()] = back;
        fs.writeFileSync(back_json, JSON.stringify(read), "utf8");
        player.sendMessage(Translate("back.SetBackSuccess"));
    };

    public static getBackData(player: Player): Back {
        const read = JSON.parse(fs.readFileSync(back_json, "utf8"));
        return read[player.getXuid()];
    };

    public static hasBackData(player: Player): boolean {
        const read = JSON.parse(fs.readFileSync(back_json, "utf8"));
        if (read[player.getXuid()] == null || read[player.getXuid()] == undefined) return false;
        else return true;
    };

    public static setEvent(): void {
        events.entityDie.on(ev => {
            const player = ev.entity as ServerPlayer;
            Back.setBackData(player);
        });
    };

    public constructor(player: Player) {
        this.position = player.getPosition();
        this.dimensionid = player.getDimensionId();
    };

    public static teleportToBack(player: Player): void {
        if (!Back.hasBackData(player)) return;
        const back = Back.getBackData(player);
        player.teleport(Vec3.create({x: back.position.x, y: back.position.y, z: back.position.z}), back.dimensionid);
        player.sendMessage(Translate("back.TeleportBackSuccess"));
    };

    public static setCommand(): void {
        command.register(BackCommand, BackCommandDescription).overload((param, origin, output) => {
            Back.teleportToBack(origin.getEntity() as ServerPlayer);
        },{});
    };
};

if (UseBackCommand) {
    makeFile(back_json);
    Back.setEvent();
    Back.setCommand();
};