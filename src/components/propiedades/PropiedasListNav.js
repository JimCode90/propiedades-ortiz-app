import {useEffect, useState} from "react";
import {URL_API_BASE} from "../../utils";


function PropiedasListNav({ setFiltro }){
    const [categorias, setCategorias] = useState([]);
    useEffect( () => {
        obtenerCategorias()
    }, [])


    const obtenerCategorias = () => {
        let ruta = `${URL_API_BASE}/api/categorias`
        fetch(ruta)
            .then(resp => {
                return resp.json()
            })
            .then((data) => {
                setCategorias(data)
            })
    }

    return (
        <div className="row">
            <div className="col-12">
                <ul className="properties-list nav justify-content-center" role="tablist">
                    {
                        categorias.map(cat =>
                            <li key={cat.id}><a onClick={() => setFiltro(cat.id)} role="tab" data-toggle="tab">{ cat.descripcion.toUpperCase() }</a></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default PropiedasListNav