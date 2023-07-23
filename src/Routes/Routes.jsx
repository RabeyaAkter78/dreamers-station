import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error/Error';
import Main from '../Layouts/Main';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
            
        ],


    },

    {
        path: '*',
        element: <Error></Error>
    }

]);

export default router;