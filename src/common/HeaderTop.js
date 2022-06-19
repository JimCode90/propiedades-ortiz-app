
function HeaderTop(){
    return (
        <div className="header-top bg-theme-two section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="header-top-info">
                            <p className="text-white">Contacto - <a href="tel:21548987658">21548 987 658</a></p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="header-buttons">
                            <a className="header-btn btn" href="#">Agregar Propiedad</a>
                            <a className="header-btn btn-border" href="#">Registro</a>
                            <a className="header-btn" href="#">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;