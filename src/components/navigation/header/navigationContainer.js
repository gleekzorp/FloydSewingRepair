import React from "react"
import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <div className="navBarWrapper">
            <div className="navBarLogo">
                <h1>Floyd Sewing Repair</h1>
                <h1>801-255-4130</h1>
            </div>
            <dir className="navBarLinks">
                <div className="navBarLink">
                    <NavLink exact to="/">Home</NavLink>
                </div>
                <div className="navBarLink">
                    <NavLink exact to="/about">About</NavLink>
                </div>
                <div className="navBarLink">
                    <NavLink exact to="/contact">Contact</NavLink>
                </div>
            </dir>
        </div>
    )
}

export default NavBar