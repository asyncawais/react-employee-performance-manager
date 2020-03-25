import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../data/auth/actions'

import './style.css'

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, password) => dispatch(signIn(email, password))
    };
};

class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit = (event) => {

        event.preventDefault()
        
        this.props.signIn(this.state.email, this.state.password)
    }

    render() {
        return (
            <div className="sign-in-form">
                <div className="sign-in-form__logo"></div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input className="sign-in-form__field" type="email" placeholder="Email address." onChange={ event => this.setState(byPropKey('email', event.target.value)) } />
                    </div>
                    <div>
                        <input className="sign-in-form__field" type="password" placeholder="Password." onChange={ event => this.setState(byPropKey('password', event.target.value)) } />
                    </div>
                    <div>
                        <input className="sign-in-form__button btn btn--black" type="submit" value="Sign In" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SignInForm)