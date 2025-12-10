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
        // if rotation exsists
        if (this.rotation !== 0) {
            renderer.context.save();

            const centerX = this.x + this.width / 2;
            const centerY = this.y + this.height / 2;

            renderer.context.translate(centerX, centerY);
            renderer.context.rotate(this.rotation);

            renderer.context.fillStyle = this.color;
            renderer.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

            if (this.text) {
                renderer.context.fillText(this.text, -this.width / 2, -this.height / 2);
            }

            renderer.context.restore();
        } else {
            renderer.fillRect(this.x, this.y, this.width, this.height, this.color, this.text);
        }

    }

}