
import Startgame from "./gameloop.js";
import "./App.css";


const Kaboom = ({}) => {
  
  Startgame();

};



const App = () => {

  return (
    <div className="game-wrapper">
       <Kaboom />
     
    </div>
  );
};

export default App;