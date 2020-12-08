import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// ...rest is anything elase that parent pass as a props beside user and component
const PublicRoutes = ({
    user,
    component: Component,
    ...rest
}) => {
    return <Route {...rest} component={(props) =>(
        rest.restriced ?
        (
            user ?
            <Redirect to='/dashboard'/>
            :
            <Component {...props} user={user}/>
        )
        : 
        <Component {...props} user={user}/>
    )}/>
};

export default PublicRoutes;