import React, {Component} from "react";
import Product from './Product'
import DialogPicture from './DialogPicture';
import fire from '../Fire.js'


class Store extends Component {
    constructor(props){
        super(props);
        // console.log(props.dogs);

        this.state = {
            dialog: null,
            display: 'none'
        }


}
childImageClicked(src) {
    this.setState({dialog: src})
    this.setState({display: 'inline-block'})
}





render(){

        let user = fire.auth().currentUser;
        //get rid of dialog once clicked off

        document.body.onClick = function(){
            this.setState({dialog: null})
            this.setState({display: 'none'})
        }

    {/*<div className = "store-container">*/}
        {/*{this.props.dogs.map((dog, index) => (*/}
            {/*<Product*/}
                {/*key={index}*/}
                {/*name={dog.name}*/}
                {/*image={dog.image}*/}
                {/*stock={dog.stock}*/}
                {/*price={dog.price}*/}
                {/*onImageClicked = {() => this.childImageClicked(dog.image)}*/}
            {/*/>*/}
        {/*))}*/}
        {/*<DialogPicture image = {this.state.dialog} display = {this.state.display}/>*/}
    {/*</div>*/}

// DiaglogPicture NEEDS TO BE HERE FOR CSS PURPOSES
    return (
        <div>
            <div><h1>Welcome to the store, {user.email}</h1></div>

        </div>

    );
}


}
export default Store;
