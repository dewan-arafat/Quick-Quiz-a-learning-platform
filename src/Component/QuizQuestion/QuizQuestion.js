import React, { useState } from 'react';
import './QuizQuestion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const QuizQuestion = ({ quiz }) => {
    //const [answer, setAnswer] = useState('');
    //console.log(answer);
    const HandleChange = (e) => {
        const selectedAnswer = e.target.value;
        if (selectedAnswer === quiz.correctAnswer) {
            alert('Yahooo!!!! Your answer is Correct');
        } else {
            alert('Your answer is Wrong');
        }

    }
    const HandleAnswer = () => {
        alert(`Correct answer is : ${quiz.correctAnswer}`)
    }


    return (

        <div className="my-4 bg-gray-200 p-4 rounded shadow-lg  ">
            <div className='flex items-center justify-between'>
                <span className="text-gray-700 text-xl pb-2 font-medium">Q. {quiz.question}</span>
                <button onClick={HandleAnswer}> <FontAwesomeIcon icon={faEye} />
                </button>

            </div>

            <div className="mt-2">
                <label className="inline-flex items-center">
                    <input onClick={HandleChange} type="radio" className="form-radio" name="accountType" value={quiz.options[0]} />
                    <span className="ml-2">{quiz.options[0]}</span>
                </label><br />
                <label className="inline-flex items-center">
                    <input onChange={HandleChange} type="radio" className="form-radio" name="accountType" value={quiz.options[1]} />
                    <span className="ml-2">{quiz.options[1]}</span>
                </label><br />
                <label className="inline-flex items-center">
                    <input onChange={HandleChange} type="radio" class="form-radio" name="accountType" value={quiz.options[2]} />
                    <span className="ml-2">{quiz.options[2]}</span>
                </label><br />
                <label className="inline-flex items-center">
                    <input onChange={HandleChange} type="radio" className="form-radio" name="accountType" value={quiz.options[3]} />
                    <span className="ml-2">{quiz.options[3]}</span>
                </label>
            </div>
        </div>

    );
};

export default QuizQuestion;