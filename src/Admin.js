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
        let dogRef = fire.database().ref('dogs').orderByKey().limitToLast(20)

        let items = [];

        //whenever information is added, grab snapshot
        dogRef.on("child_added", snapshot => {
            let dog = {info: snapshot.val(), id: snapshot.key}
            console.log(dog);
            items.push(dog);
            this.setState({dogs: items});
        });

    }


    addDog(e) {
        e.preventDefault();

        fire.database().ref('dogs').push({name: this.nameInput.value, stock: this.stockInput.value, price: this.priceInput.value, image: this.state.dogImages[8]});
        this.nameInput.value = "";
        this.stockInput.value ="";
        this.priceInput.value="";
    }


    // console.log(this.state.dogImages.chocolate);

    render(){



        // conditionals before rendering!



            return (
                <form onSubmit={this.addDog.bind(this)}>
                    <h1>Create New Dog Post</h1>
                    <label>
                        Name:
                        <input type = "text" ref = {(el)=>this.nameInput = el} required minLength={1}/>
                    </label>

                    <label>
                        Stock:
                        <input type = "text" ref = {(el)=>this.stockInput = el} required minLength={1}/>
                    </label>

                    <label>
                        Price:
                        <input type = "text" ref = {(el)=>this.priceInput = el} required minLength={1}/>
                    </label>

                    <input type = "hidden" ref ={(el)=>this.imageInput = el}/>
                    <input type = "submit"/>
                    <ul>
                        {
                            this.state.dogs.map(dog => <li key = {dog.id}>Name: {dog.info.name} Stock: {dog.info.stock} Price: {dog.info.price} Image-String: {dog.info.image}</li>)
                        }
                    </ul>
                </form>
            )
        }

}

export default Admin;
