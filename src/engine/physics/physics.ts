import type { Rectangle } from "../entities/rectangle";

export class Physics {
    constructor(
        public worldWidth: number,
        public worldHeight: number) { }

    updateRectangleMotion(rectangle: Rectangle) {
        // Collision in start wall
        if (rectangle.x + rectangle.width > this.worldWidth) {
            rectangle.x = this.worldWidth - rectangle.width;
            rectangle.velocityX *= -1;
        }

        // Collision in end wall
        if (rectangle.x < 0) {
            rectangle.x = 0;
            rectangle.velocityX *= -1;
        }

        // Collision in bottom wall
        if (rectangle.y + rectangle.height > this.worldHeight) {
            rectangle.y = this.worldHeight - rectangle.height;
            rectangle.velocityY *= -1;
        }

        // Collision in top wall
        if (rectangle.y < 0) {
            rectangle.y = 0;
            rectangle.velocityY *= -1;
        }
    }
}