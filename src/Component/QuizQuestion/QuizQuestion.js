import React from 'react';
import './QuizQuestion.css'


const QuizQuestion = ({ quiz }) => {
    return (

        <div className="my-4 bg-gray-200 p-4 rounded shadow-lg  ">
            <span className="text-gray-700 text-xl pb-2 font-medium">Q. {quiz.question}</span>
            <div className="mt-2">
                <label className="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value={quiz.options[0]} />
                    <span className="ml-2">{quiz.options[0]}</span>
                </label><br />
                <label className="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value={quiz.options[1]} />
                    <span className="ml-2">{quiz.options[1]}</span>
                </label><br />
                <label className="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value={quiz.options[2]} />
                    <span className="ml-2">{quiz.options[2]}</span>
                </label><br />
                <label className="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value={quiz.options[3]} />
                    <span className="ml-2">{quiz.options[3]}</span>
                </label>


            </div>
        </div>

    );
};

export default QuizQuestion;