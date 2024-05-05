import { useContext } from "react";
import { AuthContex } from "../AuthProbider/AuthProbider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {
    const {user , loading} = useContext(AuthContex);
    const locatin = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{form:locatin}} replace ></Navigate>
};

export default PrivetRouter;