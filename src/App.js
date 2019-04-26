import React, {Component} from 'react';
import Nav from './Nav';
import Home from './Home';
import Store from './Store/index';
import Cart from './Cart';
import Admin from './Admin';
import {Route} from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';
import LogIn from './LogIn';
import chocolate from "./img/chocolate.jpg";
import dalmation from "./img/dalmation.jpg";
import corgi from "./img/corgi.jpg";
import black from "./img/black.JPG";
import greyhound from "./img/greyhound.jpeg";
import mastiff from "./img/mastiff.jpeg";
import pit from "./img/pit-bull.jpg";
import germanpup from "./img/puppy-german.jpg";
import wolf from "./img/wolf.jpg";
import Product from "./Store";
import fire from './Fire';

class App extends Component {

        state = {
                loading: true,
                authenticated: false,
                user: null,
        }

        componentWillMount(){
                fire.auth().onAuthStateChanged(user => {
                        if (user) {

                                this.setState({
                                        user: user,
                                        authenticated: true,
                                        loading: false
                                })
                        } else {

                                this.setState({
                                        user: false,
                                        authenticated: false,
                                        loading: false
                                })
                        }
                })
        }



        // constructor(props){
        //         super(props);
        //         this.state = {
        //                 dogs: [
        //                         {
        //                                 id: 0,
        //                                 name: "Chocolate Lab",
        //                                 image: chocolate,
        //                                 stock: 15,
        //                                 price: 200
        //                         },
        //                         {
        //                                 id: 1,
        //                                 name: "Dalmation",
        //                                 image: dalmation,
        //                                 stock: 101,
        //                                 price: 400
        //                         },
        //                         {
        //                                 id: 2,
        //                                 name: "Corgi",
        //                                 image: corgi,
        //                                 stock: 3,
        //                                 price: 350
        //                         },
        //                         {
        //                                 id: 3,
        //                                 name: "Black Lab",
        //                                 image: black,
        //                                 stock: 72,
        //                                 price: 100
        //                         },
        //                         {
        //                                 id: 4,
        //                                 name: "Greyhound",
        //                                 image: greyhound,
        //                                 stock: 4,
        //                                 price: 600
        //                         },
        //                         {
        //                                 id: 5,
        //                                 name: "Mastiff",
        //                                 image: mastiff,
        //                                 stock: 22,
        //                                 price: 400
        //                         },
        //                         {
        //                                 id: 6,
        //                                 name: "Pit Bull",
        //                                 image: pit,
        //                                 stock: 120,
        //                                 price: 200
        //                         },
        //                         {
        //                                 id: 7,
        //                                 name: "German Shepard",
        //                                 image: germanpup,
        //                                 stock: 8,
        //                                 price: 900
        //                         },
        //                         {
        //                                 id: 8,
        //                                 name: "Wolf",
        //                                 image: wolf,
        //                                 stock: 1,
        //                                 price: 1199
        //                         }
        //                     ],
        //                 cart: []
        //         }
        // }
        render(){
        const { authenticated, loading, currentUser } = this.state;

        if (loading) {
                return(<p>Loading...</p>)
        }
                return (
                    <div className="App">
                            <Nav/>
                            <Route path = "/login" component = {LogIn}/>
                            <Route path = "/signup" component = {SignUp} />
                            <PrivateRoute exact path="/" component = {Home} authenticated = {authenticated} />
                            <PrivateRoute path="/store" component = {Store} authenticated = {authenticated}  />
                            <Route path ="/cart" component = {Cart} />
                            <Route path ="/admin" component = {Admin}/>

                            {/*render = {(props)=> <Store {...props} dogs = {this.state.dogs} />}*/}
                    </div>
                )
        }

}
export default App;

