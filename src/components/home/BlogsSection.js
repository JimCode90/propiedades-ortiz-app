
import blog1 from '../../assets/img/blog/blog-s-01.jpg'
import {useEffect, useState} from "react";

function BlogsSection(){

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        mostrarPosts()
    }, [])

    const mostrarPosts = () => {
        let ruta = "https://api-agencia-ortiz.herokuapp.com/api/posts-home"
        fetch(ruta)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }
    return (
        <>
            <div
                className="latest-blog-section section pt-160 pt-md-140 pt-sm-120 pt-xs-110 pb-110 pb-md-90 pb-sm-70 pb-xs-60">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center col mb-30 mb-md-20 mb-xs-20 mb-sm-20">
                            <h2>Últimas publicaciones</h2>
                            <p>Una de las empresas inmobiliarias más populares de todo Perú. Tu puedes encontrar tu sueño
                                propiedad o construir una propiedad con nosotros</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            blogs.map(blog =>
                                <div className="col-lg-4 col-md-6 mt-30" key={blog.id}>
                                    <div className="single-latest-blog">
                                        <div className="latest-blog-image">
                                            <a href="#"><img src={blog.image} alt="" /></a>
                                        </div>
                                        <div className="latest-blog-contents">
                                            <h4><a href="#">{ blog.titulo }</a></h4>
                                            <p><span>{ blog.created_at }</span></p>
                                            <p>{ blog.resumen }</p>
                                            <a className="read-more" href="#">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogsSection