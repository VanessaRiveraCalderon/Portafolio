import './Home.css';
import{
    Link
}from "react-router-dom";

function Home(){
    return(
            <div className="conti">
            <h1 className="tipri">Bienvenido</h1>
            <center>
                <Link to="/portafolio" className="link">Ir al Portafolio</Link><br/>
                <img src="https://cdn.pixabay.com/photo/2015/12/29/19/46/dog-1113336_960_720.png" className="ball"></img>
            </center>
            </div>
    );
}

export default Home;