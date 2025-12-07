import type { RigidBody } from "../physics/rigidBody";
import type { Renderer } from "../rendering/renderer";

export abstract class GameObject {
    // Object core properties
    id: string = "";
    reference: string = "";
    zIndex: number = 0;
    width: number = 0;
    height: number = 0;

    public x: number = 0;
    public y: number = 0;

    public rotation: number = 0;

    public scaleX: number = 1;
    public scaleY: number = 1;

    velocityX: number = 0;
    velocityY: number = 0;

    public active: boolean = true;

    // Physics*****
    // Add gravity
    useGravity: boolean = false;
    gravityScale: number = 1;

    // Add rigidbody (optional)
    rigidBody?: RigidBody;

    update(_dt: number): void { }
    abstract render(renderer: Renderer): void;
}