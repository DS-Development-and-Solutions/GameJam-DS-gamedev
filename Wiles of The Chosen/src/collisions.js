import k from "./kaboom.js";

const collisions = () => {
    const SPEED = 200;
    const JUMP_FORCE = 300;
    const ORB_SPEED = 500;
    const MOBSPEED = 30;
    const FLOOR_HEIGHT= 48;
    let PLAYER_HP = 100;

    k.loadSprite("player", "./src/Assets/maincharacter/player.png");
    k.loadSprite("orb", "./src/Assets/orb.png");
    k.loadSprite("badmob_1", "./src/Assets/badmob.png");
    k.loadSprite("goodmob_1", "./src/Assets/goodmob.png")

     const player_entity = k.add([
        k.sprite("player"),
        k.pos(20, 400),
        k.area(),
        k.body(),
        k.health(PLAYER_HP),
        
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
    
        k.wait(rand(0.5, 5), spawnMobs)
    }
    
    spawnMobs();
    
    ui = k.add([k.layer("ui")]);

    ui.on("draw", () => {
        drawText({
          text: "HP: " + player_entity.hp(),
          size: 14,
          font: "sink",
          pos: vec2(8, 24),
        });
      });

    player_entity.onCollide("badmob_1", () => {
        player_entity.hurt(10)

    });
    
    player_entity.on("death", () => {
        k.destroy(player_entity);
        k.shake(120);
        
    });

    };
  


export default collisions;
