import hero1 from '../../assets/img/hero/hero-1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

function HeroSection(){
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="hero-section section">
                <div className="hero-slider hero-slider-one">
                    <div className="hero-slide-item" style={{
                        backgroundImage: `url(${hero1})`
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <Slider {...settings}>
                                        <div className="hero-content">
                                            <h1>Desilva De Villa</h1>
                                            <h3 className="text-white mt-15">24 North Street, California, USA</h3>
                                            <p>3520 sqft, 5 Bed, 3 Bath, 2 Garage</p>
                                            <div className="hero-price">
                                                <h2 className="text-white">For Sale $54,000</h2>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection