import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error/Error';
import Main from '../Layouts/Main';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
import Admission from '../Component/Admission/Admission';
import College from '../Component/College/College';
import MyCollege from '../Component/MyCollege/MyCollege';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/admission',
                element:<Admission></Admission>
            },
            {
                path:'/colleges',
                element:<College></College>
            },
            {
                path:'/myCollege',
                element:<MyCollege></MyCollege>
            }
        ],


    },

    {
        path: '*',
        element: <Error></Error>
    }

]);

export default router;