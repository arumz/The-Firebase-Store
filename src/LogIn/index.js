import React, {Component} from 'react';
import LogInView from './LogInView';
import {withRouter} from 'react-router-dom';
import fire from '../Fire';

class LogInContainer extends Component {

    handleLogIn = async event => {
       event.preventDefault();
       const {email, password} = event.target.elements;

       try {
           const user = await fire.auth().signInWithEmailAndPassword(email.value, password.value);
           this.props.history.push('/store');
       } catch(error) {
           alert(error);
       }
    }
    render(){
        return (
            <LogInView onSubmit={this.handleLogIn}/>
        )
    }
}

export default withRouter(LogInContainer);