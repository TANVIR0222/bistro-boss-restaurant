import axios from "axios";

const axiosSucure = axios.create({
    baseURL:"http://localhost:5000"
});

const useAxios = () => {
    return axiosSucure;
};

export default useAxios;