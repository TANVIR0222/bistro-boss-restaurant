import { useContext } from "react";
import { AuthContex } from "../AuthProbider/AuthProbider";

const useAuth = () => {
    const auth = useContext(AuthContex);
    return auth;
};

export default useAuth;