import './styles/App.css';
import GameBoard from './GameBoard';
import Header from './Header'
import { useState } from 'react';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} highScore={highScore}/>
      <GameBoard 
      score={score} 
      setScore={setScore}
      highScore={highScore}
      setHighScore={setHighScore}/>
    </div>
  );
}

export default App;
