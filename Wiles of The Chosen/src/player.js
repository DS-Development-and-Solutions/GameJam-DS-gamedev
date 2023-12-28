import k from "./kaboom.js";

const player = () => {
    
    const SPEED = 300
    const JUMP_FORCE = 500
k.loadSprite("player", "./src/Assests/maincharacter/player.png",{
	sliceX: 768,
	sliceY: 128,
	anims: {
		idle: { from: 300, to: 300 },
		run: { from: 301, to: 302 }
	}});
k.scene('animations', Animations)

k.start('animations')
    // add something to screen


const player_entity = k.add([
    sprite("player-idle"),
    pos(20, 400),
    area(),
    body(),
]);

function spawnOrb(p) {
    add([
        rect(12, 48),
        area(),
        pos(p),
        origin("center"),
        color(127, 127, 255),
        outline(4),
        move(UP, BULLET_SPEED),
        cleanup(),
        // strings here means a tag
        "bullet",
    ])
}

k.onKeyPress("space", () => {
    if (player_entity.isGrounded()) {
        player_entity.jump(JUMP_FORCE);
    }
});

k.onKeyDown("right", () => {
    player_entity.move(SPEED, 0)
});

k.onKeyDown("left", () => {
    player_entity.move(-SPEED, 0)
});


};

export default player;