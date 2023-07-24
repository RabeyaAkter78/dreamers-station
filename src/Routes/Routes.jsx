import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error/Error';
import Main from '../Layouts/Main';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';


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
        ],


    },

    {
        path: '*',
        element: <Error></Error>
    }

]);

export default router;