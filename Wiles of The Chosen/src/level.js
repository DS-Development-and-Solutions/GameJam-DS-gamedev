import k from "./kaboom.js";

const level = () =>{
    const GRAVITY_AMOUNT = 1000;
    const FLOOR_HEIGHT = 48;    
    

    k.setGravity(GRAVITY_AMOUNT);
    k.loadSprite("bgImage", "./src/Assets/testbackground.png");



    const bgImage = add([
        sprite("bgImage"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        anchor('center'),
        // Allow the background to be scaled
        scale(1),
        // Keep the background position fixed even when the camera moves
        fixed()
      ]);
      // Scale the background to cover the screen
      bgImage.scaleTo(2.7);

add([
    k.rect(width(), 48),
    k.pos(0, height() - 48),
    k.outline(4),
    k.area(),
    k.body({ isStatic: true }),
    k.color(127, 200, 255),
    k.color(127, 200, 255),
]);

}

export default level;