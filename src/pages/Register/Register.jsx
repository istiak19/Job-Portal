import Lottie from "lottie-react";
import registerAnimation from '../../assets/Register.json'
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogIn from "../Shared/SocialLogIn";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const { signUpUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [error, setError] = useState(null)
    const handleRegister = e => {
        e.preventDefault();
        setError('')
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password')
        const regex = /^(?=.*[A-Z]).{6,}$/;
        if (!(regex.test(password))) {
            setError('Password is invalid. It must be at least 6 characters long and include at least one uppercase letter.')
        }
        console.log(email, password)
        signUpUser(email, password)
            .then((result) => {
                console.log(result.user)
                e.target.reset()
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center mt-4
                     font-bold">Register now!</h1>
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-red-500">{error}</p>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default Register;