import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer/Footer';


export const QuizContext = createContext([])

const Root = () => {

    const quizTopic = useLoaderData().data
    //console.log(quizTopic);
    return (
        <QuizContext.Provider value={quizTopic}>
            <Header />
            <Outlet />
            <Footer />
        </QuizContext.Provider>
    );
};

export default Root;