import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

const Authorization = (props) =>{
    const isLogin = props.match.path === "/login"
    const pageTitle = isLogin ? "Авторизация" : "Регистрация"
    const pageContent = isLogin ? "У меня нет акаунта" : ""
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isSubmiting,setIsSubmiting] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsSubmiting(true)
    }

    useEffect(()=>{
        if(!isSubmiting){
            return
        }
        axios("https://productionready.io/api/users/login", {
            method: "post",
            data: {

                    email : "1234@mail.ru",
                    password: "1234"

            }
        }).then(res =>{
            console.log("success", res)
            alert("вы ввели верные данные")
            setIsSubmiting(false)

        }).then(error =>{
            console.log("error", error)
            setIsSubmiting(false)
        })
    })
    return(
        <div className="Authorization">
            <h3>{pageTitle}</h3>
            <p><Link to="register">{pageContent}</Link></p>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <fieldset>
                        <input type="text" placeholder="Имя"/>
                    </fieldset>
                )}
                <fieldset>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <input type="text" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
                </fieldset>
                <button type="submit">Отправить</button>
            </form>
            <p>Для проверки</p>
            <p>email : "1234@mail.ru"</p>
            <p>pasword: "1234"</p>

        </div>

    )
}

export default Authorization