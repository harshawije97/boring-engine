export class RigidBody {
    mass: number;
    velocityX: number = 0;
    velocityY: number = 0;
    restitution: number = 0.2;
    friction: number = 0.5;
    useGravity: boolean = true;
    gravityScale: number = 1;

    // Angular dynamics
    angularVelocity: number = 0;
    angularDamping: number; // Resistance
    torque: number = 0;
    momentOfInertia: number = 0;
    momentOfInertiaSet: boolean = false;

    constructor(mass: number = 1, damping: number) {
        this.mass = mass;
        this.angularDamping = damping;
    }

    // Method to calculate moment of inertia based on shape
    setMomentOfInertia(width: number, height: number) {
        this.momentOfInertia = (1 / 12) * this.mass * (width * width + height * height);
        this.momentOfInertiaSet = true;
    }

    // Apply torque to the rigid body
    applyTorque(torqueAmount: number) {
        this.torque += torqueAmount;
    }

    clearTorque() {
        this.torque = 0;
    }
}