import type { GameObject } from "../entities/gameObject";

export class Physics {
    constructor(
        public worldWidth: number,
        public worldHeight: number,
        public gravity: number = 800
    ) { }

    // apply gravity
    applyGravity(object: GameObject, dt: number) {
        if (object.useGravity) {
            object.velocityY += this.gravity * object.gravityScale * dt;
        }
    }

    updateObjectMotion(object: GameObject, dt: number) {
        this.applyGravity(object, dt);

        // Update positions
        object.x += object.velocityX * dt;
        object.y += object.velocityY * dt;

        // Collision detection

        // Collision in start wall
        if (object.x + (object as any).width > this.worldWidth) {
            object.x = this.worldWidth - (object as any).width;
            object.velocityX *= -1;
        }

        // Collision in end wall
        if (object.x < 0) {
            object.x = 0;
            object.velocityX *= -1;
        }

        // Collision in bottom wall
        if (object.y + (object as any).height > this.worldHeight) {
            object.y = this.worldHeight - (object as any).height;
            object.velocityY *= -1;
        }

        // If the gravity is not enabled, prevent objects from falling to the ground
        if (!object.useGravity) {
            if (object.y + (object as any).height > this.worldHeight) {
                object.y = this.worldHeight - (object as any).height;
                object.velocityY = 0;
            }
        }

        // Collision in top wall
        if (object.y < 0) {
            object.y = 0;
            object.velocityY *= -1;
        }
    }
}