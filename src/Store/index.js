import React, {Component} from "react";
import Product from './Product'
import DialogPicture from './DialogPicture';
import fire from '../Fire.js'


class Store extends Component {
    constructor(props){
        super(props);
        // console.log(props.dogs);

        this.state = {
            dogs: [],
            dialogIsVisible: false,
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
            items.push(dog);
            this.setState({dogs: items});


        });

    }


    childImageClicked(src, bool) {
            bool = !bool;
            this.setState({dialogIsVisible: bool})
            console.log(bool);
        this.setState({dialog: src})
    }





render(){




        let user = fire.auth().currentUser;


        return (
            <div>
                <div><h1>Welcome to the store, {user.email}</h1></div>
                <div className = "store-container">
                    {this.state.dogs.map((dog) =>
                        <Product
                            key={dog.id}
                            name={dog.info.name}
                            image={dog.info.image}
                            stock={dog.info.stock}
                            price={dog.info.price}
                            onImageClicked = {() => this.childImageClicked(dog.info.image, this.state.dialogIsVisible)}
                        />
                    )}

                    <DialogPicture image = {this.state.dialog} isVisible = {'true'}/>
                </div>
            </div>

        );




}


}
export default Store;
