export class RigidBody {
    mass: number;
    velocityX: number = 0;
    velocityY: number = 0;
    restitution: number = 0.2;
    friction: number = 0.5;
    useGravity: boolean = true;
    gravityScale: number = 1;

    constructor(mass: number = 1) {
        this.mass = mass;
    }
}