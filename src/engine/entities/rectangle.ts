import type { Input } from "../core/input";
import type { Renderer } from "../rendering/renderer";
import { GameObject } from "./gameObject";

export class Rectangle extends GameObject {
    width: number;
    height: number;
    color: string;
    text: string;

    velocityX: number = 0;
    velocityY: number = 0;

    // Default speed
    speed: number = 200;

    constructor(width: number = 50, height: number = 50, color: string = "#000000", text: string = "") {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
        this.text = text;
    }

    update(dt: number): void {
        // if (input && input.isPressed("ArrowRight")) {
        //     this.x += this.speed * dt;
        // }

        // if (input && input.isPressed("ArrowLeft")) {
        //     this.x -= this.speed * dt;
        // }

        this.x += this.velocityX * dt;
        this.y += this.velocityY * dt;
    }

    render(renderer: Renderer) {
        renderer.fillRect(this.x, this.y, this.width, this.height, this.color, this.text);
    }

}