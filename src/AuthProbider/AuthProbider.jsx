import { createContext, useState } from "react";

export const AuthContex = createContext(null);

const AuthProbider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const authInfo = {
        user,
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProbider;