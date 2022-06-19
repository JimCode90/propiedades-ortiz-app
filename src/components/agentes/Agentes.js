import SearchOverlay from "../../common/SearchOverlay";
import BreadcrumbAreaSection from "../../common/BreadcrumbAreaSection";
import {useEffect, useState} from "react";

function Agentes(){

    const [agentes, setAgentes] = useState([]);

    useEffect(() => {
        obtenerAgentes()
    }, []);


    const obtenerAgentes = () => {
        let ruta = "http://api-agencia-propiedades.test/api/agentes"
        fetch(ruta)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setAgentes(data)
            })
    }

    return (
        <>
            <SearchOverlay />
            <BreadcrumbAreaSection titulo="Inicio" subtitulo="Agentes" />
            <div
                className="our-agents-section section pb-110 pb-md-90 pb-xs-60 pb-sm-70 pt-80 pt-md-60 pt-sm-40 pt-xs-30">
                <div className="container">
                    <div className="row">
                        {
                            agentes.map(agente =>
                                <div className="col-lg-3 col-md-6 mt-30" key={agente.id}>
                                    <div className="our-agents">
                                        <div className="agents-image">
                                            <img src={ agente.foto } alt="" />

                                            <div className="agents-info">
                                                <h3>Ver Detalles</h3>
                                                <div className="agents-social">
                                                    <ul>
                                                        <li><a href={ agente.url_facebook }><i
                                                            className="fa fa-facebook"></i></a></li>
                                                        <li><a href={ agente.url_tweeter }><i className="fa fa-twitter"></i></a>
                                                        </li>
                                                        <li><a href={ agente.url_linkedin }><i
                                                            className="fa fa-linkedin"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="agents-contents">
                                            <h4>{ agente.nombres } { agente.apellidos }</h4>
                                            <p>{ agente.profesion }</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    <div className="row pt-40">
                        <div className="col">
                            <ul className="page-pagination">
                                <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                <li className="active"><a href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li><a href="#">03</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Agentes