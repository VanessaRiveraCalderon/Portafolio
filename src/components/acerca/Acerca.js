import './Acerca.css';
function Acerca(){
    return(
        <div className="acerca">
            <div className="infolab">
            <div className="texto">
            <i class="fas fa-briefcase"></i><h2 className="titlab">Experiencia Laboral</h2>
                <div className="estudio">
                    <h3>Sistema de información academico</h3>
                    <h4>2019 - 2021</h4>
                    <li>Desarrollo de un sistema de informacion academico para el jardin infantil Mi bosque encantado</li>
                    <li>Gestión de usuarios</li>
                    <li>Verificación y registro de asistencias</li>
                    <li>Organizacion y planeacion de actividades recreativas</li>
                </div>
            </div>
            
            <i class="fas fa-star"></i><h2 className="titlab">Habilidades Profesionales</h2>
            <div className="habilidades">
                <li>Conocimiento en gestión de base de datos</li>
                <li>Conocimiento en gestores de BD Mysql y Sql Server</li>
                <li>Conocimiento en lenguajes de programación</li>
                <li>Php, Java, JavaScript</li>
                <li>Conocimiento FrondEnd, Html, Css y Boostrap</li>
            </div>
            
            <i class="fas fa-heart"></i><h2 className="titlab">Cualidades</h2>
            <div className="izq"> 
            <div className="info"><i class="fas fa-globe"></i>Escucha</div>
            <div className="info"><i class="fas fa-globe"></i>Creatividad</div>
            <div className="info"><i class="fas fa-globe"></i>Resiliencia</div>
            </div>
            <div className="der">
            <div className="info"><i class="fas fa-globe"></i>Disciplina</div>
            <div className="info"><i class="fas fa-globe"></i>Empatia</div>
            <div className="info"><i class="fas fa-globe"></i>Reflexión</div>
            </div>
            </div>
        </div>
    )
}
export default Acerca;