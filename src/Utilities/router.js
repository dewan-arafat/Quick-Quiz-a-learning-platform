

import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import QuizDetails from "../Component/QuizDetails/QuizDetails";
import Root from "../Component/Root/Root";
import Statistics from "../Component/Statistics/Statistics";
import Blog from "../Component/Blog/Blog";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,

        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),



        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/statistics', element: <Statistics /> },
            { path: '/blog', element: <Blog /> },
            {
                path: '/quiz/:quizID',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
                },
                element: <QuizDetails />
            },

        ],
    },
])
export default router;