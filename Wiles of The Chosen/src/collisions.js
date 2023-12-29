import k from "./kaboom.js";

const collisions = (game) => {
    const SPEED = 200;
    const JUMP_FORCE = 300;
    const ORB_SPEED = 600;
    const MOBSPEED = 30;
    let MOB1_HP = 100;
    const FLOOR_HEIGHT= 48;
    let PLAYER_HP = 100;
    let ORB_DMG = 8;
    let ORB_COUNT = 0;
    let KILL_COUNT = 0;

    k.loadSprite("player", "./src/Assets/maincharacter/player.png");
    k.loadSprite("orb", "./src/Assets/orb.png");
    k.loadSprite("badmob_1", "./src/Assets/badmob.png");
    k.loadSprite("goodmob_1", "./src/Assets/goodmob.png")

     const player_entity = game.add([
        k.sprite("player"),
        k.pos(20, 400),
        k.area(),
        k.body(),
        k.health(PLAYER_HP),
       
        
    ]);

    function spawnOrb(pos) {
        
        const orb = game.add([
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
        k.wait(1.8, () => {
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

    let canShoot = true;
    k.onKeyDown("z", async function shootOrb(){ 
        if (canShoot) {
            spawnOrb(player_entity.pos);
            ORB_COUNT++;
            console.log(ORB_COUNT);
    
            canShoot = false;
            setTimeout(() => {
                canShoot = true;
            }, 400); // 5000 milliseconds = 5 seconds
        }
    });
    k.onKeyDown("ז", () => {
        if (canShoot) {
            spawnOrb(player_entity.pos);
 
            canShoot = false;
            setTimeout(() => {
                canShoot = true;
            }, 400); // 5000 milliseconds = 5 seconds
        }
    });

    let canpressShoot = true;
    k.onKeyPress("z", () => {
        
        if (canpressShoot) {
            spawnOrb(player_entity.pos);
 
            canpressShoot = false;
            setTimeout(() => {
                canpressShoot = true;
            }, 500); // 5000 milliseconds = 5 seconds
        }
            
        });
           

    

    function spawnMobs (){
         const mob1 = game.add([
            {speed: MOBSPEED},
            k.sprite("badmob_1"),
            k.area(),
            
            k.pos(1500, 674),
            k.anchor("botleft"),
            k.move(LEFT, MOBSPEED),
            k.health(MOB1_HP),
            
            "badmob_1",
        ]) 

        
        k.wait(rand(3, 10), spawnMobs)
        

        mob1.on("death", () => {
            k.shake(5); 

            const goodmob1 = game.add([
                k.sprite("goodmob_1"),
                k.area(),
                k.pos(mob1.pos.x, mob1.pos.y),
                k.anchor("botleft"),
                k.lifespan(4, { fade: 1 }),
                "goodmob_1",

            ]);
    
            k.destroy(mob1)
            
              
        });
        
    }
    
    spawnMobs();
    

    game.add([
        k.text(`HP: ${player_entity.hp()}`),
        k.pos(100,200),
        k.anchor("center"),
        k.z(50),
        ({ update() { this.text = `HP: ${player_entity.hp()}` }}),
    ])


    player_entity.onCollide("badmob_1", () => {
        player_entity.hurt(10)
    });
    
    player_entity.on("death", () => {
        k.destroy(player_entity);
        k.shake(120);   
    });

    onCollide("orb", "badmob_1", (b, e) => {
		e.hurt(ORB_DMG);
        destroy(b)
		
	})


    };
  


export default collisions;
