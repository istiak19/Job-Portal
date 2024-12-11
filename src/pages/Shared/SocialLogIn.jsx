import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogIn = () => {
    const { signInGoogle } = useContext(AuthContext)

    const handleGoogle = () => {
        signInGoogle()
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="m-5 flex justify-center flex-col">
            <div className="divider">OR</div>
            <button className="btn" onClick={handleGoogle}>Google</button>
        </div>
    );
};

export default SocialLogIn;