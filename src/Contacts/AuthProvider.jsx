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