import React, {Component} from "react";
import fire from "./Fire";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            total: 0
        }
    }

    componentWillMount(){
        //occurs before render

        //if path/reference is not created beforehand in Firebase, it will create it now.
        let cartRef = fire.database().ref('cart').orderByKey().limitToLast(100)

        let items = [];

        //whenever information is added, grab snapshot
        cartRef.on("child_added", snapshot => {
            let item = {info: snapshot.val(), id: snapshot.key}

            //add this instance of item to the total
            let runningTotal = this.state.total;

            let itemPrice = parseInt(item.info.price);
            runningTotal = itemPrice + runningTotal;
            console.log(runningTotal);
            this.setState({total: runningTotal});
            console.log(this.state.total);

            items.push(item);
            this.setState({cart: items});


        });
    }

   componentDidUpdate(prevProps, prevState) {
       if (prevState.total !== this.state.total) {
           // this.fetchData(this.state.total);
           this.forceUpdate();
       }
   }

    render(){

        let user = fire.auth().currentUser;

        return(
            <div>
                <h1>{user.email} shopping cart</h1>
                <h2>Your Total - {this.state.total} </h2>
                <ul>
                    {
                        this.state.cart.map(c=><li key = {c.id}>Name: {c.info.name} Price: {c.info.price}</li>)
                    }
                </ul>
            </div>
        )
    }

}

export default Cart;