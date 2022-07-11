import {useEffect, useState} from "react";


function PropiedadesTable(props) {

    const [propiedades, setPropiedades] = useState([]);
    const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);
    const [nombrePropiedad, setNombrePropiedad] = useState("");
    useEffect(() => {
        setPropiedades(props.propiedades)
    }, [props.propiedades]);


    return (
        <>
            <div className="mb-3">
                <input
                    type="text"
                    className='form-control'
                    placeholder='Buscar Propiedad'
                    value={nombrePropiedad}
                    onChange={(e) => setNombrePropiedad(e.target.value)}
                />
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
                    propiedades.filter(propiedad => propiedad.nombre.toLowerCase().includes(nombrePropiedad)).map(propiedad =>
                        <tr key={propiedad.id}>
                            <th scope="row">{ propiedad.id }</th>
                            <td>{ propiedad.nombre }</td>
                            <td>{ propiedad.direccion }</td>
                            <td>{ propiedad.precio }</td>
                            <td>{ propiedad.agencia.nombre }</td>
                            <td>
                                <span className="m-2"><i className="fa fa-edit" onClick={() => props.openModalActualizar(propiedad)}></i></span>
                                <span className="m-2"><i className="fa fa-trash" onClick={() => props.openModalEliminar(propiedad)}></i></span>
                            </td>
                        </tr>
                    )
                }

                </tbody>
            </table>
        </>
    )
}

export default PropiedadesTable