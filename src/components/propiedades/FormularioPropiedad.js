import {useState} from "react";

function FormularioPropiedad(
    {
        idPropiedad,
        agencias,
        categorias,
        tiposPropiedad,
        agencia,
        setAgencia,
        tipo,
        setTipo,
        categoria,
        setCategoria,
        nombre,
        setNombre,
        precio,
        setPrecio,
        direccion,
        setDireccion,
        latitud,
        setLatitud,
        longitud,
        setLongitud,
        dormitorios,
        setDormitorios,
        garages,
        setGarages,
        banios,
        setBanios,
        area,
        setArea,
        descripcion,
        setDescripcion,
        closeModal
    }
) {

    return (
        <>
            <>
                <div className="row">
                    <input type="hidden" value={idPropiedad}/>
                    <div className="form-group col-4">
                        <label>Agencia</label>
                        <select
                            className="nice-select"
                            onChange={(e) => setAgencia(e.target.value)}
                        >
                            <option>Seleccione...</option>
                            {
                                agencias.length > 0 && agencias.map((el) => (
                                    <option
                                        selected={agencia === el.id}
                                        value={el.id}
                                        key={el.id}
                                    >
                                        {el.nombre}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label>Tipo</label>
                        <select
                            className="nice-select"
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <option>Seleccione...</option>
                            {
                                tiposPropiedad.length > 0 && tiposPropiedad.map((el) => (
                                    <option
                                        selected={tipo === el.id}
                                        value={el.id}
                                        key={el.id}
                                    >
                                        {el.descripcion}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label>Categoría</label>
                        <select
                            className="nice-select"
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option>Seleccione...</option>
                            {
                                categorias.length > 0 && categorias.map((el) => (
                                    <option
                                        selected={categoria === el.id}
                                        value={el.id}
                                        key={el.id}
                                    >
                                        {el.descripcion}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label>Nombre de la propiedad</label>
                        <input
                            type="text"
                            placeholder="Ingrese el nombre de la propiedad"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Precio</label>
                        <input
                            type="text"
                            placeholder="Ingrese el precio de la propiedad"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Dirección</label>
                        <input
                            type="text"
                            placeholder="Ingrese la dirección de la propiedad"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Latitud</label>
                        <input
                            type="text"
                            placeholder="Ingrese la latitud de la propiedad"
                            value={latitud}
                            onChange={(e) => setLatitud(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Longitud</label>
                        <input
                            type="text"
                            placeholder="Ingrese la longitud de la propiedad"
                            value={longitud}
                            onChange={(e) => setLongitud(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Nro. Dormitorios</label>
                        <input
                            type="number"
                            placeholder="Ingrese nro. de dormitorios"
                            value={dormitorios}
                            onChange={(e) => setDormitorios(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Nro. Baños</label>
                        <input
                            type="number"
                            placeholder="Ingrese nro. de baños"
                            value={banios}
                            onChange={(e) => setBanios(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Nro. garages</label>
                        <input
                            type="number"
                            placeholder="Ingrese nro. de garages"
                            value={garages}
                            onChange={(e) => setGarages(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Area</label>
                        <input
                            type="text"
                            placeholder="Ingrese el valor del área de la propiedad"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-12">
                        <label>Descripción</label>
                        <textarea
                            cols="30"
                            rows="10"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button style={{
                            padding: ".8em",
                            backgroundColor: "#25a5de",
                            borderRadius: "10px",
                            border: "none"
                        }}>Enviar
                        </button>
                        <button style={{
                            padding: ".8em",
                            backgroundColor: "#610717",
                            color: "white",
                            borderRadius: "10px",
                            border: "none"
                        }} onClick={closeModal}>Cancelar
                        </button>
                    </div>
                </div>
            </>
        </>
    )
}

export default FormularioPropiedad