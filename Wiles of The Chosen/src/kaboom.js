import kaboom from "kaboom";
import "./App.css";

export const k = kaboom({
canvas: document.querySelector(".gameloop"),
scale: window.devicePixelRatio+0.3,


});



export default k;