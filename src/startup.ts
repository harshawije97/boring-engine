import { Game } from "./engine/core/game";
import { Input } from "./engine/core/input";
import { PlayerObject } from "./engine/entities/playerObject";
import { Rectangle } from "./engine/entities/rectangle";
import { Physics } from "./engine/physics/physics";
import { Renderer } from "./engine/rendering/renderer";
import { Scene } from "./engine/scene/scene";

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
canvas.width = 800;
canvas.height = 450;

const renderer = new Renderer(canvas);
const game = new Game(renderer);
const input = new Input();
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

const box = new Rectangle(60, 60, "#30eeffdc");
box.x = canvas.width - 100;
box.y = 350;

// Player object
const player = new PlayerObject(input, 200, 20, 60, "#ff0000", "@Player");
player.x = 100;
player.y = 350;


scene.add(rectangle);
scene.add(rectangle2);
scene.add(box);
scene.add(player);

game.start(scene);