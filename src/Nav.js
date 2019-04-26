import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav() {

        return(
            <nav className = "nav-container">
                    <NavLink className = "nav-link" exact activeClassName="active" to ={"/"}>Home</NavLink>
                    <NavLink className = "nav-link" activeClassName="active" to ={"/store"}>Store</NavLink>
                    <NavLink className = "nav-link" activeClassName="active" to ={"/cart"}>Cart</NavLink>
                    <NavLink className = "nav-link" activeClassName="active" to ={"/admin"}>Admin</NavLink>
                    <NavLink className = "nav-link" activeClassName = "active" to={"/login"}>Login</NavLink>
                    <NavLink className = "nav-link" activeClassName = "active" to = {"signup"}>Sign Up</NavLink>
            </nav>
        );

}

