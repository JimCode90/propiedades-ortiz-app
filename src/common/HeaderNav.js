import logo from '../assets/img/logo.png'
import {Link} from "react-router-dom";

function HeaderNav(){
    return (
        <div className="header-section section">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-2 col-6">
                        <div className="header-logo">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-10 col-6">
                        <div className="header-mid_right-bar">
                            <nav className="main-menu d-lg-block d-none">
                                <ul>
                                    <li><Link to="/">Inicio</Link></li>

                                    <li className="has-dropdown"><Link to="/propiedades">Propiedades</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/propiedades">Propiedades</Link></li>
                                            <li><Link to="/propiedades-lista">Lista de Propiedades</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/agentes">Agentes</Link></li>
                                </ul>
                            </nav>
                            <div id="search-overlay-trigger" className="search-icon">
                                <a href="#"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu order-12 d-block d-lg-none col"></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav;