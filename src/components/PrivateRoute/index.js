import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import SignIn from '../../containers/SignIn'
import Header from '../../components/Header'

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
    };
};

const PrivateRoute = ({ component: Component, ...otherProps }) => (
    <Route {...otherProps} render={props => (
        otherProps.authenticated === true ? ( <div><Header /><Component {...props} /></div>) : (<SignIn />)
    )} />
)

// withRouter needed (when using connect) to make component update on location change
export default withRouter(connect(mapStateToProps, null)(PrivateRoute))