import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiousSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate()
    // interceptors for request
    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })
    //interceptors for response
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log(status);
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiousSecure;