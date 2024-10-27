import React, {useState} from 'react';
import axios from "axios";
import "./Login.sass"
import {IoEyeSharp,} from "react-icons/io5"
import {HiEyeSlash} from "react-icons/hi2";
const Login = () => {
    const [eye, setEye] = useState(false);
    const loginUser = (e) => {
        e.preventDefault()
        const user = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post("http://localhost:8080/login", user)
            .then((res) => console.log(res))
    }

    return (
        <section className="login-block">
            <form action="" className="login__form" onSubmit={loginUser}>
                <label htmlFor="">
                    <div className="email">Email</div>
                    <input type="email" placeholder="Email"/>
                </label>
                <label htmlFor="" className="label__password">
                    <div className="password">Введите пароль</div>
                    <div className="password-input-container">
                        <input
                            type={eye ? 'text' : 'password'}
                            placeholder="Password"/>
                        <span onClick={() => setEye(!eye)} className="register-eye">
                          {   eye ? <IoEyeSharp/> : <HiEyeSlash/>}
                        </span>
                    </div>
                </label>
                <br/>
                <button type="submit" className="submit_register">Войти</button>
            </form>
        </section>
    );
};

export default Login;
