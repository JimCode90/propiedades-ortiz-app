import {useEffect, useState} from "react";
import Modal from 'react-modal';
import SearchOverlay from "../../common/SearchOverlay";
import BreadcrumbAreaSection from "../../common/BreadcrumbAreaSection";
import PropiedasListNav from "./PropiedasListNav";
import {URL_API_BASE} from "../../utils";
import PropiedadesTable from "./PropiedadesTable";
import FormularioPropiedad from "./FormularioPropiedad";


const estilosModalEliminar = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function PropiedadesList(){
    const [propiedades, setPropiedades] = useState([]);
    const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);
    const [agencias, setAgencias] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [tiposPropiedad, setTiposPropiedad] = useState([]);

    //DATOS DEL FORMULARIO
    const [idPropiedad, setIdPropiedad] = useState('');
    const [agencia, setAgencia] = useState('');
    const [tipo, setTipo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [direccion, setDireccion] = useState('');
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [dormitorios, setDormitorios] = useState(0);
    const [garages, setGarages] = useState(0);
    const [banios, setBanios] = useState(0);
    const [area, setArea] = useState('');
    const [descripcion, setDescripcion] = useState('');

    //MODALES
    
    const [modalRegistro, setModalRegistro] = useState(false);
    const [modalActualizar, setModalActualizar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    useEffect(() => {
        obtenerPropiedades()
        obtenerAgencias()
        obtenerCategorias()
        obtenerTiposPropiedades()
    }, [])


    const obtenerPropiedades = () => {
        let ruta = `${URL_API_BASE}/api/propiedades`
        fetch(ruta)
            .then(resp => {

                return resp.json()
            })
            .then((data) => {
                console.log({data})
                setPropiedades(data)
                //document.getElementById("btnBuscar").click();
            })
    }

    const obtenerAgencias = () => {
        let ruta = `${URL_API_BASE}/api/agencias`
        fetch(ruta)
            .then(resp => {
                return resp.json()
            })
            .then((data) => {
                setAgencias(data)
            })
    }

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

    const obtenerTiposPropiedades = () => {
        let  ruta = `${URL_API_BASE}/api/tipos-propiedad`
        fetch(ruta)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setTiposPropiedad(data)
            })
    }

    const agregarPropiedad = (event) => {
        event.preventDefault();
        closeModalRegistro()
        let ruta = `${URL_API_BASE}/api/propiedades`
        const formData = new FormData()
        formData.append('tipo', tipo)
        formData.append('categoria', categoria)
        formData.append('agencia', agencia)
        formData.append('nombre', nombre)
        formData.append('precio', precio)
        formData.append('descripcion', descripcion)
        formData.append('direccion', direccion)
        formData.append('lat', latitud)
        formData.append('lng', longitud)
        formData.append('dormitorios', dormitorios)
        formData.append('banios', banios)
        formData.append('garages', garages)
        formData.append('area', area)
        fetch(ruta, {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.json();
        }).then(data => {
            obtenerPropiedades()
            alert("Se ha registrado la propiedad " + nombre + " de manera correcta.")

        })

    }

    const actualizarPropiedad = (event) => {
        event.preventDefault();
        closeModalActualizar()
        let ruta = `${URL_API_BASE}/api/propiedades-actualizar`
        const formData = new FormData()
        formData.append('id', idPropiedad)
        formData.append('tipo', tipo)
        formData.append('categoria', categoria)
        formData.append('agencia', agencia)
        formData.append('nombre', nombre)
        formData.append('precio', precio)
        formData.append('descripcion', descripcion)
        formData.append('direccion', direccion)
        formData.append('lat', latitud)
        formData.append('lng', longitud)
        formData.append('dormitorios', dormitorios)
        formData.append('banios', banios)
        formData.append('garages', garages)
        formData.append('area', area)
        fetch(ruta, {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.json();
        }).then(data => {
            obtenerPropiedades()
            alert("Se ha editado la propiedad " + nombre + " de manera correcta.")

        })

    }


    const eliminarPropiedad = (event) => {
        event.preventDefault();
        closeModalEliminar()
        let ruta = `${URL_API_BASE}/api/propiedades-eliminar`
        const formData = new FormData()
        formData.append('id', idPropiedad)
        fetch(ruta, {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.json();
        }).then(data => {
            obtenerPropiedades()
            alert("Se ha eliminado la propiedad " + nombre + " de manera correcta.")

        })

    }


    function openModalRegistro() {
        setIdPropiedad('')
        setAgencia('')
        setTipo('')
        setCategoria('')
        setNombre('')
        setPrecio('')
        setDireccion('')
        setLatitud('')
        setLongitud('')
        setDormitorios('')
        setGarages('')
        setBanios('')
        setArea('')
        setDescripcion('')
        setModalRegistro(true);
    }

    function closeModalRegistro() {
        setModalRegistro(false);
    }

    function openModalActualizar(item) {
        console.log({item})
        setIdPropiedad(item.id)
        setAgencia(item.id_agencia)
        setTipo(item.id_tipo_propiedad)
        setCategoria(item.id_categoria_propiedad)
        setNombre(item.nombre)
        setPrecio(item.precio)
        setDireccion(item.direccion)
        setLatitud(item.lat)
        setLongitud(item.lng)
        setDormitorios(item.nro_dormitorios)
        setGarages(item.nro_garage)
        setBanios(item.nro_bathroom)
        setArea(item.area)
        setDescripcion(item.descripcion)
        setModalActualizar(true);
    }

    function closeModalActualizar() {
        setModalActualizar(false);
    }
    
    function openModalEliminar(item){
        setIdPropiedad(item.id)
        setNombre(item.nombre)
        setModalEliminar(true)
    }
    
    function closeModalEliminar(){
        setModalEliminar(false)
    }

    return (
        <>
            <SearchOverlay />
            <BreadcrumbAreaSection titulo="Inicio" subtitulo="Propiedades" />
            <main className="page-content section">
                <div className="featured-properites-section section pt-110 pt-md-90 pt-sm-70 pt-xs-60 pb-110 pb-md-90 pb-sm-70 pb-xs-60">
                    <div className="container">
                        <div className="tab-content mt-15">
                            <div className="tab-pane active" id="all">
                                <div className="row">
                                    <div className="col-12 mt-65">
                                        <div className="mb-3 text-center">
                                            <button
                                                style={{
                                                    padding: ".8em",
                                                    backgroundColor: "#610717",
                                                    color: "white",
                                                    borderRadius: "10px",
                                                    border: "none"
                                                }}
                                                onClick={openModalRegistro}
                                            >
                                                <i className="fa fa-edit"></i>
                                                Añadir propiedad
                                            </button>
                                        </div>
                                        <PropiedadesTable propiedades={propiedades} openModalActualizar={openModalActualizar} openModalEliminar={openModalEliminar} />
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
            <Modal isOpen={modalRegistro} onRequestClose={closeModalRegistro} contentLabel="Modal Registrar" ariaHideApp={false} >

                <div className="text-center">
                    <h2>REGISTRAR PROPIEDAD</h2>
                    Complete los siguientes campos
                </div>
                <form className="mt-4 property-search-wrap" onSubmit={(e) => agregarPropiedad(e)}>
                    <FormularioPropiedad
                        idPropiedad={idPropiedad}
                        agencias={agencias}
                        categorias={categorias}
                        tiposPropiedad={tiposPropiedad}
                        agencia={agencia}
                        setAgencia={setAgencia}
                        nombre={nombre}
                        setNombre={setNombre}
                        tipo={tipo}
                        setTipo={setTipo}
                        categoria={categoria}
                        setCategoria={setCategoria}
                        precio={precio}
                        setPrecio={setPrecio}
                        direccion={direccion}
                        setDireccion={setDireccion}
                        latitud={latitud}
                        setLatitud={setLatitud}
                        longitud={longitud}
                        setLongitud={setLongitud}
                        dormitorios={dormitorios}
                        setDormitorios={setDormitorios}
                        garages={garages}
                        setGarages={setGarages}
                        banios={banios}
                        setBanios={setBanios}
                        area={area}
                        setArea={setArea}
                        descripcion={descripcion}
                        setDescripcion={setDescripcion}
                        closeModal={closeModalRegistro}
                    />
                </form>
            </Modal>

            <Modal isOpen={modalActualizar} onRequestClose={closeModalActualizar} contentLabel="Modal Actualizar" ariaHideApp={false} >

                <div className="text-center">
                    <h2>EDITAR PROPIEDAD</h2>
                    Editar Propiedad
                </div>
                <form className="mt-4 property-search-wrap" onSubmit={(e) => actualizarPropiedad(e)}>
                    <FormularioPropiedad
                        idPropiedad={idPropiedad}
                        agencias={agencias}
                        categorias={categorias}
                        tiposPropiedad={tiposPropiedad}
                        agencia={agencia}
                        setAgencia={setAgencia}
                        nombre={nombre}
                        setNombre={setNombre}
                        tipo={tipo}
                        setTipo={setTipo}
                        categoria={categoria}
                        setCategoria={setCategoria}
                        precio={precio}
                        setPrecio={setPrecio}
                        direccion={direccion}
                        setDireccion={setDireccion}
                        latitud={latitud}
                        setLatitud={setLatitud}
                        longitud={longitud}
                        setLongitud={setLongitud}
                        dormitorios={dormitorios}
                        setDormitorios={setDormitorios}
                        garages={garages}
                        setGarages={setGarages}
                        banios={banios}
                        setBanios={setBanios}
                        area={area}
                        setArea={setArea}
                        descripcion={descripcion}
                        setDescripcion={setDescripcion}
                        closeModal={closeModalActualizar}
                    />
                </form>
            </Modal>

            <Modal
                style={estilosModalEliminar}
                isOpen={modalEliminar}
                onRequestClose={closeModalEliminar}
                contentLabel="Modal Eliminar"
                ariaHideApp={false} >

                <div className="text-center">
                    <h2>ELIMINAR PROPIEDAD</h2>
                    Estas a punto de eliminar la propiedad { nombre }
                </div>
                <form className="mt-4 property-search-wrap" onSubmit={(e) => eliminarPropiedad(e)}>
                    <div className="form-group text-center">
                        <button style={{
                            padding: ".8em",
                            backgroundColor: "#610717",
                            color: "white",
                            borderRadius: "10px",
                            border: "none"
                        }}>Eliminar</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default PropiedadesList