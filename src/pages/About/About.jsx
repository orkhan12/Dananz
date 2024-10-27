import React from 'react';
import './About.sass'
import aboutImg from '../../components/assets/about_main.svg'
import achievementImg from '../../components/assets/achievement.svg'
import servicesImg from '../../components/assets/services.svg'
import servicesImg1 from '../../components/assets/services1.svg'
import servicesImg2 from '../../components/assets/services2.svg'

const About = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="about">
                    <h2 className="about__title">About</h2>
                    <p className="about__text-main">It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>
                    <img src={aboutImg} alt=""/>
                </div>

                <section className="achievement">
                    <div className="about__main">
                        <div className="text">ACHIEVEMENT</div>
                        <div className="line-mini"></div>
                    </div>
                    <h2 className="about__title">Interior customization with Danaanz, best quality with professional
                        workers</h2>

                    <div className="achievement__blocks">
                        <div className="achievement__blocks-img">
                            <img src={achievementImg} alt=""/>
                        </div>
                        <div className="main__block-list">
                            <div className="main-block2-in">
                                <h2 className="main__block2-title">350+</h2>
                                <p className="main__block2-text">Project Completed</p>
                            </div>
                            <div className="main-block2-in">
                                <h2 className="main__block2-title">23+</h2>
                                <p className="main__block2-text">Professional Teams</p>
                            </div>
                            <div className="main-block2-in">
                                <h2 className="main__block2-title">15+</h2>
                                <p className="main__block2-text">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service">
                    <div className="about__main">
                        <div className="text">Service</div>
                        <div className="line-mini"></div>
                    </div>
                    <h2 className="about__title">Why Choose Us</h2>
                    <p className="about__txt">Customize your interior design into a dream place with the best designers
                        and quality furniture. We try our best to fulfill your expectations.</p>
                    <div className="about__boxes">
                        <div className="about__box">
                            <div className="about__box-img">
                                <img src={servicesImg} alt=""/>
                            </div>
                            <div className="about__info-mini">
                                <h2 className="about__info-title">High Quality</h2>
                                <p className="about__info-text">Customize your interior design into a dream place with
                                    the best designers and quality furniture. We try our best to fulfill your
                                    expectations.</p>
                            </div>
                        </div>
                        <div className="about__box">
                            <div className="about__box-img">
                                <img src={servicesImg1} alt=""/>
                            </div>
                            <div className="about__info-mini">
                                <h2 className="about__info-title">Professional Designer</h2>
                                <p className="about__info-text">Customize your interior design into a dream place with
                                    the best designers and quality furniture. We try our best to fulfill your
                                    expectations.</p>
                            </div>
                        </div>
                        <div className="about__box">
                            <div className="about__box-img">
                                <img src={servicesImg2} alt=""/>
                            </div>
                            <div className="about__info-mini">
                                <h2 className="about__info-title">The Best Services</h2>
                                <p className="about__info-text">Customize your interior design into a dream place with
                                    the best designers and quality furniture. We try our best to fulfill your
                                    expectations.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default About;