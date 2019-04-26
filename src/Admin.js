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
            dogs: [],
            dogImages: [
                chocolate, dalmation, corgi, black, greyhound, mastiff, pit, germanpup, wolf
            ]
        }



    }
    componentWillMount(){
        //occurs before render

        //if path/reference is not created beforehand in Firebase, it will create it now.
        let messageRef = fire.database().ref('dogs').orderByKey().limitToLast(20)

        let items = [];

        //whenever information is added, grab snapshot
        messageRef.on("child_added", snapshot => {
            let dog = {name: snapshot.val(), id: snapshot.key }
            items.push(dog);
            this.setState({dogs: items});
        });

    }


    addDog(e) {
        e.preventDefault();

        fire.database().ref('dogs').push(this.nameInput.value);
        this.nameInput.value = "";

    }


    // console.log(this.state.dogImages.chocolate);

    render(){

        let style = {
            display: 'none',
        }

        // conditionals before rendering!
            //if blah blah
            return (
                <form onSubmit={this.addDog.bind(this)}>
                    <input type = "text" ref = { (el)=>this.nameInput = el}/>
                    <input type = "submit"/>
                    <ul>
                        {
                            this.state.dogs.map(dog => <li key = {dog.id}>{dog.name}</li>)
                        }
                    </ul>
                </form>
            )
        }

}

export default Admin;
