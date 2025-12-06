import type { Renderer } from "../rendering/renderer";
import { GameObject } from "./gameObject";

export class Rectangle extends GameObject {
    width: number;
    height: number;
    color: string;

    velocityX: number = 0;
    velocityY: number = 0;

    constructor(width: number = 50, height: number = 50, color: string = "#000000") {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
    }

    update(dt: number): void {
        this.x += this.velocityX * dt;
        this.y += this.velocityY * dt;
    }

    render(renderer: Renderer) {
        renderer.fillRect(this.x, this.y, this.width, this.height, this.color, "@Boring Engine");
    }

}