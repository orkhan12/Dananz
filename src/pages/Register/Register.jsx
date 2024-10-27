import React, { useState } from 'react';
import axios from "axios";
import './Register.sass'
import { useForm } from "react-hook-form";
import {IoEyeSharp,} from "react-icons/io5"
import {HiEyeSlash} from "react-icons/hi2";
// import Chance from 'chance';
// const chance =  newChance();
const Register = () => {
    const [eye, setEye] = useState(false);
    // const [pass, setPass] = useState();
    const  {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        mode: 'onBlur'
    })

    const registerUser = (data) => {
        axios.post("http://localhost:8080/register", data)
            .then((res) => console.log(res))
    }

    // const generatePass = () => {
    //     const newPassword = chance.character({pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}) + chance.word({ length: 6,  })
    //         + chance.integer({ min: 0, max: 20 }) + chance.character({ pool: '!@#$%^&*()_+[]{}|;:,.<>?' });
    //     return newPassword
    // }
    return (
        <section className="register">
            <h2 className="about__title">Contact Us</h2>
            <div className="about__text-main">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            <form action="" className="register__form" onSubmit={handleSubmit(registerUser)}>
                <label htmlFor="">
                    <div className="email">Email</div>
                    <input {...register('email', {
                        required: {value: true, message: 'Заполните это поле !'},
                        minLength: {value: 5, message: 'Минимум 5 символов !'},
                        pattern: {
                            value: /^(?=.*[a-zA-Z])(.{4,})@([a-zA-Z]{2,6})\.([a-zA-Z]{2,3})$/,
                            message: 'Заполните верно свою почту'
                        }
                    })} type="email" placeholder="Email"/> <br/>
                    <span className="register__error">{errors.email && errors.email.message}</span>
                </label>
                <label htmlFor="">
                    <div className="login">Login</div>
                    <input {...register('login', {
                        required: true,
                        minLength: {value: 4, message: "Минимум 4 буквы"}
                    })} type="text" placeholder="Login"/> <br/>
                    <span className="register__error">{errors.login && errors.login.message}</span>
                </label>
                <label htmlFor="">
                    <div className="age">Введите возраст</div>
                    <input {...register('age', {
                        required: true,
                        min: {value: 12, message: 'Ваш возраст меньше 12'}
                    })} type="number" placeholder="age"/> <br/>
                    <span className="register__error">{errors.age && errors.age.message}</span>
                </label>
                <label htmlFor="" className="label__password">
                    <div className="password">Введите пароль</div>
                    <div className="password-input-container">
                        <input {...register("password", {
                            required: true,
                        })}
                               type={eye ? 'text' : 'password'}
                               placeholder="password"/>
                        <span onClick={() => setEye(!eye)} className="register-eye">
                          {eye ? <IoEyeSharp/> : <HiEyeSlash/>}
                        </span>

                    </div>
                    <br/>
                    <span className="register__error">{errors.password && errors.password.message}</span>
                </label><br/>
                <button type="submit" className="submit_register">Send Massage</button>
            </form>
        </section>
    );
};

export default Register;
