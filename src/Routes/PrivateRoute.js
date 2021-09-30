import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = restOfProps.auth.isAuthenticated;
 console.log("rest prop", restOfProps.auth.isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ProtectedRoute);
