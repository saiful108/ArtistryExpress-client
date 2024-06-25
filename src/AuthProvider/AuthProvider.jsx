import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext=createContext(null)
 const AuthProvider = ({children}) => {
const [user,setUser]=useState({});
const [loading,setLoading]=useState(true);

const creareUser=(email,password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
}

const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
    // auth info
    const authInfo={user,loading,creareUser,signInUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;