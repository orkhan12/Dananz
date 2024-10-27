import React from 'react';
import rightArrow from "../../components/assets/arrow-right.svg";
import './Services.sass'
import roomImg from '../../components/assets/room.svg'
import interiorImg from '../../components/assets/interior.svg'
import interiorImg1 from '../../components/assets/consultant.svg'
import interiorImg2 from '../../components/assets/construction.svg'

const Services = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="about additionall">
                    <h2 className="about__title">Services</h2>
                    <p className="about__text-main">It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>
                    <img src={roomImg} alt=""/>
                </div>

                <section className="achievement">
                    <div className="about__main">
                        <div className="text">ACHIEVEMENT</div>
                        <div className="line-mini"></div>
                    </div>
                    <div className="achievement__description">
                        <div className="achievement__boxes">
                            <div className="achievement__box">
                                <div className="achievement__block-img">
                                    <img src={interiorImg} alt="achievement"/>
                                </div>
                                <div className="achievement__block-text">
                                    <h4 className="achievement__block-title">Interior design+</h4>
                                    <p className="achievement__block-txt">Customize your interior design into a dream
                                        place with the best designers and quality furniture. We try our best to fulfill
                                        your expectations.</p>
                                </div>
                            </div>
                            <div className="achievement__box">
                                <div className="achievement__block-img">
                                    <img src={interiorImg1} alt="achievement"/>
                                </div>
                                <div className="achievement__block-text">
                                    <h4 className="achievement__block-title">Consultant</h4>
                                    <p className="achievement__block-txt">Customize your interior design into a dream
                                        place with the best designers and quality furniture. We try our best to fulfill
                                        your expectations.</p>
                                </div>
                            </div>
                            <div className="achievement__box">
                                <div className="achievement__block-img">
                                    <img src={interiorImg2} alt="achievement"/>
                                </div>
                                <div className="achievement__block-text">
                                    <h4 className="achievement__block-title">Construction consultant</h4>
                                    <p className="achievement__block-txt">Customize your interior design into a dream
                                        place with the best designers and quality furniture. We try our best to fulfill
                                        your expectations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="products additional2">
                    <div className="about__main">
                        <div className="text">PRODUCT</div>
                        <div className="line-mini"></div>
                    </div>
                    <div className="product__info">
                        <div>
                            <h2 className="about__title">Choose your product themes.</h2>
                        </div>
                        <div className="about__txt">Find the theme you want. If our choice of theme is not what you
                            want, you can customize it as you want.
                        </div>
                    </div>

                    <div className="furniture__container">
                        <a href="#e" className="furniture__links">
                            <div className="furniture__link-in"><h4 className="furniture__link"><span>01</span>Vintage
                            </h4>
                                <div><p className="furniture__text">the use of simple and limited elements to get
                                    the
                                    best effect or impression.</p></div>
                            </div>
                            <div className="furniture__img">
                                <img src={rightArrow} alt=""/>
                            </div>
                        </a>
                        <a href="#e" className="furniture__links">
                            <div className="furniture__link-in"><h4 className="furniture__link"><span>02</span>Minimalist
                            </h4>
                                <div><p className="furniture__text">the use of simple and limited elements to get
                                    the
                                    best effect or impression.</p></div>
                            </div>
                            <div className="furniture__img">
                                <img src={rightArrow} alt=""/>
                            </div>
                        </a>
                        <a href="#e" className="furniture__links">
                            <div className="furniture__link-in"><h4 className="furniture__link"><span>03</span>Modern
                            </h4>
                                <div><p className="furniture__text">the use of simple and limited elements to get
                                    the
                                    best effect or impression.</p></div>
                            </div>
                            <div className="furniture__img">
                                <img src={rightArrow} alt=""/>
                            </div>
                        </a>
                        <a href="#e" className="furniture__links">
                            <div className="furniture__link-in"><h4 className="furniture__link"><span>04</span>Transitional
                            </h4>
                                <div><p className="furniture__text">the use of simple and limited elements to get
                                    the
                                    best effect or impression.</p></div>
                            </div>
                            <div className="furniture__img">
                                <img src={rightArrow} alt=""/>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Services;