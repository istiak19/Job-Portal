import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const location = useLocation()
    console.log(location)
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return children
    }

    return (
        <div>
            <Navigate to='/sign-in' state={location?.pathname}></Navigate>
        </div>
    );
};

export default PrivateRouter;