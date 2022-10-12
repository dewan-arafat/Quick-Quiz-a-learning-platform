import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';


const QuizDetails = () => {

    const quizData = useLoaderData().data.questions
    return (
        <div className=' my-4 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4'>
            <p className='text-center text-purple-500 text-4xl font-semibold pb-5' >Quiz for {useLoaderData().data.name}</p>
            <div className=' '>
                {quizData.map(quiz => (
                    <QuizQuestion
                        key={quiz.id}
                        quiz={quiz}
                    //handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default QuizDetails;