import React , { useContext, useState }from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import "../App.css";

function Quiz() {

    const [currQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const { score, setScore, gameState ,setGameState } = useContext(QuizContext);
    
    const chooseOption = (option) => {
        setOptionChosen(option);
      };

    const nextQuestion = () => {
        if (Questions[currQuestion].asnwer == optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].asnwer == optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    };

    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="questions">
                <button onClick={() => {chooseOption("optionA");}}> {Questions[currQuestion].optionA} </button>
                <button onClick={() => {chooseOption("optionB");}}> {Questions[currQuestion].optionB} </button>
                <button onClick={() => {chooseOption("optionC");}}> {Questions[currQuestion].optionC} </button>
                <button onClick={() => {chooseOption("optionD");}}> {Questions[currQuestion].optionD} </button>
            </div>

            {currQuestion == Questions.length - 1 ?
                (
                    <button onClick={finishQuiz} id="nextQuestion">
                        Finish Quiz
                    </button>
                ) : (
                    <button onClick={nextQuestion} id="nextQuestion"> Next Question </button>
                )}
        </div>
    );
}

export default Quiz;
