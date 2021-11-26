import React from 'react'
import { useState } from 'react';
import { Questions } from '../Helpers/QuestionBank';

function Quiz() {
    const [currQuestion, setCurrentQuestion] = useState(1);
    return (
        <div className = "Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button> {Questions[currQuestion].optionA} </button>
                <button> {Questions[currQuestion].optionB} </button>
                <button> {Questions[currQuestion].optionC} </button>
                <button> {Questions[currQuestion].optionD} </button>
            </div>
        </div>
    );
}

export default Quiz
