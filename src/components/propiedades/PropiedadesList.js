import {useEffect, useState} from "react";
import SearchOverlay from "../../common/SearchOverlay";
import BreadcrumbAreaSection from "../../common/BreadcrumbAreaSection";
import PropiedasListNav from "./PropiedasListNav";
import {URL_API_BASE} from "../../utils";


function PropiedadesList(){
    const [propiedades, setPropiedades] = useState([]);
    const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);
    const [nombrePropiedad, setNombrePropiedad] = useState("");

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
                setPropiedades(data)
                document.getElementById("btnBuscar").click();
            })
    }

    const buscar = () => {
        let datosFiltrados = propiedades.filter((item) => {
            console.log({item})
                return nombrePropiedad !=="" ? item["nombre"].indexOf(nombrePropiedad) > 0 : true
            }
        )
        console.log(datosFiltrados)
        setPropiedadesFiltradas(datosFiltrados)
    }
    
    return (
        <>
            <SearchOverlay />
            <BreadcrumbAreaSection titulo="Inicio" subtitulo="Propiedades" />
            <main className="page-content section">
                <div className="featured-properites-section section pt-110 pt-md-90 pt-sm-70 pt-xs-60 pb-110 pb-md-90 pb-sm-70 pb-xs-60">
                    <div className="container">
                        <PropiedasListNav />
                        <div className="tab-content mt-15">
                            <div className="tab-pane active" id="all">
                                <div className="row">
                                    <div className="col-12 mt-65">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className='form-control'
                                                placeholder='Buscar Propiedad'
                                                value={nombrePropiedad}
                                                onChange={(e) => setNombrePropiedad(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 properties-list nav justify-content-end" role="tablist">
                                            <button
                                                style={{
                                                    padding: ".8em",
                                                    backgroundColor: "#25a5de",
                                                    borderRadius: "10px",
                                                    border: "none"
                                                }}
                                                id="btnBuscar"
                                                data-toggle="tab"
                                                onClick={() => buscar()}
                                            >
                                                Consultar
                                            </button>
                                        </div>
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Dirección</th>
                                                <th scope="col">Precio</th>
                                                <th scope="col">Agencia</th>
                                                <th scope="col">Acciones</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                propiedadesFiltradas.map(propiedad =>
                                                    <tr key={propiedad.id}>
                                                        <th scope="row">{ propiedad.id }</th>
                                                        <td>{ propiedad.nombre }</td>
                                                        <td>{ propiedad.direccion }</td>
                                                        <td>{ propiedad.precio }</td>
                                                        <td>{ propiedad.agencia.nombre }</td>
                                                        <td>
                                                            <span className="m-2"><i className="fa fa-eye"></i></span>
                                                            <span className="m-2"><i className="fa fa-edit"></i></span>
                                                            <span className="m-2"><i className="fa fa-trash"></i></span>
                                                        </td>
                                                    </tr>
                                                )
                                            }

                                            </tbody>
                                        </table>
                                    </div>
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

export default PropiedadesList