import './Info.css';
import{
    Link
}from "react-router-dom";
import foto from './info.png'
function Info(){
    return(
        <div className="contFor">
            <center>
            <h1><splice className="blanco">Otras Formaciones</splice></h1>
            <h4>Federación internacional de Fe Y Alegria y formacion para el trabajo</h4>
            </center>
            <h4 className="blanco">Capacitacion de desarrollo y Cursos de formación:</h4>
            <h4 className="blanco">2018 - 2020</h4>
            <li>Cumplimiento de normas y tareas</li>
            <li>Razonamiento matematico</li>
            <li>Tolerancia a la frustración</li>
            <li>Iniciativa y toma de decisiones</li>
            <li>Comunicación</li>
            <li>Competencias digitales</li>
            <center>
            <img src={foto} className="studen"></img>
            <div className="link">
                <Link to="/portafolio">Volver</Link>
            </div>
            </center>
        </div>
    );
}

export default Info;