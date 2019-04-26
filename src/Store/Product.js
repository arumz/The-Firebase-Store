import React, {Component} from "react";
import add from "../icon/add.png";
import fire from "../Fire";

class Product extends Component {

    constructor(props){
        super(props);

        this.state = {
            stock: this.props.stock,
            style: {
                backgroundColor: 'saddlebrown',
                lowAlert: {
                    display: 'none',
                    textDecoration: 'underline'
                },
                addButton: {
                    display: ''
                }
            }
        }

        // this.showDialog =this.showDialog.bind(this);
        this.handleChange =this.handleChange.bind(this);

        // this.addToCart = this.addToCart().bind(this);
    }
    componentWillMount(){
        //changes card color and displays message if condition has been met

        console.log("COM" + this.state.stock);
        if (this.state.stock === 0) {
            let addButtonStyle = this.state.style.addButton;
            addButtonStyle.display = 'none';
            this.setState({addButtonStyle});

        }

        if (this.props.stock > 100){
            let style = this.state.style;
            style.backgroundColor = 'red';
            this.setState({style});
        }
        else if (this.props.stock < 10){
            let style = this.state.style;
            let lowAlertStyle = this.state.style.lowAlert;
            style.backgroundColor = 'blue';
            lowAlertStyle.display = 'inline';
            this.setState({style});
            this.setState({lowAlertStyle});
        }

    }

    handleChange() {
        if (this.props.onImageClicked) {
            this.props.onImageClicked();
        }
    }

    addToCart(e){
        // create new database ref
        e.preventDefault();


        fire.database().ref('cart').push({name: this.props.name, price: this.props.price});

        //decrement the stock value for that product
        let stockNum = this.state.stock;
        stockNum = stockNum - 1;
        console.log("ADDTC" + stockNum);
        this.setState({stock: stockNum})

        // if (this.state.stock === 0){
        //     let addButtonStyle = this.state.style.addButton;
        //     console.log(addButtonStyle);
        //     addButtonStyle.display = 'none';
        //     this.setState({addButtonStyle});
        //     // this.setState(this.state);
        //
        // }


    }






render(){

    console.log(this.state.stock);

    // if (this.state.stock === 0) {
    //     let addButtonStyle = this.state.style.addButton;
    //     addButtonStyle.display = 'none';
    //     this.setState({addButtonStyle});
    //
    // }

    // if (this.state.stock < 1){
    //     let style = {
    //         display: 'hidden'
    //     }
    // }



    // console.log(clickedPicture);
    return (
        <div className = "main-content">
            <div id = "product-container" className = "product-container" style = {this.state.style}>
                <div className = "add-button-container"><img style = {this.state.style.addButton} onClick = {this.addToCart.bind(this)} alt = "add to cart" className = "add-button" src = {add}></img></div>
                <h2 className = "product-title">{this.props.name}</h2>
                <div id = "image-container" className = "image-container"><img onClick={this.handleChange} alt= "dog"id = "picture" className = "doggo" alt = "dog" src = {this.props.image}></img></div>
                <div className = "product-detail-container">
                    <h4 className = "product-stock-detail">Stock: {this.state.stock} </h4>
                    <h4 className = "product-price-detail">Price: ${this.props.price} </h4>
                </div>
                <h4 className = "stock-alert" style = {this.state.style.lowAlert}>Low stock!</h4>
            </div>
        </div>
    );
}



}

export default Product;
