import './styles/App.css';
import GameBoard from './GameBoard';
import Header from './Header'
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    score: 0,
    highscore: 0,
    cards: [{
      imgTitle: "",
      imgUrl: ""
    }]
  })

  return (
    <div className="App">
      <Header/>
      <GameBoard/>
    </div>
  );
}

export default App;
