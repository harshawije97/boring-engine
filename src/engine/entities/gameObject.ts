import type { Renderer } from "../rendering/renderer";

export abstract class GameObject {
    public x: number = 0;
    public y: number = 0;
    public rotation: number = 0;
    public scaleX: number = 1;
    public scaleY: number = 1;
    public active: boolean = true;


    update(dt: number): void { }
    abstract render(renderer: Renderer): void;
}