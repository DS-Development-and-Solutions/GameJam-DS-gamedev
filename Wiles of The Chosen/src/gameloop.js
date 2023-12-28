import player from "./player.js";
import level from "./level.js";
import mobs from "./mobs.js";
function Startgame (){
    console.log("startgame");
    level();
    player();
    mobs();
}


export default Startgame;