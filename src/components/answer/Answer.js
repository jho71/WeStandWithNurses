
import React from 'react';
import './Answer.css';

const Answer = (props) => {
    
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li
            className=
            {
                props.correctAnswer === qAnswer ?
                'correct' : 
                props.clickedAnswer === qAnswer ? 
                'incorrect' : ''
            }
            onClick={() => props.checkAnswer(qAnswer)}
            key={qAnswer}>
                {props.answer[qAnswer]}
            </li>
        ));
        const showCorrect = () => {
            if(props.clickedAnswer === 0){
                return ''
            }
            else if(props.clickedAnswer === props.correctAnswer)
                return 'Correct Answer!'
            else {
                return 'Incorrect Answer!'
            }
        }   
        return (
            <>
                <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                    {answers}
                </ul>
                <div className="AnswerStatus">
                    {
                       showCorrect()
                       
                    }
                </div>
            </>
        );
}

export default Answer;