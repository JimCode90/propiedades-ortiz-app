import {useEffect, useState} from "react";


function PropertiesSection(){

    const [propiedades, setPropiedades] = useState([]);
    useEffect(() => {
        mostrarPropiedades()
    }, [])

    const mostrarPropiedades = () => {
        const ruta = "https://api-agencia-ortiz.herokuapp.com/api/propiedades-home"
        fetch(ruta)
            .then(resp => {
                return resp.json()
            })
            .then((data) => {
                setPropiedades(data)
            })
    }
    return(
        <div className="featured-properites-section section">
            <div className="container">

                <div className="row">
                    <div className="section-title text-center col mb-30 mb-md-20 mb-xs-20 mb-sm-20">
                        <h2>Propiedad en venta</h2>
                        <p> Propiedad en venta
                            una de las empresas inmobiliarias más populares de todo Perú. Tú puedes encontrar la propiedad de sus sueños o construir una propiedad con nosotros</p>
                    </div>
                </div>

                <div className="row">
                    {
                        propiedades.map(propiedad =>
                            <div className="col-lg-3 col-md-6 col-12" key={propiedad.id}>
                                <div className="single-property mt-30">
                                    <div className="property-img">
                                        <a href="#">
                                            <img src={propiedad.imagen } alt="" />
                                        </a>
                                        <span className="level-stryker">{ propiedad.tipo_propiedad.descripcion }</span>
                                    </div>
                                    <div className="property-desc">
                                        <h4><a href="properties-details.html">{ propiedad.nombre }</a></h4>
                                        <p>
                                            <span className="location">{ propiedad.direccion } <br /></span>
                                            <span className="property-info">{ propiedad.area } mts2, { propiedad.nro_bathroom } Baños, { propiedad.nro_dormitorios } dormitorios , { propiedad.nro_garage } Garage </span>
                                        </p>
                                        <div className="price-box">
                                            <p>Price S/. { propiedad.precio }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default PropertiesSection