import './Contact.css';
import github from './github.png';
import{
    Link
}from "react-router-dom";

function Contact(){
    return(
        <div className="contacto">
            <h2>Perfil</h2>
            <hr/>
            <p>Soy una persona responsable, organizada, puntual, comprometida con sus labores, 
            que busca aprender siempre de cada situacion que se presenta, como una oportunidad para crecer,
            tanto en el ambito personal, como en lo laboral.
            </p>
            
            <div className="cont">
            <h2 >Contacto</h2>
                <hr/>
                <div className="info"><i class="far fa-envelope"></i>Vrivera927@misena.edu.co</div>
                <div className="info"><i class="fas fa-phone-alt"></i>3182040160</div>
                <div className="info"><i class="fas fa-street-view"></i>Cra 145 Nº 144 - 09</div>
            </div>

            <div className="refe">
                <h2 className="ref">Proyectos</h2>
                <center>
                <div className="enlaces">
                    <a href="https://github.com/VanessaRiveraCalderon">
                        <img src={github} alt="Github"/>
                    </a>
                </div>
                <div className="link">
                <Link to="/info">Mas información</Link>
                </div>
                <div className="link">
                <Link to="/">Volver</Link>
                </div>
                </center>
            </div>
        </div>
    );
}

export default Contact;