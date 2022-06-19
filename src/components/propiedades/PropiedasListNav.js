import {useEffect, useState} from "react";


function PropiedasListNav(){
    const [tiposPropiedad, setTiposPropiedad] = useState([]);

    useEffect( () => {
        obtenerTiposPropiedades()
    }, [])

    const obtenerTiposPropiedades = () => {
        let  ruta = "http://api-agencia-propiedades.test/api/tipos-propiedad"
        fetch(ruta)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setTiposPropiedad(data)
            })
    }
    return (
        <div className="row">
            <div className="col">
                <ul className="properties-list nav justify-content-end" role="tablist">
                    <li className="active"><a className="active" href="#all" role="tab"
                                              data-toggle="tab">Todos</a></li>
                    {
                        tiposPropiedad.map(tipo =>
                            <li key={tipo.id}><a href="#" role="tab" data-toggle="tab">{ tipo.descripcion.toUpperCase() }</a></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default PropiedasListNav