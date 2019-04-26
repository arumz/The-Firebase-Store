import React, {Component} from 'react';
import SignUpView from './SignUpView';
import {withRouter} from 'react-router-dom'
import fire from '../Fire';

class SignUpContainer extends Component {

    handleSignUp = async event => {
        event.preventDefault();
        const {email, password, passwordConf} = event.target.elements;

        try {
            console.log(password.value);
            console.log(passwordConf.value);
            if (password.value !== passwordConf.value) {

                throw(new Error("passwords do not match"));
            }
            try {
                const user  = await fire.auth().createUserWithEmailAndPassword(email.value,password.value)
                this.props.history.push("/");

            }
            catch(error) {
                alert(error);
            }
        }
        catch (error) {
            console.log(error.name);
            console.log(error.message);
            alert(error);
        }

    }


    render() {
        return (
            <SignUpView onSubmit={this.handleSignUp}/>
        )
    }

}

export default withRouter(SignUpContainer)