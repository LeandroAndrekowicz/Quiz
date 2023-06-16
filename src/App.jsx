import './App.css'
import Welcome from './components/Welcome'
import { useContext, useEffect } from 'react'
import Question from './components/Question'
import { QuizContext } from './context/quiz'
import GameOver from './components/GameOver'


function App() {  
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=>{
    dispatch({type: "REORDER_QUESTIOS"})
  }, [])

  return (
    <div className='App'>
      <h1>Conhecimentos Gerais</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
