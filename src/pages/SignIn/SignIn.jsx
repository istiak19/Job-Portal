import Lottie from "lottie-react";
import { useContext, useState } from "react";
import signInAnimation from '../../assets/Login.json'
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogIn from "../Shared/SocialLogIn";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const handleSignIn = e => {
        e.preventDefault()
        setError('')
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password')
        const regex = /^(?=.*[A-Z]).{6,}$/;
        if (!(regex.test(password))) {
            setError('Password is invalid. It must be at least 6 characters long and include at least one uppercase letter.')
        }
        console.log(email, password)
        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
                e.target.reset()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={signInAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center mt-4
                 font-bold">SignIn now!</h1>
                    <form className="card-body" onSubmit={handleSignIn}>
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
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    <p className="text-red-500">{error}</p>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default SignIn;