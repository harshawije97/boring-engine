import { Game } from "./engine/core/game";
import { Rectangle } from "./engine/entities/rectangle";
import { Physics } from "./engine/physics/physics";
import { Renderer } from "./engine/rendering/renderer";
import { Scene } from "./engine/scene/scene";

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
canvas.width = 450;
canvas.height = 450;

const renderer = new Renderer(canvas);
const game = new Game(renderer);
const scene = new Scene();
const physics = new Physics(canvas.width, canvas.height);
scene.setPhysics(physics);

// Rectangle one
const rectangle = new Rectangle(80, 80, "#155dfc");
rectangle.x = 100;
rectangle.y = 100;
rectangle.velocityX = 70;
rectangle.velocityY = 180;

// Rectangle two
const rectangle2 = new Rectangle(80, 80, "#ffd230");
rectangle2.x = 300;
rectangle2.y = 100;
rectangle2.velocityY = -140;
rectangle2.velocityX = 100;

// Rectangle three
const rectangle3 = new Rectangle(80, 80, "#ff0000");
rectangle3.x = 100;
rectangle3.y = 300;
rectangle3.velocityY = 70;
rectangle3.velocityX = 180;


scene.add(rectangle);
scene.add(rectangle2);
scene.add(rectangle3);

game.start(scene);