import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import { Link } from "react-router-dom";
class Navbar extends Component{
    state ={clicked:false}

    handleClick= () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <Link className="navbar-link-container" to="/"><h1 className="navbar-logo">ChalkCode<i className="fab fa-react"></i></h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        if(localStorage.getItem('name') && item.title =="Log in"){
                           return( <Link className="navbar-link-container" to={item.url}> <li key={index}><a className={item.cname} >Logged in as {localStorage.getItem('name')}</a></li></Link>)
                        }else{
                            console.log(localStorage)
                            return(
                                <Link className="navbar-link-container" to={item.url}> <li key={index}><a className={item.cname} href={item.url}>{item.title}</a></li></Link>
                             )
                        }
                        
                    })}
                    
                </ul>
            </nav>
        )
    }
}
export default Navbar
