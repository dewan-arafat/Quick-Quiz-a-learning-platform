import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizData = useLoaderData()
    console.log(quizData.data.questions)
    return (
        <div>
            Quiz Box
        </div>
    );
};

export default QuizDetails;