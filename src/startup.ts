import { Game } from "./engine/core/game";
import { Input } from "./engine/core/input";
import { PlayerObject } from "./engine/entities/playerObject";
import { RectangleObject } from "./engine/entities/rectangleObject";
import { Physics } from "./engine/physics/physics";
import { RigidBody } from "./engine/physics/rigidBody";
import { Renderer } from "./engine/rendering/renderer";
import { Scene } from "./engine/scene/scene";

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
canvas.width = 800;
canvas.height = 450;

const renderer = new Renderer(canvas);
const game = new Game(renderer);
const physics = new Physics(canvas.width, canvas.height, 100);

const input = new Input();
const scene = new Scene(physics);

// Boxes with gravity
const greenBox = new RectangleObject(60, 60, "#30ff6483");
greenBox.x = 260;
greenBox.y = 100;

greenBox.rigidBody = new RigidBody(2);
greenBox.rigidBody.useGravity = true;
greenBox.rigidBody.velocityY = 20;

const blueBox = new RectangleObject(60, 60, "#4c30ffbb");
blueBox.x = 220;
blueBox.y = 300;

blueBox.rigidBody = new RigidBody();
blueBox.rigidBody.useGravity = true;
blueBox.rigidBody.velocityY = 60;


const box = new RectangleObject(60, 60, "#30eeffdc");
box.x = canvas.width - 100;
box.y = canvas.height;

// Player object
const player = new PlayerObject(
    20,
    60,
    input,
    200,
    "#ff0000",
    "@Player"
);

player.x = 100;
player.y = canvas.height;

scene.add(blueBox);
scene.add(greenBox);

game.start(scene);