import React, { useContext,useEffect,useState } from 'react';
import {Route,Redirect} from 'react-router-dom';
import {AuthContext} from './Auth'

export default function ProtectedRoute(props){
    const [status, setStatus] = useState(false);
    const {getSession}=useContext(AuthContext);

    useEffect(()=>{
        getSession()
        .then(session=>{
            console.log('session:',session);
            setStatus(true);
        })
    },[]);

    return(
        <div>
            {status?(<Redirect to="/"></Redirect>):
            <Route exact path="/login">
                {props.children}
            </Route>}
        </div>

    );
}