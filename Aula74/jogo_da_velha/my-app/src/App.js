import './App.css';
import { Board } from './components/Board';
import { Game } from './components/Game';
import { Square } from './components/Square';

function App() {
  return (
    <div className="App">
      <h1>Jogo da Idosa</h1>
      {/* <Board />
      <Square /> */}
      <Game />
    </div>
  );
}

export default App;
