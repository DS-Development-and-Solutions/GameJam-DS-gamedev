import k from "./kaboom.js";

const player = () => {
    const SPEED = 200;
    const JUMP_FORCE = 300;
    const ORB_SPEED = 500;

    k.loadSprite("player", "./src/Assets/maincharacter/player.png");
    k.loadSprite("orb", "./src/Assets/orb.png");

    const player_entity = k.add([
        k.sprite("player"),
        k.pos(20, 400),
        k.area(),
        k.body(),

    ]);

    function spawnOrb(pos) {
        const orb = k.add([
            k.sprite("orb"),
            k.area(),
            k.move(RIGHT, ORB_SPEED),
            k.offscreen({ destroy: true }),
            k.scale(0.4),
            k.pos(pos.x+35,pos.y+55),
            k.anchor("botright"),
            "orb",
        ]);

     

        // Destroy the orb after 1 second
        k.wait(1.1, () => {
            k.destroy(orb);
        });
    }

    k.onKeyPress("space", () => {
        if (player_entity.isGrounded()) {
            player_entity.jump(JUMP_FORCE);
        }
    });

    k.onKeyDown("right", () => {
        player_entity.move(SPEED, 0);
    });

    k.onKeyDown("left", () => {
        player_entity.move(-SPEED, 0);
    });

    k.onKeyPress("z", () => {
        // Press 'z' to shoot an orb
        spawnOrb(player_entity.pos);
    });
};

export default player;
