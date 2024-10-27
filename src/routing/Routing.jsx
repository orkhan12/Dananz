import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import About from '../pages/About/About'
import Root from '../components/Root/Root'
import  Home from '../components/Home/Home'
import Services from '../pages/Services/Services'
import Register from '../pages/Register/Register'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'Home',
                element: <Home/>
            },
            {
                path: '/About',
                element: <About/>
            },
            {
                path: '/Services',
                element: <Services/>
            },
            {
                path: '/Register',
                element: <Register/>
            }

        ]
    }
])
export default router;