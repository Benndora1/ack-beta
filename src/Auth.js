import React,{useState,useEffect} from "react";
import {auth} from './config';

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    const logout = ()=>{
      return auth.signOut().then(()=>{
        setCurrentUser(null);
      });
    };

    useEffect(() => {
      const unsubscribe=auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        console.log(user)
        setPending(false)
      });
        // cleanup
        return () => unsubscribe()

      }, []);


    if(pending){
        return <>Please wait...</>
      }

    return (
        <AuthContext.Provider
          value={{
            currentUser,
            logout
          }}
        >
          {!pending && children}
        </AuthContext.Provider>
      );
    };