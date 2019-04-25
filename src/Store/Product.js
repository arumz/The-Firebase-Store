import React, {Component} from "react";
import add from "../icon/add.png";

class Product extends Component {

    constructor(props){
        super(props);

        this.state = {
            clickedPicture: "",
            // need to update state of this picture so can get different src
            // hide content in store
            // change id to className 
        }

        // this.showDialog =this.showDialog.bind(this);
        this.handleChange =this.handleChange.bind(this);


    }

    handleChange(){
        if (this.props.onImageClicked) {
            this.props.onImageClicked();
        }
        // this.setState({ shelf: e.value })
    }




render(){
    const style = {
        backgroundColor: 'saddlebrown',
        alert: {
            display: 'none',
            textDecoration: 'underline'
        }
    }
    //changes card color and displays message if condition has been met
    if (this.props.stock > 100){
        style.backgroundColor = 'red';
    }
    else if (this.props.stock < 10){
        style.backgroundColor = 'blue';
        style.alert.display = 'inline';
    }


    // console.log(clickedPicture);
    return (
        <div className = "main-content">
            <div id = "product-container" className = "product-container" style = {style}>
                <div className = "add-button-container"><img alt = "add to cart" className = "add-button" src = {add}></img></div>
                <h2 className = "product-title">{this.props.name}</h2>
                <div id = "image-container" className = "image-container"><img onClick={this.handleChange} alt= "dog"id = "picture" className = "doggo" alt = "dog" src = {this.props.image}></img></div>
                <div className = "product-detail-container">
                    <h4 className = "product-stock-detail">Stock: {this.props.stock} </h4>
                    <h4 className = "product-price-detail">Price: ${this.props.price} </h4>
                </div>
                <h4 className = "stock-alert" style = {style.alert}>Low stock!</h4>
            </div>
        </div>




    );
}



}

export default Product;
