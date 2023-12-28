
import { useEffect, useRef } from "react";
import Startgame from "./gameloop.js";
import "./App.css";


const Kaboom = ({run}) => {
  const isRunning = useRef(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isRunning.current || !canvasRef || !canvasRef.current) {
      return;
    }
    isRunning.current = true;
    run();
  }, [run]);
  console.log("game running...");
  return <canvas ref={canvasRef} className="gameloop"></canvas>;
};



const App = () => {

  return (
    <div>
      <h1 className = "ui-title">Wiles of The Chosen betatest</h1>
      <Kaboom run={Startgame}/>
    </div>
  );
};

export default App;