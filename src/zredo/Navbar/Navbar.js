import React from 'react'
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Link} from "react-router-dom";
import logo from "../../logo.png"

/*class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <Link className="navbar-link-container" to="/"><h1 className="navbar-logo">ChalkCode</h1></Link>
                <Link to="/"><img src={logo} alt="" className="navbar-logo-img"/></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link className="navbar-link-container" to={item.url}>
                                <li key={index}><a className={item.cname} href={item.url}>{item.title}</a></li>
                            </Link>
                        )
                    })}

                </ul>
            </nav>
        )
    }
}*/

function profileTypeChange(profileType){
    const navClassList = document.getElementById("NavbarItems").classList;
    if( navClassList.length > 1 ){
        navClassList.forEach(element => navClassList.remove(element))
    }
    navClassList.add(profileType)
}

function Navbar(login = null){
    //if(login != null){
    //    profileTypeChange(login.type)
    //}
    
    return (
        <nav className="NavbarItems">
            <Link className="navbar-link-container" to="/"><h1 className="navbar-logo">ChalkCode</h1></Link>
            <Link to="/"><img src={logo} alt="" className="navbar-logo-img"/></Link>
            <span className="login-name">Welcome {login.name}!</span>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <Link className="navbar-link-container" to={item.url}>
                            <li key={index}><a className={item.cname} href={item.url}>{item.title}</a></li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
