import React, {Component} from "react";
import chocolate from "./img/chocolate.jpg";
import dalmation from "./img/dalmation.jpg";
import corgi from "./img/corgi.jpg";
import black from "./img/black.JPG";
import greyhound from "./img/greyhound.jpeg";
import mastiff from "./img/mastiff.jpeg";
import pit from "./img/pit-bull.jpg";
import germanpup from "./img/puppy-german.jpg";
import wolf from "./img/wolf.jpg";
import fire from './Fire';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }



    }
    componentWillMount(){
        //occurs before render

        //if path/reference is not created beforehand in Firebase, it will create it now.
        let messageRef = fire.database().ref('messages').orderByKey().limitToLast(20)

        let items = [];

        //whenever information is added, grab snapshot
        messageRef.on("child_added", snapshot => {
            let message = {text: snapshot.val(), id: snapshot.key }
            items.push(message);
            this.setState({messages: items});
        });

    }

    addMessage(e) {
        e.preventDefault();
        fire.database().ref('messages').push(this.inputEl.value);
        this.inputEl.value = "";
    }
        render(){

        // conditionals before rendering!
            //if blah blah
            return (
                <form onSubmit={this.addMessage.bind(this)}>
                    <input type = "text" ref = { (el)=>this.inputEl = el}/>
                    <input type = "submit"/>
                    <ul>
                        {
                            this.state.messages.map(message => <li key = {message.id}>{message.text}</li>)
                        }
                    </ul>
                </form>
            )
        }

}

export default Admin;
