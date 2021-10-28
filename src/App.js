import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';

function App() {

  const olympiadList = ["Maths Olympiad", "English Olympiad","Grads Olympiad", "Finance Olympiad"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex(i => (i + 1) % olympiadList.length);

    const id = setInterval(tick, 1500);
    return () => clearInterval(id);
  });

  return (
    <div className="App">
     <NavBar/>
     <h1>Feeling Prepared?<br/>Register for <span className="shufflingText">{olympiadList[index]}</span></h1>
     <Marquee>
       <p>First thing now</p><br/>
       <p>Second thing then</p><br/>
       <p>Third thing next</p>
     </Marquee>
     <div className="gridContainer">
       <div className="grid_card"></div>
       <div className="grid_card"></div>
       <div className="grid_card"></div>
       <div className="grid_card"></div>
       <div className="grid_5"></div>
       <div className="grid_6"></div>
     </div>
    </div>
  );
}

export default App;
