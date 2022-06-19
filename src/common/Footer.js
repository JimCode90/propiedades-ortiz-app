import React from "react";
import imgFooter from '../assets/img/bg/footer.jpg'
import {Link} from "react-router-dom";
function Footer (){
    return (
        <footer className="footer-section section">
            <div className="footer-top pt-70 pt-md-50 pt-sm-30 pt-xs-20 pb-100 pb-md-90 pb-sm-70 pb-xs-60"
                style={{
                    background: `url(${imgFooter})`
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-coustom-3 col-md-6 col-lg-3 col-12 mt-40">
                            <div className="footer-widget">
                                <div className="footer-title">
                                    <h3>Sobre Nosotros</h3>
                                </div>
                                <div className="footer-info">
                                    <p>Ortiz es la mejor y más popular propiedad inmobiliaria para usted</p>
                                    <div className="newsletter-box">

                                        <form id="mc-form" className="mc-form footer-newsletter">
                                            <input id="mc-email" type="email" autoComplete="off"
                                                   placeholder="Envianos un mensaje"/>
                                            <button id="mc-submit"><i className="fa fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                    <div className="mailchimp-alerts text-centre">
                                        <div className="mailchimp-submitting"></div>
                                        <div className="mailchimp-success"></div>
                                        <div className="mailchimp-error"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-coustom-3 col-md-6 col-lg-3 col-12 mt-40">
                            <div className="footer-widget">
                                <div className="footer-title">
                                    <h3>Post Populares</h3>
                                </div>
                                <div className="footer-info">
                                    <div className="single-list">
                                        <h4>Duplex Villa Design</h4>
                                        <p>Lorem ipsum dolor sit amet, tur acinglit sed do eius </p>
                                    </div>
                                    <div className="single-list">
                                        <h4>Duplex Villa Design</h4>
                                        <p>Lorem ipsum dolor sit amet, tur acinglit sed do eius </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-coustom-3 col-md-6 col-lg-3 col-12 mt-40">
                            <div className="footer-widget">
                                <div className="footer-title">
                                    <h3>Enlace rápido</h3>
                                </div>
                                <div className="footer-info">
                                    <ul className="footer-list">
                                        <li><Link to="/">Inicio</Link></li>
                                        <li><Link to="/propiedades">Propiedades</Link></li>
                                        <li><Link to="/agentes">Agentes</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-coustom-3 col-md-6 col-lg-3 col-12 mt-40">
                            <div className="footer-widget">
                                <div className="footer-title">
                                    <h3>Contactanos</h3>
                                </div>
                                <div className="footer-info">
                                    <ul className="footer-list">
                                        <li>
                                            <div className="contact-text">
                                                <i className="glyph-icon flaticon-placeholder"></i>
                                                <p>256, 1st AVE, Manchester <br />125 , Noth England</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-text">
                                                <i className="glyph-icon flaticon-call"></i>
                                                <p>
                                                    <span>Telephone : <a href="tel:1234566789"> +88 (012) 356 958 45</a></span>
                                                    <span>Telephone : <a href="tel:1234566789"> +88 (012) 356 958 45</a></span>
                                                </p>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-text">
                                                <i className="glyph-icon flaticon-earth"></i>
                                                <p>
                                                    <span>Email : <a href="mailto:info@example.com">info@example.com</a></span>
                                                    <span>Web : <a
                                                        href="https://hasthemes.com/">www.example.com</a></span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Copyright &copy; Ortiz. <a href="https://hasthemes.com/">Todos los derechos reservados.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;