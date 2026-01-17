import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase/firebase.config";
import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";



const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);

     const register= (email,password) =>{
        return createUserWithEmailAndPassword (auth, email,
            password)
     }

     useEffect(() =>{

        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () =>unsubscribe();
     },[])

     const logout = () =>{
        return auth.signOut();
     }
     
    
     const login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, -password);
     }
     
    const value = {
        user,
        register,
        logout,
        login
    };

    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;






























// import React, { Children, createContext, useContext } from 'react';
// import { auth } from '../components/firebase/firebase.config';

// const AuthConText = createContext();
// export const UseAuth = () => useContext(AuthConText);

// const AuthProvider = ({Children}) => {

//     const register = (email, password) =>{
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
//     const value ={
//         register
//     }

//     return (
//        <AuthConText.Provider value={value}>
//         {Children}

//        </AuthConText.Provider>
//     );
// };

// export default AuthProvider;