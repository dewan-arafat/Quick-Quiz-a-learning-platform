import React, { useContext } from 'react';
import QuizItem from '../QuizItem/QuizItem';
import { QuizContext } from '../Root/Root';

const Home = () => {
    const quizTopic = useContext(QuizContext)
    console.log(quizTopic);

    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>

            <div className="relative flex flex-col lg:mb-5 py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">

                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                It matters
                                <br className="hidden md:block" />
                                how you{' '}
                                <span className="inline-block text-purple-400">
                                    learn
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Assessment, instruction, and practice that motivate every student to mastery.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            >
                                Sign Up
                            </a>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                        src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
            </div>

            <div>
                <h1 className='text-4xl font-bold mb-5 text-purple-500'> Quiz Category</h1>
            </div>

            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                {quizTopic.map(quiz => (
                    <QuizItem
                        key={quiz.id}
                        quiz={quiz}
                    //handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;