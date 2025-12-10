import type { GameObject } from "../entities/gameObject";
import { Collision } from "./collision";
import type { RigidBody } from "./rigidBody";

export class Physics {
    constructor(
        public worldWidth: number,
        public worldHeight: number,
        public gravity: number = 800
    ) { }

    // apply gravity
    applyGravity(rb: RigidBody, dt: number) {
        rb.velocityY += this.gravity * rb.gravityScale * dt;
    }

    // detect collision resolution
    /**
     * What does this function do: detects penetration depth
     * pushes objects apart equally
     * applies bounce based on restitution
     * Handles X and Y collisions separately
     * @param a 
     * @param b 
     * @returns 
     */
    resolveCollision(a: GameObject, b: GameObject) {
        if (!a.rigidBody && !b.rigidBody) return;

        const ax = a.x, ay = a.y, aw = a.width, ah = a.height;
        const bx = b.x, by = b.y, bw = b.width, bh = b.height;

        const overlapX = Math.min(ax + aw, bx + bw) - Math.max(ax, bx);
        const overlapY = Math.min(ay + ah, by + bh) - Math.max(ay, by);

        if (overlapX < overlapY) {
            if (ax < bx) {
                a.x -= overlapX / 2;
                b.x += overlapX / 2;
            } else {
                a.x += overlapX / 2;
                b.x -= overlapX / 2;
            }

            // Add bounce capability
            if (a.rigidBody) a.rigidBody.velocityX *= -a.rigidBody.restitution;
            if (b.rigidBody) b.rigidBody.velocityX *= -b.rigidBody.restitution;
        } else {

            if (ay < by) {
                a.y -= overlapY / 2;
                b.y += overlapY / 2;
            } else {
                a.y += overlapY / 2;
                b.y -= overlapY / 2;
            }

            // Add bounce capability
            if (a.rigidBody) a.rigidBody.velocityY *= -a.rigidBody.restitution;
            if (b.rigidBody) b.rigidBody.velocityY *= -b.rigidBody.restitution;
        }
    }

    // Update the collision as a loop (detect all the collisions separately and resolve them)
    updateSceneObjects(objects: GameObject[], dt: number) {
        // Integration of the motion
        for (const obj of objects) {
            this.updateObjectMotion(obj, dt);
        }
        // Resolve collisions
        for (let i = 0; i < objects.length; i++) {
            for (let idx = i + 1; idx < objects.length; idx++) {
                const a = objects[i];
                const b = objects[idx];

                if (Collision.intersects(a, b)) {
                    this.resolveCollision(a, b);
                }
            }

        }
    }

    updateObjectMotion(object: GameObject, dt: number) {
        // Only works for dynamic objects
        if (!object.rigidBody) {
            return;
        }

        const rigidBody = object.rigidBody;
        if (rigidBody.useGravity) {
            this.applyGravity(rigidBody, dt);
        }

        // Update positions
        object.x += rigidBody.velocityX * dt;
        object.y += rigidBody.velocityY * dt;

        const width = object.width;
        const height = object.height;

        // World boundary collisions
        // Left end
        if (object.x < 0) {
            object.x = 0;
            rigidBody.velocityX *= -rigidBody.restitution;
        }

        // Right End
        if (object.x + width > this.worldWidth) {
            object.x = this.worldWidth - width;
            rigidBody.velocityX *= -rigidBody.restitution;
        }

        // Top end
        if (object.y < 0) {
            object.y = 0;
            rigidBody.velocityY *= -rigidBody.restitution;
        }

        // Bottom collision
        if (object.y + height > this.worldHeight) {
            object.y = this.worldHeight - height;
            rigidBody.velocityY *= -rigidBody.restitution;

            // Apply friction
            rigidBody.velocityX *= rigidBody.friction;

            // Stop very small velocities
            if (Math.abs(rigidBody.velocityY) < 0.1) rigidBody.velocityY = 0;
            if (Math.abs(rigidBody.velocityX) < 0.1) rigidBody.velocityX = 0;
        }
    }
}