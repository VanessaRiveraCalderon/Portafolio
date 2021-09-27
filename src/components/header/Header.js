import './Header.css'
import foto from './foto.jpeg'
function Header(){
    return (
        <header>
            <div className="foto">
                <img src={foto} alt="foto Vane"></img>
                <h1 className="nombre"><span className="nom">Vanessa</span> Rivera Calderón</h1>
                <h3>Desarrolladora De Sistemas</h3>
            </div>

            <div className="infoe">
            <i class="fas fa-user-graduate"></i><h2 className="titlab">Educación</h2>
                <div className="estudio">
                    <h3>2019 - 2021</h3>
                    <h4>Sena CGMLTI</h4>
                    <p>Tecnico en programacion de software</p>
                </div>

                <div className="estudio">
                    <h3>2021 - 2022</h3>
                    <h4>Sena CGMLTI</h4>
                    <p>Tecnologo en analisis y desarrollo de sistemas de información</p>
                </div>
                <hr/>
            </div>
        </header>
    );
}

export default Header;