import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";



export const AuthContext=createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
 const AuthProvider = ({children}) => {
const [user,setUser]=useState({});
const [loading,setLoading]=useState(true);


// google sign in
const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
// github sign in
const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}


const creareUser=(email,password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
}

const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}



const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}


// update profile
const updateUserProfile=(obj)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,obj)
}

// observer
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser,'observer');
        setLoading(false)
        setUser(currentUser)
       
    })
return ()=>{
    unsubscribe();
}
},[])
    // auth info
    const authInfo={user,loading,setLoading,creareUser,signInUser,logOut,updateUserProfile,googleSignIn,githubSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;