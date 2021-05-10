import React from "react"
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import {UserPool} from './UserPool'

export const AuthContext = React.createContext()

export const AuthProvider = (props) => {
    const getSession = async()=>{
        await new Promise((resolve, reject)=>{
            const user = UserPool.getCurrentUser();
            if(user){
                user.getSession((err,session)=>{
                    if(err){
                        reject();
                    }else{
                        resolve(session);
                    }
                });
            }else{
                reject();
            }
        });
    }

    const authenticate = async (email,password)=>{
        await new Promise((resolve,reject)=>{
            const user = new CognitoUser({ Username:email, Pool:UserPool });
            const authDetails = new AuthenticationDetails({ Username: email, Password: password});
            user.authenticateUser(authDetails,{
                onSuccess:data =>{
                    console.log('on success:', data);
                    resolve(data);
                },
                onFailure:err => {
                    console.error('on failure: ',err);
                    reject(err);
                },
                newPasswordRequired:data =>{
                    console.log('newPasswordRequired: ', data);
                    resolve(data);
                }
            });
        });
    };

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     const [pending, setPending] = useState(true);
  
//     useEffect(() => {
//       firebaseConfig.auth().onAuthStateChanged((user) => {
//         setCurrentUser(user)
//         setPending(false)
//       });
//     }, []);
  
//     if(pending){
//       return <>Loading...</>
//     }
  
    return (
      <AuthContext.Provider
        value={{
          authenticate,
          getSession
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };