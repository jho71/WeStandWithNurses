
import React from 'react';
import './finalPage.css';
import Certificate from './../../images/sideBySide.jpg'
const FinalPage = (props) => {
    return (
    
    <div className="finalPage">
        <h1>You have completed the quiz!</h1>
            <p>Your score is: {props.score} of {Object.keys(props.questions).length}</p>
            <p>Here is your Cerificate!</p>
            <img src={Certificate} alt="certificate"></img>
    </div>
    );
}

export default FinalPage;
