import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './index';

const PrivateRoute = ({ component: Component, ...rest}) =>{
  // props means the components passed down to the private route component
  return <Route
    {...rest}
    render={props=>
      isAuthenticated()? (
        <Component {...props} />
      ) : (
          <Redirect
            to = {{
              pathname: "/signin",
              state: {from: props.location}
            }}
          />
      )
    }
   />
}

export default PrivateRoute;
