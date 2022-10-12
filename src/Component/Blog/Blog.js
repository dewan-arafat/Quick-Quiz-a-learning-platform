import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 pt-24 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>

                <div className="space-y-4 my-5">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">How does contextAPI work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">What is useRef hook in react?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">What is the purpose of react router?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;