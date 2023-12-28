import k from "./kaboom.js";
const level = () =>{
    
    const GRAVITY_AMOUNT = 1000
    k.setGravity(GRAVITY_AMOUNT);

add([
    k.rect(width(), 48),
    k.pos(0, height() - 48),
    k.outline(4),
    k.area(),
    k.body({ isStatic: true }),
    k.color(127, 200, 255),
]);


}

export default level;