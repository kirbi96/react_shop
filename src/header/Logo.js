import React from "react";
import './Logo.css';

const Logo = () =>{
    return(
        <div className="Logo d-flex align-items-center">
            <a href="/" className="d-flex Logo-link">
                <img className="Logo-img" src="https://dodopizza-a.akamaihd.net/site-static/dist/be20534fd8b4b6d47024.svg" />

            <span className="d-flex flex-column">
            <span className="Logo-title">MaMa PiZZA</span>
            <span className="Logo-subtitle">Сеть № 22 </span>
          </span>
            </a>
            <div className="Logo-city d-flex flex-column">
                <div className="City__name">Доставка пиццы <span>Мухосранск</span></div>
                <div className="City__time"> 20 мин • 5.0 <span className="Stars">★ </span></div>
            </div>
            <a href="/login" className="Logo-in">Войти</a>
        </div>
    )
}

export {Logo}