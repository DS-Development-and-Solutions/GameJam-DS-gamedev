import kaboom from "kaboom";
export const k = kaboom({
canvas: document.getElementsByClassName("gameloop"),
scale: window.devicePixelRatio+0.3,

});



export default k;