import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSucure = axios.create({
    baseURL:"http://localhost:5000"
});

const useAxios = () => {
    const naviget = useNavigate();
    const {logout} = useAuth();
    // jwt -> 4  -> interceptors -> all info axios web interceptors 
    axiosSucure.interceptors.request.use(function (config){
        // jwt -> 5
        const token = localStorage.getItem('access-token')
        // jwt -> 6
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    //   interceptors 401 and 403 status 
    axiosSucure.interceptors.response.use( (response) => {
        return response;
    } , async (error) =>{
        // jwt -> 7
        const status = error.response.status;

        // jwt -7
        // for 401 or 403 logOut the user and move the user to login 
        if(status === 401 || status === 403){
            await logout();
            naviget('/login')
        }

        return Promise.reject(error);
    })

    return axiosSucure;
};

export default useAxios;