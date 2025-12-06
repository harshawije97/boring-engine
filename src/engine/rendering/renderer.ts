export class Renderer {
    readonly canvas: HTMLCanvasElement
    readonly context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('Unable to get 2D context');
        }
        this.context = context;
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    fillRect(x: number, y: number, width: number, height: number, color: string = "#c70036", text?: string) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);

        if (text) {
            this.context.fillText(text, x, y);
        }
    }
}