import type { GameObject } from "../entities/gameObject";
import { Rectangle } from "../entities/rectangle";
import type { Physics } from "../physics/physics";
import type { Renderer } from "../rendering/renderer";

export class Scene {
    private objects: GameObject[] = [];
    physics: Physics | null = null;

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
        for (const object of this.objects) {
            if (object.active) {
                object.update(dt);
            }

            if (this.physics && object instanceof Rectangle) {
                this.physics.updateRectangleMotion(object);
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