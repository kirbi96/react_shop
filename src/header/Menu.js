import React from "react";
import './Menu.css';

const Menu = () =>{
    return(
        <div className="Menu">
            <nav>
                <ul className="d-flex">
                    <li><a href="/#pizza" className="Header__link">Комбо</a></li>
                    <li><a href="/#pizza" className="Header__link">Пиццы</a></li>
                    <li><a href="/#snacks" className="Header__link">Закуски</a></li>
                    <li><a href="/#dessert" className="Header__link">Десерты</a></li>
                    <li><a href="/#pizza" className="Header__link">Напитки</a></li>
                    <li><a href="/#pizza" className="Header__link">Необходимое</a></li>
                    <li><a href="/stock" className="Header__link">Акции</a></li>
                    <li><a href="/contact" className="Header__link">Контакты</a></li>
                    <li><a href="/about" className="Header__link">О нас</a></li>
                    <li><a href="/cart" className="Header__link Checkout">Корзина</a></li>
                </ul>
            </nav>
        </div>

    )

}

export {Menu}