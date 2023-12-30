import k from "./kaboom.js";
import Startgame from "./gameloop.js";
import pause from "./pause.js";
import pause from "./pause.js";

let currentDay = 1;
let currentDay = 1;

const collisions = (game) => {
  const SPEED = 200;
  const JUMP_FORCE = 300;
  const ORB_SPEED = 600;
  const MOBSPEED = 30;
  const TOTEM_PRICE = 5;
  let MOB1_HP = 100;
  const FLOOR_HEIGHT = 48;
  let PLAYER_HP = 100;
  let ORB_DMG = 8;
    let ORB_COUNT = 0;
    let KILL_COUNT = 0;
    let IS_MUSIC_ON = false;

    k.loadSprite("player", "./src/Assets/maincharacter/idle.png",{
        sliceX:6,
        sliceY:1,
        anims: {
            idle:{
                from: 0,
                to: 5,
            }
        }
    });
    k.loadSprite("orb", "./src/Assets/orb.png",{
        sliceX:5,
        sliceY:5,
        anims:{
            
            shoot:{
                from:0, 
                to:6
            },
            explode:{
                from:7, 
                to:24
            },
        }
    });
    k.loadSprite("badmob_1", "./src/Assets/badmob_2.png",{
        sliceX: 23,
        sliceY: 5,
        anims: {
            run: {
                from:40,
                to: 45,
            }
        },
    });
    k.loadSprite("add_turrent", "./src/Assets/add_turrent.png");
    k.loadSprite("goodmob_1", "./src/Assets/goodmob.png");
    k.loadSound("bgm", "./src/Assets/bgm.wav");
    k.loadSprite("totem", "./src/Assets/totem.png",  {
        sliceX: 2,
        sliceY: 3,
        anims: {
            active: {
                from: 0,
                to: 3,
            }
        },
    });

    function music ()
    {
        IS_MUSIC_ON = true;
        play("bgm", {
        volume: 0.3,
        loop: true,

    
    } );
}   

    let gameOver = false;
    game.paused = false;


    const clock = k.add([
        k.text("08 AM"),
        k.area(),
        k.anchor("center"),
        k.pos(100, 20),
        {
          hour: 8,
          isAM: true,
          totalTime: 120,
          currentTime: 0,
          update() {
            if (!game.paused) {
              this.currentTime += k.dt();
              if (this.currentTime >= this.totalTime) {
                this.currentTime = 0;
                this.hour = 8;
                this.isAM = !this.isAM;
              } else {
                const percentage = this.currentTime / this.totalTime;
                this.hour = Math.floor(8 + percentage * 24);
                if (this.hour >= 12) {
                  this.isAM = false;
                }
                if (this.hour >= 24) {
                  this.hour -= 24;
                  this.isAM = true;
                }
              }
              this.text = `${this.hour.toString().padStart(2, "0")}:00 ${
                this.isAM ? "AM" : "PM"
              }`;
    
              if (this.hour === 2 && this.isAM && !game.paused) {
                // gameOver = true;
                endDay();
              }
            }
          }
        },
      ]);
        
      const days = k.add([
        k.text(`Day ${currentDay}`),
        k.area(),
        k.anchor("center"),
        k.pos(70, 60),
      ]);

       


     const player_entity = game.add([
        k.sprite("player"),
        k.pos(20, 400),
        k.area(),
        k.body(),
        k.health(PLAYER_HP),
        
        
    ]);
    
    function createTotem_1(){
        const totem = game.add([
            {active: true},
            k.sprite("totem"),
            k.area(),
            k.scale(1),
            k.pos(1295, 450),
            k.anchor("botright"),
            "totem",
        ]);
return totem
        }
    
        function createTotem_2(){
            const totem = game.add([
                {active: true},
                k.sprite("totem"),
                k.area(),
                k.scale(1),
                k.pos(895, 450),
                k.anchor("botright"),
                "totem",
            ]);
    return totem
            }

            function createTotem_3(){
                const totem = game.add([
                    {active: true},
                    k.sprite("totem"),
                    k.area(),
                    k.scale(1),
                    k.pos(490, 450),
                    k.anchor("botright"),
                    "totem",
                ]);
        return totem
                }
         
       
const add_turrent1 = game.add([
    k.sprite("add_turrent"),
    k.area(),
    k.scale(0.5),
    k.pos(463, 449),
    k.anchor("botright"),
    "add_turrent1",
]);

onClick("add_turrent1", () =>{
    if(KILL_COUNT >=TOTEM_PRICE){
    const totem1 = createTotem_3();
    totem1_shoot(totem1);
    destroy(add_turrent1);
    KILL_COUNT-=TOTEM_PRICE;
    }else {
        game.add([
            k.text(`You need ${TOTEM_PRICE-KILL_COUNT} more karma points to buy this totem`),
            k.pos(366, 300),
            k.lifespan(3),
        ]);
    }

});

const add_turrent2 = game.add([
    k.sprite("add_turrent"),
    k.area(),
    k.scale(0.5),
    k.pos(866, 449),
    k.anchor("botright"),
    "add_turrent2",
]);

onClick("add_turrent2", () =>{
    if(KILL_COUNT >=TOTEM_PRICE){
    const totem2 = createTotem_2();
    totem1_shoot(totem2);
    destroy(add_turrent2);
    KILL_COUNT-=TOTEM_PRICE;
    }else {
        game.add([
            k.text(`You need ${TOTEM_PRICE-KILL_COUNT} more karma points to buy this totem`),
            k.pos(366, 300),
            k.lifespan(3),
        ]);
    }
});

const add_turrent3 = game.add([
    k.sprite("add_turrent"),
    k.area(),
    k.scale(0.5),
    k.pos(1265, 449),
    k.anchor("botright"),
    "add_turrent3",
]);

onClick("add_turrent3", () =>{
    if(KILL_COUNT >=TOTEM_PRICE){
    const totem3 = createTotem_1();
    totem1_shoot(totem3);
    destroy(add_turrent3);
    KILL_COUNT-=TOTEM_PRICE;
    }else {
        game.add([
            k.text(`You need ${TOTEM_PRICE-KILL_COUNT} more karma points to buy this totem`),
            k.pos(366, 300),
            k.lifespan(3),
        ]);
    }

});


   let winningText = null;

  function endDay() {
    game.paused = true;

    if (!winningText) {
      winningText = game.add([
        k.text(""),
        k.area(),
        k.anchor("center"),
        k.pos(800, 300),
      ]);
    }
    
    winningText.text = `You survived day ${currentDay}! Press Enter to start the next day`;
  }

  k.onKeyPress("enter", () => {
    gameOver = true;
    if (winningText) {
      winningText.hidden = true;
      currentDay += 1;
      Startgame();
    //   days.text = `Day ${currentDay}`;
    }
  });
  

   
   const losingText = game.add([
    k.text(""),
    k.area(),
    k.anchor("center"),
    k.pos(800, 300),
  ]);

  function endGame(losingText) {
    losingText.text = "The town is destroyed! Press enter to restart";
    gameOver = true;
    k.onKeyPress("enter", () => {
        if(gameOver) {
            currentDay = 1;
            Startgame();
         } else {
            return null;
         }
    })}


    function spawnOrb(pos) {
        
        const orb = game.add([
            k.sprite("orb" ,{animSpeed: 100}),
            k.area(),
           
            k.move(RIGHT, ORB_SPEED),
            k.offscreen({ destroy: true }),
            k.scale(0.09),
            k.pos(pos.x+75,pos.y+93),
            k.anchor("botright"),
            "orb",
        ]);

        k.wait(1.8, () => {
            
            k.destroy(orb);
            
            
        });
       orb.on("destroy", () => {
        const deadorb = game.add([sprite("orb"), k.area(), k.scale(0.25), k.pos(orb.pos.x,orb.pos.y-20)]);
            deadorb.play("explode",{speed: 45});
            setTimeout(() => {
                k.destroy(deadorb);
            }, 1000);
       
       }
       )
      


        // Destroy the orb after 1 second
       
    }

    setInterval(() => {
  
        player_entity.play("idle");
    }, 1000);

    k.onKeyPress("space", () => {
        if (player_entity.isGrounded()) {
            player_entity.jump(JUMP_FORCE);
        }
    });

    k.onKeyDown(() => {
        if(!IS_MUSIC_ON) music();
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
            k.area({scale: 0.44}),
            k.pos(1500, 708),
            k.anchor("botleft"),
            k.move(LEFT, MOBSPEED),
            k.health(MOB1_HP),
            k.scale(2),
           
            
            "badmob_1",
        ]) 

        setInterval(() => {
  
            mob1.play("run");
        }, 500);
        k.wait(rand(3, 5), spawnMobs)

    
       
       


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
            KILL_COUNT++;
            
              
        });
        return mob1;
    }
    
    spawnMobs();
 
    function totem1_shoot(totem){
        
            const orb_totem = game.add([
                k.sprite("orb"),
                k.area(),
               
                k.move((rand(600,1000),rand(390,420)), ORB_SPEED),
   
                k.scale(0.09),
                k.pos(totem.pos),
                k.anchor("botright"),
                "orb",
            ]);

            totem.play("active");

            setTimeout(() => {k.wait(k.rand(300, 3000), totem1_shoot(totem))}, 400); // 5000 milliseconds = 5 seconds

            orb_totem.on("destroy", () => {
                const deadorb = game.add([sprite("orb"), k.area(), k.scale(0.25), k.pos(orb_totem.pos.x,orb_totem.pos.y-20)]);
                    deadorb.play("explode",{speed: 45});
                    setTimeout(() => {
                        k.destroy(deadorb);
                    }, 1000);
               
               }
               )
            
        }
          
        
    

    game.add([
        k.text(`HP: ${player_entity.hp()}`),
        k.pos(90,200),
        k.anchor("center"),
        k.z(50),
        ({ update() { this.text = `HP: ${player_entity.hp()}` }}),
    ])

    game.add([
        k.text(`Karma Points: ${KILL_COUNT}`),
        k.pos(170,100),
        k.anchor("center"),
        k.z(50),
        ({ update() { this.text = `Karma Points: ${KILL_COUNT}` }}),
    ])

  player_entity.onCollide("badmob_1", () => {
    player_entity.hurt(10);
  });

  player_entity.on("death", () => {
    k.destroy(player_entity);
    k.shake(120);
    endGame(losingText);
  });

    onCollide("orb", "badmob_1", (b, e) => {
        k.shake(0.1);
		e.hurt(ORB_DMG);
        destroy(b)

		
	})

    // k.onKeyPress("enter", () => (gameOver ? Startgame() : null));

    


  

};


export default collisions;
