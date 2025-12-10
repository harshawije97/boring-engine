import type { GameObject } from "../entities/gameObject";
import type { Physics } from "../physics/physics";
import type { Renderer } from "../rendering/renderer";

export class Scene {
    private objects: GameObject[] = [];
    physics: Physics;

    constructor(physics: Physics) {
        this.physics = physics
    }

    add(object: GameObject) {
        this.objects.push(object);
    }
    setPhysics(physics: Physics) {
        this.physics = physics;
    }
    remove(object: GameObject) {
        this.objects = this.objects.filter(o => o !== object);
    }

    update(dt: number) {
        // Physics update handles motion integration and collision resolution
        this.physics.updateSceneObjects(this.objects, dt);

        // Call custom update logic for each object
        for (const object of this.objects) {
            if (object.active) {
                object.update(dt);
            }
        }
    }

    render(renderer: Renderer) {
        for (const object of this.objects) {
            if (object.active) {
                object.render(renderer);
            }
        }
    }
}