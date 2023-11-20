import { GoogleAuthProvider } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiousPublic from "../../hooks/useAxiousPublic";

const SocialLogin = () => {
    const axiosPublic = useAxiousPublic()
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();
    const { signInWithGoogle } = useAuth()
    const handleGoogleSigIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                Swal.fire({
                    title: "your are successfull login",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="text-center my-2">
            <button onClick={handleGoogleSigIn} className="btn">
                <FcGoogle></FcGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;