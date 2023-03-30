import './styles/App.css';
import GameBoard from './Components/GameBoard';
import Header from './Components/Header'
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lastResult, setLastResult] = useState(0);

  return (
    <div className="content">
      <Header
        score={score}
        highScore={highScore}
        lastResult={lastResult}
      />
      <GameBoard
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        setLastResult={setLastResult}
      />
      <Footer />
    </div>
  );
}

export default App;
