import level from "./level.js";
import collisions from "./collisions.js";
function Startgame (){
    console.log("startgame");
    level();
    collisions();
}


export default Startgame;