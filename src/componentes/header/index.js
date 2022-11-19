import React from 'react'
import logo from "../../images/logo.png"

export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={logo} alt="logo" width="70" />
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
            </ul>
            <div className="carrito">
                <box-icon name="cart">0</box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}