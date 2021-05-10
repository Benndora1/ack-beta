import React,{useState,useEffect} from "react";
import firebase from "firebase/app";
import "firebase/auth"; 

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
      const [currentUser, setCurrentUser] = useState(null);
      const [pending, setPending] = useState(true);
      
      function login (email,password){
          return firebase.auth.signInWithEmailAndPassword(email,password)
      }
      useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          setCurrentUser(user);
          setPending(false);
        });
        //cleanup
        return () => unsubscribe();

      }, []);


      if(pending){
        return <>Please wait...</>
      }
      return (
        <AuthContext.Provider
          value={{
            currentUser
          }}
        >
          {!pending && children}
        </AuthContext.Provider>
      );
    };