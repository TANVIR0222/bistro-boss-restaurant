
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";


export const AuthContex = createContext(null);
const auth = getAuth(app)


const AuthProbider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // sing in user
    const singIn = (emai, pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(  emai , pass)
    }
    // creater user 
    const createuser = (email , pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email ,pass);
    }

    //sign Out
    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }
    // current user check
    useEffect(() => {
        const unsubcribe =  onAuthStateChanged ( auth , currentuser =>{
            setUser(currentuser);
            setLoading(false);
            console.log('current user ', currentuser);
        });

        return () =>{
            return unsubcribe();
        }

    }, []);

    const authInfo = {
        user,
        loading,
        singIn,
        createuser,
        logout,


    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProbider;