import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import useAxiosPublic from "../useHooks/useAxiosPublic";

export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProbider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // jwt -> 1
  const axiosPublic = useAxiosPublic();

  //google login
  const provider = new GoogleAuthProvider();

  // sing in user
  const singIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // creater user
  const createuser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //sign Out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update user
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // google SingIn

  const googleSingin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // current user check
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);

      if (currentuser) {
        //unik user defined 
        const userInfo = { email: currentuser.email };
        // get token storage client
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);

          }
        });
      } else {
        // remove token
        localStorage.removeItem("access-token");
        setLoading(false);

      }

    });

    return () => {
      return unsubcribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    singIn,
    createuser,
    googleSingin,
    logout,
    updateUserProfile,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProbider;
