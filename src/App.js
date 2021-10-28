import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
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
    </div>
  );
}

export default App;
