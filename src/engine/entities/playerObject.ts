import type { Input } from "../core/input";
import { Rectangle } from "./rectangle";

export class PlayerObject extends Rectangle {
    speed: number;
    input: Input;

    constructor(input: Input, speed: number, width: number = 50, height: number = 50, color: string = "#000000", text: string = "") {
        super(width, height, color, text);
        this.input = input;
        this.speed = speed;
    }

    update(dt: number): void {
        if (this.input.isPressed("ArrowLeft")) {
            this.x -= this.speed * dt;
        }
        if (this.input.isPressed("ArrowRight")) {
            this.x += this.speed * dt;
        }
        if (this.input.isPressed("ArrowUp")) {
            this.y -= this.speed * dt;
        }
        if (this.input.isPressed("ArrowDown")) {
            this.y += this.speed * dt;
        }

        super.update(dt);
    }
}