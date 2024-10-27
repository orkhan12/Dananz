import React from 'react';
import './Home.sass'
import mainImg from './../assets/main_img.svg'
import aboutImg from './../assets/about.svg'
import ceoImg from './../assets/ceo.svg'
import rightArrow from './../assets/arrow-right.svg'
import roomImg from './../assets/room.svg'
import oboyImg from './../assets/oboy.svg'

const Home = () => {
    return (
        <main className="main">
            <div className="container">
                <section className="main__blocks">
                    <div className="main__block-in">
                        <div className="main__block">
                            <h4 className="main__title">
                                Design your interor with high quality.
                            </h4>
                            <div className="line"></div>
                        </div>

                        <div className="main-block1">
                            <p className="rotate__text">2022<br/>
                                ALL RIGHT RESERVED</p>
                        </div>
                    </div>
                    <div className="main__block-img">
                        <img src={mainImg} alt="mainImg"/>
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
                </section>

                <section className="about-section">
                    <div className="container">
                        <div className="about__blocks">
                            <div className="about__main">
                                <div className="text">About</div>
                                <div className="line-mini"></div>
                            </div>
                            <h2 className="about__title">“We're one of the best furniture agency. Prioritizing
                                customers
                                and making purchases easy are the hallmarks of our agency.”
                            </h2>
                            <div className="about__info">
                                <div className="about__img">
                                    <img src={aboutImg} alt=""/>
                                </div>
                                <div className="about__text">
                                    <p className="about__txt">Online learning with us does not interfere with your daily
                                        life. because
                                        learning
                                        can be done anytime and anywhere.</p>
                                    <button className="btn">
                                        <a href="#" className="btn__link">Learn More</a>
                                    </button>
                                </div>
                                <div className="ceo">
                                    <div className="ceo__img">
                                        <img src={ceoImg} alt="ceo"/>
                                    </div>
                                    <div className="ceo__name">
                                        <h4>Arga Danaan</h4>
                                        <p>CEO of Dananz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="furniture">
                    <div className="furniture__blocks">
                        <div className="about__main">
                            <div className="text">Service</div>
                            <div className="line-mini"></div>
                        </div>
                        <div className="furniture__main">
                            <h2 className="about__title">Attractive furniture with the best quality.</h2>
                            <h4 className="about__txt">Customize your interior design into a dream place with the best
                                designers and quality furniture. We try our best to fulfill your expectations.</h4>
                        </div>
                        <div className="furniture__container">
                            <a href="#e" className="furniture__links">
                                <div><h4 className="furniture__link"><span>01</span>Interior Design</h4></div>
                                <div className="furniture__img">
                                    <img src={rightArrow} alt=""/>
                                </div>
                            </a>

                            <a href="ex" className="furniture__links">
                                <div><h4 className="furniture__link"><span>02</span>Consultant</h4></div>
                                <div className="furniture__img">
                                    <img src={rightArrow} alt=""/>
                                </div>
                            </a>

                            <a href="exe" className="furniture__links">
                                <div><h4 href="#" className="furniture__link"><span>03</span>Construction Consultant
                                </h4>
                                </div>
                                <div className="furniture__img">
                                    <img src={rightArrow} alt=""/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="room">
                        <img src={roomImg} alt=""/>
                    </div>
                </section>
                <section className="products">
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
                                <div><p className="furniture__text">the use of simple and limited elements to get the
                                    best effect or impression.</p></div>
                            </div>
                            <div className="furniture__img">
                                <img src={rightArrow} alt=""/>
                            </div>
                        </a>
                        <a href="#e" className="furniture__links">
                            <div className="furniture__link-in"><h4 className="furniture__link"><span>02</span>Minimalist
                            </h4>
                                <div><p className="furniture__text">the use of simple and limited elements to get the
                                    best effect or impression.</p></div>
                            </div>
                            <div className="furniture__img">
                                <img src={rightArrow} alt=""/>
                            </div>
                        </a>
                        <a href="#e" className="furniture__links">
                            <div className="furniture__link-in"><h4 className="furniture__link"><span>03</span>Modern
                            </h4>
                                <div><p className="furniture__text">the use of simple and limited elements to get the
                                    best effect or impression.</p></div>
                            </div>
                            <div className="furniture__img">
                                <img src={rightArrow} alt=""/>
                            </div>
                        </a>
                        <a href="#e" className="furniture__links">
                            <div className="furniture__link-in"><h4 className="furniture__link"><span>04</span>Transitional
                            </h4>
                                <div><p className="furniture__text">the use of simple and limited elements to get the
                                    best effect or impression.</p></div>
                            </div>
                            <div className="furniture__img">
                                <img src={rightArrow} alt=""/>
                            </div>
                        </a>
                    </div>
                </section>

                <section className="material">
                    <div className="about__main">
                        <div className="text">MATERIAL</div>
                        <div className="line-mini"></div>
                    </div>


                    <div className="material__info">
                        <div className="material__info-text">
                            <div>
                                <h2 className="about__title">Choice of materials for quality furniture.</h2>
                            </div>
                            <div className="about__txt">You can custom the material as desired. And our furniture uses
                                the
                                best materials and selected quality materials.
                            </div>
                            <button className="additional">
                                <a href="" className="#exe">See Materials</a>
                            </button>
                        </div>

                        <div className="material__info-img">
                            <img src={oboyImg} alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;