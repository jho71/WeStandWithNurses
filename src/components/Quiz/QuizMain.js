import React, {Component} from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import FinalPage from '../FinalPage/finalPage';
import './QuizMain.css';

class Quiz extends Component {

    // initiating the local state
    state = {
        questions: {
            1: 'What regulations does Ontario currently have in place to protect against COVID-19?',
            2: 'According to the Government of Canada website, what is one way you can minimize your risk of contracting COVID-19?',
            3: 'Are you familiar with the term “nursing burnout”? What comes to mind when you hear this?',
            4: 'Due to rising COVID-19 cases, hospitals and health facilities are continually being overwhelmed. Which of the following places may be at risk for having their nurses experience “burnout syndrome?” (select all that apply)',
            5: 'How are the rising COVID-19 cases affecting nurses working in hospitals and LTC facilities? (select all that apply)',
            6: 'How might the pandemic be affecting the (mental?) health of nurses working in COVID-19 facilities? (select all that apply)',
            7: 'According to the 2020 study, “Mental Disorder Symptoms Among Nurses in Canada”, nurses screen positive for which of the following mental health disorders? (select all that apply)',
            8: 'Which of the following is the top source of stress for working nurses? (Hint: COVID-19 ridden units are overwhelmed with patients)',
            9: 'How does following COVID-19 government regulations make a difference?',
            10: 'How can I support the mental health of nurses working in COVID-19 units? (select all that apply)',
            11: 'In following government regulations, you reduce your risk of developing COVID-19, which would  contribute to growing case numbers, and hospital overwhelment. Nurses appreciate this! Which of the following policies can you adhere to? (select all that apply)',
            12: 'How can I show my support (COVID-19 working) nurses’ mental health? '
            },
        answers: {
            1: {
                1: 'N-95 mask mandates for citizens',
                2: 'Social distancing of 5 ft in public spaces',
                3: 'Limited indoor public gatherings'
            },
            2: {
                1: 'Wash your hands frequently',
                2: 'Get your annual flu shot',
                3: 'Stay at home or away from others if you are feeling sick',
                4: 'All of the above'
            },
            3: {
                1: 'Nurses have a high risk of getting burned by corrosive chemicals',
                2: 'Nurses who are tired after working double shifts',
                3: 'A state of physiologic and mental exhaustion experienced by nurses, due to stressors like arduous work hours and overwhelmed units'
            },
            4: {
                1: 'Intensive Care Unit (ICU)',
                2: 'Emergency Department (ED)',
                3: 'Nursing homes/Long term care facilities',
                4: 'All of the above'
            },
            5: {
                1: 'Overcrowding and not enough hospital beds',
                2: 'Reduced personal protective equipment (PPE)',
                3: 'Increased workload and added safety precautions',
                4: 'All of the above'
            },
            6: {
                1: 'Due to the increased risk and fear of contracting illness',
                2: 'Feelings of loneliness due to hotel isolation and time away from family',
                3: 'Stress from working with deathly-ill patients',
                4: 'Limited time to rest and recover due to long work hours',
                5: 'All of the above'
            },
            7: {
                1: 'Major Depressive Disorder',
                2: 'Generalized Anxiety Disorder',
                3: 'Panic Disorder',
                4: 'All of the above'
            },
            8: {
                1: 'Understaffed units',
                2: 'Exposure to physical assault',
                3: 'Changing protocols in hospitals'
            },
            9: {
                1: 'Reduces the number of hospital patient admissions',
                2: 'Helps control COVID-19  symptoms',
                3: 'Makes the government satisfied'
            },
            10: {
                1: 'Follow government regulations to stay safe, and out of the hospital',
                2: 'Trust healthcare professionals’ expert opinions revolving around COVID-19',
                3: 'Exercise kindness and support the nurses in my life',
                4: 'All of the above'
            },
            11: {
                1: 'Follow stay-at-home orders to reduce the risk of COVID-19 contraction',
                2: 'Social distance when I need to leave my house',
                3: 'Wear a non-procedural mask when in public',
                4: 'All of the above'
            },
            12: {
                1: 'Sign this certificate!',
                2: 'Show it off on Instagram! (using the hashtag #WeSupportNursesMentalHealth*)',
                3: 'Support our growing initiative to address and support nurses and their mental health during this pandemic!',
                4: 'All of the above'
            }
        },
        correctAnswers: {
            1: '3',
            2: '4',
            3: '3',
            4: '4',
            5: '4',
            6: '5',
            7: '4',
            8: '1',
            9: '1',
            10: '4',
            11: '4',
            12: '4',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
         this.setState({

                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
                
          }); 
            if(answer === correctAnswers[step]){
                this.setState({
                score: score + 1
            }); 
  
        } 
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){

        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;

        return( 
        <div>  
            <div className="Content">
                
                 <h1 className = "title">Supporting Nurses During Covid-19 Quiz</h1>
                {step <= Object.keys(questions).length ? 
                    (<>
                        <Question
                            question={questions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                            
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(questions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <FinalPage
                        
                        score = {score}
                        questions = {questions}
                        />
                    )
                }
            </div>

        </div>
        );
    }
}

export default Quiz;