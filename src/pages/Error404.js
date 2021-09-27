import './Error404.css';
import{
    Link
}from "react-router-dom";
function Error404(){
    return(
        <div className="container">
            <h1 className="no">Pagina no encontrada</h1>
            <center>
            <div className="link">
                <Link to="/portafolio">Volver</Link>
            </div>
            </center>
            <img class="error" src="https://cdn.dribbble.com/users/1529800/screenshots/5025294/ae-404_2_____.gif"></img>
        </div>
    );
}

export default Error404;