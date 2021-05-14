import React,{useState,useEffect} from "react"; 
import app, {auth} from './config';

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
      const [currentUser, setCurrentUser] = useState(null);
      const [pending, setPending] = useState(true);
      
      useEffect(() => {
       auth.onAuthStateChanged((user) => {
        console.log(user)  
        setCurrentUser(user)
        setPending(false)
    
       });
        // cleanup
        // return unsubscribe;
    
      }, []);


      if(pending){
        return <>Please wait...</>
      }

      return (
        <AuthContext.Provider
          value={{
            currentUser,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
    };