import React from 'react';
import './Footer.sass';
import logoImg from '../../components/assets/logo.svg'
import arrowImg from '../../components/assets/arrow-right.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <section className="contact__us">
                <div className="contact__us-blocks container">
                    <div className="contact__us-block">
                        <h1 className="contact__us-title">Let's discuss making your interior like a dream
                            place!</h1>
                    </div>
                    <div className="contact__us-block1">
                        <div className="about__txt">Contact us below to work together to build your amazing interior
                        </div>
                        <div>
                            <button className="contact__us-btn"><a href="#">Contact Us</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="footer__block-in">
                    <div className="footer__block">
                        <div className="footer__logo">
                            <img src={logoImg} alt=""/>
                        </div>
                        <div>
                            <h2 className="about__title">One of the best furniture agency.</h2>
                        </div>
                    </div>
                    <div className="footer__block-social">
                        <form>
                            <label htmlFor="email">Enter your email to get the laterst news</label>
                            <input type="email" id="email" placeholder="Email Address"/>
                            <img src={arrowImg} alt=""/>
                        </form>

                        <div className="follow">Follow us On</div>
                        <div className="social__icons">
                            <a href="#facebook" className="social__icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#instagram" className="social__icon"><i className="fab fa-instagram"></i></a>
                            <a href="#tiktok" className="social__icon"><i className="fab fa-tiktok"></i></a>
                            <a href="#youtube" className="social__icon"><i className="fab fa-youtube"></i></a>
                        </div>

                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;