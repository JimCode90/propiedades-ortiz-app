import about1 from "../../assets/img/about/about-1.jpg";
import about2 from "../../assets/img/about/about-2.jpg";
import feature1 from "../../assets/img/icons/feature-1.png";
import feature2 from "../../assets/img/icons/feature-2.png";
import feature3 from "../../assets/img/icons/feature-3.png";
import feature4 from "../../assets/img/icons/feature-4.png";


function AboutSection(){
    return (
        <div className="about-section section pt-65 pb-75 pt-md-55 pb-md-55 pt-sm-45 pb-sm-45 pt-xs-25 pb-xs-25">
            <div className="container">
                <div className="row align-items-center fix">

                    <div className="col-lg-4 col-md-5 col-12 offset-lg-1 mb-15 mt-35">
                        <div className="about-properties-area">
                            <div className="about-slider_bg"></div>
                            <div className="about-properties-slider">
                                {/*<div className="about-properties-item">*/}
                                {/*    <div className="image"><img src={ about1 } alt="" /></div>*/}
                                {/*</div>*/}

                                <div className="about-properties-item">
                                    <div className="image"><img src={ about2 } alt="" /></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="about-content col-lg-6 col-md-7 col-12 ml-auto mt-35 pl-lg-0">
                        <h2>Nos comprometemos con trabajo de calidad...</h2>
                        <p>Ortiz es una de las empresas de bienes raíces más populares en todo Estados Unidos. Puede encontrar la propiedad de sus sueños o construir una propiedad </p>

                        <div className="row row-25">

                            <div className="about-feature col-md-6 col-sm-6 col-12 mb-35">
                                <div className="icon"><img src={ feature1 } alt="" /></div>
                                <div className="content">
                                    <h4>Costo Minimo</h4>
                                    <p>Proporcione un bajo costo que ayude a todos a construir más bienes raíces</p>
                                </div>
                            </div>

                            <div className="about-feature col-md-6 col-sm-6 col-12 mb-35">
                                <div className="icon"><img src={ feature2 } alt="" /></div>
                                <div className="content">
                                    <h4>Mejor mercado</h4>
                                    <p>Privide low cost that help all more build real estate</p>
                                </div>
                            </div>

                            <div className="about-feature col-md-6 col-sm-6 col-12 mb-35">
                                <div className="icon"><img src={ feature3 } alt="" /></div>
                                <div className="content">
                                    <h4>Fácil de buscar</h4>
                                    <p>Puede encontrar su propiedad de manera simple y fácil.</p>
                                </div>
                            </div>

                            <div className="about-feature col-md-6 col-sm-6 col-12 mb-35">
                                <div className="icon"><img src={ feature4 } alt="" /></div>
                                <div className="content">
                                    <h4>Seguridad</h4>
                                    <p>Navegue con seguridad</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSection