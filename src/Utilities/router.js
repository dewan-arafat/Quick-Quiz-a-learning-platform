

import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Root from "../Component/Root/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,


        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
        ],
    },
])
export default router;