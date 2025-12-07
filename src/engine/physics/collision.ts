import type { GameObject } from "../entities/gameObject";

export class Collision {
    static intersects(a: GameObject, b: GameObject) {
        return !(
            a.x + a.width < b.x ||
            a.x > b.x + b.width ||
            a.y + a.height < b.y ||
            a.y > b.y + b.height
        );
    }
}