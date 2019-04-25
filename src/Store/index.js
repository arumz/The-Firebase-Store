import React, {Component} from "react";
import Product from './Product'
import DialogPicture from './DialogPicture';


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
        //get rid of dialog once clicked off

        document.body.onClick = function(){
            this.setState({dialog: null})
            this.setState({display: 'none'})
        }


// DiaglogPicture NEEDS TO BE HERE FOR CSS PURPOSES
    return (
        <div className = "store-container">
            {this.props.dogs.map((dog, index) => (
                <Product
                    key={index}
                    name={dog.name}
                    image={dog.image}
                    stock={dog.stock}
                    price={dog.price}
                    onImageClicked = {() => this.childImageClicked(dog.image)}
                />
            ))}
            <DialogPicture image = {this.state.dialog} display = {this.state.display}/>
        </div>
    );
}


}
export default Store;
