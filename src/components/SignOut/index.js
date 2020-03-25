import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../data/auth/actions'

import './style.css'

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    };
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
    };
};

const SignOut = (props) => 
    (props.authenticated ? 
        <button className="sign-out-button" onClick={ () => props.signOut() }>Sign out.</button> : 
        (null) 
    )

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)