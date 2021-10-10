import { useEffect, useState } from "react";
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";
initializeFirebase();
const useFirebase = () => {
    const[user,setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    //user password login
    const emailPasswordSignIn = (email,password) => {
      return  signInWithEmailAndPassword(auth, email, password);
    }
    // register with email and password
    const emailPasswordRegister = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
        // .then((result)=>{
        //     console.log(result.user);
        // }).catch(err=>{
        //     console.log(err);
        // });
    }
    //sign in with popup
    const googleSignIn = () => {
       return signInWithPopup(auth,googleProvider);
    }
    // use useEffect for monitoring user change data 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
              // ...
            } else {
              console.log('user is sign out');
            }
          })
    },[user]);
    
    //handle logout
    const logout = () => {
        signOut(auth)
        .then(()=>{
            setUser({});
            console.log('Logout Success');
        }).catch(err=>{
            console.log(err);
        })
    }

    return {
        user,
        emailPasswordSignIn,
        emailPasswordRegister,
        googleSignIn,
        logout
    }

};

export default useFirebase;