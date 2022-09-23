import React from "react";
import './Header.css'


function Header() {
    return(
        <div className="header">
            <div className="header-title">
                <h2>Sreeraj</h2>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;