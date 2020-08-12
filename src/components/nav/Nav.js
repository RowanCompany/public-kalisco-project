import React from "react";
import "./nav.scss";
import logo from "../../static/svg/logo-header-or.svg";

function nav() {
    return (
        <nav className="home-nav">
            <ul>
                <li>
                    <img src={logo} alt="Brand logo" />
                </li>
                <li className="mx-auto d-flex align-self-center">
                    <div>About</div>
                    <div>Brand</div>
                    <div>Product</div>
                    <div>HR</div>
                    <div>Recruit</div>
                </li>
                <li>
                    <div>고객소통</div>
                </li>
            </ul>
        </nav>
    );
}

export default nav;
