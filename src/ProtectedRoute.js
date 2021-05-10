import React, { useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {AuthContext} from './Auth'

export default function ProtectedRoute(children, ...rest){
    const { currentUser }=useContext(AuthContext);

    return(
        
        <Route
        {...rest}
        render={()=> currentUser ? children : <Redirect to='/login'/>}>
            
        </Route>

    );
}