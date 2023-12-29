import level from "./level.js";
import collisions from "./collisions.js";
import pause from "./pause.js";
function Startgame (){
    console.log("startgame");
    scene("game", () => {
        const game = add([
        ]);
    console.log(game);
    level(game);
    collisions(game);
    pause(game);
    });
    go("game");
}


export default Startgame;