import { useState } from 'react';
import './App.css';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h2>Quiz App</h2>
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
