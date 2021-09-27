import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Acerca from '../components/acerca/Acerca';

function Portafolio() {
  return (
    <div className="container">
      <Header/>
      <section id="informacion">
        <Contact/>
        <Acerca/>
      </section>
    </div>
  );
}

export default Portafolio;