import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <footer>
        <div className="Footer">
            <div className="container d-flex justify-content-between">
                <div className="d-flex Footer-link" >
                    <ul>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/about">Франшиза</a></li>
                        <li><a href="/cart">Корзина</a></li>
                    </ul>
                </div>
                <div className="d-flex flex-column Footer-right">
                    <p className="d-flex justify-content-center">Социальные сети</p>
                    <div className="d-flex justify-content-center Footer-social">
                        <a href="https://vk.com/darkirill"><img src="https://img.icons8.com/clouds/2x/vk-com.png" alt=""/></a>
                        <a href="https://vk.com/darkirill"><img src="https://img.icons8.com/clouds/2x/instagram.png" alt=""/></a>
                        <a href="https://vk.com/darkirill"><img src="https://img.icons8.com/clouds/2x/facebook.png" alt=""/></a>
                    </div>

                </div>
            </div>
        </div>
        </footer>
    )
}

export {Footer}