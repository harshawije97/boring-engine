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
        // If rigid body exists, ensure moment of inertia is calculated correctly
        if (this.rigidBody && !this.rigidBody.momentOfInertiaSet) {
            this.rigidBody.setMomentOfInertia(this.width, this.height);

        }
    }

    render(renderer: Renderer) {
        // If rotation exists, apply transformation
        if (this.rotation !== 0) {
            renderer.context.save();

            // Move to center of rectangle
            const centerX = this.x + this.width / 2;
            const centerY = this.y + this.height / 2;

            renderer.context.translate(centerX, centerY);
            renderer.context.rotate(this.rotation);

            // Draw from center
            renderer.context.fillStyle = this.color;
            renderer.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

            if (this.text) {
                renderer.context.fillText(this.text, -this.width / 2, -this.height / 2);
            }

            renderer.context.restore();
        } else {
            // No rotation, use standard rendering
            renderer.fillRect(this.x, this.y, this.width, this.height, this.color, this.text);
        }
    }

}