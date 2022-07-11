import SearchOverlay from "../../common/SearchOverlay";
import BreadcrumbAreaSection from "../../common/BreadcrumbAreaSection";
import {useEffect, useState} from "react";
import PropiedasListNav from "./PropiedasListNav";
import {URL_API_BASE} from "../../utils";


function Propiedades(){
    const [propiedades, setPropiedades] = useState([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        obtenerPropiedades()
    }, [])


    const obtenerPropiedades = () => {
        let ruta = `${URL_API_BASE}/api/propiedades`
        fetch(ruta)
            .then(resp => {
                return resp.json()
            })
            .then((data) => {
                console.log("propiedades", data)
                setPropiedades(data)
            })
    }
    console.log({filtro})
    console.log(propiedades.filter(propiedad => propiedad.id_categoria_propiedad === filtro))
    return (
        <>
            <SearchOverlay />
            <BreadcrumbAreaSection titulo="Inicio" subtitulo="Propiedades" />
            <main className="page-content section">
                <div className="featured-properites-section section pt-110 pt-md-90 pt-sm-70 pt-xs-60 pb-110 pb-md-90 pb-sm-70 pb-xs-60">
                    <div className="container">
                        <PropiedasListNav setFiltro={setFiltro}/>
                        <div className="tab-content mt-65">
                            <div className="tab-pane active" id="all">
                                <div className="row">
                                    {

                                        propiedades.filter(propiedad => filtro === '' ? propiedad : propiedad.id_categoria_propiedad === filtro).map(propiedad =>
                                            <div className="col-lg-3 col-md-4 col-12" key={propiedad.id}>
                                                <div className="single-property mt-30">
                                                    <div className="property-img">
                                                        <a href="#">
                                                            <img src={ propiedad.imagen } alt="" />
                                                        </a>
                                                        <span className="level-stryker">{ propiedad.categoria.descripcion.toUpperCase()}</span>
                                                    </div>

                                                    <div className="property-desc">
                                                        <h4>
                                                            <a href="#">{ propiedad.nombre }</a>
                                                        </h4>
                                                        <p>
                                                            <span className="location">{ propiedad.direccion }</span><br />
                                                            <span
                                                                className="property-info">{ propiedad.area} mts2, { propiedad.nro_dormitorios } Dormitorios, { propiedad.nro_bathroom} Baños, { propiedad.nro_garage } Garage </span>

                                                        </p>
                                                        <div className="price-box">
                                                            <p>Price S/. { propiedad.precio }</p>

                                                        </div>
                                                        <div className="price-box">
                                                            <span className="font-weight-bold" style={{
                                                                color: 'red'
                                                            }}>{ propiedad.tipo_propiedad.descripcion.toUpperCase()}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
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

            </main>
        </>
    )
}

export default Propiedades;