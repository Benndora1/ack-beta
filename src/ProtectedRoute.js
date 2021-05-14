import React, { useContext} from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import {AuthContext} from './Auth'

const ProtectedRoute=({component:RouteComponent, ...rest})=>{
    const { currentUser }=useContext(AuthContext);

    return(
        
        <Route
            {...rest}
            render={routeProps =>
              !!currentUser ? (
                //   children
                <RouteComponent {...routeProps}/>
            ) :( 
                <Redirect to={'/login'}/>
            )
            } 
        />

    );
};
export default withRouter(ProtectedRoute);