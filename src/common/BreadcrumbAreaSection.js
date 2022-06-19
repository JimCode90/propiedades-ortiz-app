
import breadcrumb from '../assets/img/bg/breadcrumb.jpg'
function BreadcrumbAreaSection({titulo, subtitulo}) {
    return (
        <div className="breadcrumb-area section" style={{
            backgroundImage : `url(${breadcrumb})`
        }}>
            <div className="container">
                <div className="breadcrumb pt-75 pb-75 pt-sm-70 pb-sm-40 pt-xs-70 pb-xs-40">
                    <div className="row">
                        <div className="col">
                            <h2>{ subtitulo }</h2>
                            <ul className="breadcrumb-list">
                                <li className="breadcrumb-item"><a href="index.html">{ titulo }</a></li>
                                <li className="breadcrumb-item active">{ subtitulo }</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BreadcrumbAreaSection