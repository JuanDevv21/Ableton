import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-izq">
                <div className="cont-izq">Live</div>
                <div className="cont-izq">Push</div>
                <div className="cont-izq">Link</div>
                <div className="cont-izq">Shop</div>
                <div className="cont-izq">Packs</div>
                <div className="cont-izq">Help</div>
                <div className="cont-izq">More +</div>
            </div>
            <div className="nav-der">
                <div className="cont-der">Try live for free</div>
                <div className="cont-der">Account</div>
                <div className="cont-der">Logout</div>
            </div>

        </nav>
    )
}

export default Navbar