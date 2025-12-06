import type { Renderer } from "../rendering/renderer";
import type { Scene } from "../scene/scene";

export class Game {
    private lastTime = 0;
    private running = false;
    public scene: Scene | null = null;
    public renderer: Renderer;
    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }
}