import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../useHooks/useAuth";
import useAdmin from "../useHooks/useAdmin";

const AdminRouts = (children) => {

    const [user , loading] = useAuth();
    const [isAdmin , isAdminLoading] = useAdmin();

    const locatin = useLocation();
    
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to={'/login'} state={{form:locatin}} replace ></Navigate>
};

export default AdminRouts;