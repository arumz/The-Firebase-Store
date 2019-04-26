import React, {Component} from "react";
import fire from './Fire'

class Home extends Component {
    render(){
        let user = fire.auth().currentUser;
        return(
            <div>
                <h1>Home to {user.email}</h1>
            </div>
        )
    }
}

export default Home;
