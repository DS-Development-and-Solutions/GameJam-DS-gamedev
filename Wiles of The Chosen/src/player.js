import k from "./kaboom.js";

const player = () => {
    const SPEED = 300;
    const JUMP_FORCE = 500;

    k.loadSprite("player", "./src/Assests/maincharacter/player.png");

    const player_entity = k.add([
        k.sprite("player"),
        k.pos(20, 400),
        k.area(),
        k.body(),

    ]);

    function spawnOrb(p) {
        const orb = k.add([
            k.rect(6, 6),
            k.pos(player_entity.pos),
            k.origin("center"),
            k.color(1, 1, 1),
            k.body(),
            "orb",
        ]);

        const direction = vec2(1, 0);
        orb.move(direction.scale(200));

        // Destroy the orb after 1 second
        k.wait(1, () => {
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
