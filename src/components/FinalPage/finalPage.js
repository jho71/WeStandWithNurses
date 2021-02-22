
import React from 'react';
import './finalPage.css';
import Certificate from './../../images/43ee1b3b-4e4a-49be-8120-7ca44be3746c[4617].JPG'
const FinalPage = (props) => {
    return (
    
    <div className="finalPage">
        <h1>You have completed the quiz!</h1>
            <p>Your score is: {props.score} of {Object.keys(props.questions).length}</p>
            <p>Click cerificate to download!</p>
            <a href={Certificate} download>
            <img src={Certificate} id="certificate" alt="certificate"></img></a>
    </div>
    );
}

export default FinalPage;
