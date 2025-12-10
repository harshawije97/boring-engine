import type { Renderer } from "../rendering/renderer";
import { GameObject } from "./gameObject";

export class RectangleObject extends GameObject {
    width: number;
    height: number;
    color: string;
    text: string;

    constructor(width: number = 50, height: number = 50, color: string = "#000000", text: string = "") {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
        this.text = text;
    }

    update(_dt: number) {
        // Custom update logic can be added here
        // Physics motion is handled by Physics.updateObjectMotion
    }

    render(renderer: Renderer) {
        renderer.fillRect(this.x, this.y, this.width, this.height, this.color, this.text);
    }

}