import React, { useEffect } from 'react';
import './Header.sass';
import logo from '../assets/logo.svg';
import {useState} from "react";

const Header = () => {
    useEffect(() => {
        const burgerMenu = document.querySelector(".burger-menu");
        const menu = document.querySelector(".menu");
        const contactButton = document.querySelector(".contact__btn");

        console.log(burgerMenu, menu, contactButton);

        // Проверяем, существуют ли элементы, и добавляем обработчики событий
        if (burgerMenu && menu) {
            const toggleMenu = () => {
                burgerMenu.classList.toggle("_open");
                menu.classList.toggle("_open");
                document.body.classList.toggle("_lock");
            };
            burgerMenu.addEventListener('click', toggleMenu);

            // Удаляем обработчик при размонтировании компонента
            return () => {
                burgerMenu.removeEventListener('click', toggleMenu);
            };
        }

        if (contactButton) {
            const handleContactClick = (e) => {
                e.preventDefault();
                console.log("Contact button clicked!");

                // Логика перенаправления
                window.location.href = '/contact'; // замените на нужный URL
            };
            contactButton.addEventListener('click', handleContactClick);

            // Удаляем обработчик при размонтировании компонента
            return () => {
                contactButton.removeEventListener('click', handleContactClick);
            };
        }
    }, []); // пустой массив зависимостей, чтобы эффект сработал только при монтировании компонента

    return (
        <header className="header">
            <div className="container">
                <section className="header__blocks">
                    <div className="logo__icon">
                        <a href="/Home" className="logo__link">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div className="burger-menu">
                        <span></span>
                    </div>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item"><a href="/Home" className="menu__link">Home</a></li>
                            <li className="menu__item"><a href="/About" className="menu__link">About Us</a></li>
                            <li className="menu__item"><a href="/Services" className="menu__link">Services</a></li>
                            <li className="menu__item"><a href="/Teams" className="menu__link">Portofolio</a></li>
                            <div className="contact">
                                <button className="btn">
                                    <a href="/Register" className="btn__link">Contact Us</a>
                                </button>
                            </div>
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
    );
};

export default Header;
