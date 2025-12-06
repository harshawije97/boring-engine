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

    // Game loop initialization: the core of the engine
    private loop(now: number) {
        if (!this.running) return;

        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        // Update the frame
        this.scene?.update(dt);

        // Render the frame after clearing
        this.renderer.clear();
        this.scene?.render(this.renderer);

        requestAnimationFrame(this.loop.bind(this));
    }

    start(initialScene: Scene) {
        this.scene = initialScene;
        this.running = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.loop.bind(this));
    }

    stop() {
        this.running = false;
    }
}