import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiousSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('access-token');
        console.log('request stoped by intersceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiousSecure;