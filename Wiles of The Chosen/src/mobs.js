import k from "./kaboom.js";

function mobs() {
const MOBSPEED = 30;
const FLOOR_HEIGHT= 48;

k.loadSprite("badmob_1", ".src/Assets/badmob.png");
k.loadSprite("goodmob_1", ".src/Assets/goodmob.png")



function spawnMobs (){
    add([
        k.sprite("badmob_1"),
        area(),
        pos(width(), height() - FLOOR_HEIGHT),
        anchor("botleft"),
        move(LEFT, MOBSPEED),
        offscreen({ destroy: true }),
        "badmob_1",
    ])

    k.wait(rand(0.5, 1.5), spawnMobs)
}

spawnMobs();

}


export default mobs;