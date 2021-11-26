import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

function Quiz() {

    const { score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    };

    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("OptionA")}> {Questions[currQuestion].optionA} </button>
                <button onClick={() => setOptionChosen("OptionB")}> {Questions[currQuestion].optionB} </button>
                <button onClick={() => setOptionChosen("OptionC")}> {Questions[currQuestion].optionC} </button>
                <button onClick={() => setOptionChosen("OptionD")}> {Questions[currQuestion].optionD} </button>
            </div>

            {currQuestion == Questions.length - 1 ?
                (
                    <button onClick={finishQuiz}>
                        Finish Quiz
                    </button>
                ) : (
                    <button onClick={nextQuestion}> Next Question </button>
                )}
        </div>
    );
}

export default Quiz
