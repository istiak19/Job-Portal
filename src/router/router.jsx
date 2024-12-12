import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import JobDetails from '../pages/JobDetails';
import PrivateRouter from './PrivateRouter';
import JobApply from '../pages/JobApply/JobApply';
import MyApplication from '../pages/MyApplication/MyApplication';
import AddJob from '../pages/AddJob/AddJob';
import MyJobPost from '../pages/MyJobPost/MyJobPost';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <h2>Page not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>
            },
            {
                path: '/apply/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
                element: <PrivateRouter><JobApply></JobApply></PrivateRouter>
            },
            {
                path: '/myApplication',
                element: <PrivateRouter><MyApplication></MyApplication></PrivateRouter>
            },
            {
                path: '/my-job-post',
                element: <PrivateRouter><MyJobPost></MyJobPost></PrivateRouter>
            },
            {
                path: '/add-job',
                element: <PrivateRouter> <AddJob></AddJob></PrivateRouter>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            }
        ]
    },
])

export default router;