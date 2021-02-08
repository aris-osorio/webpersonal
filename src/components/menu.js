import { Link } from "react-scroll";
import Logo from '../media/logo.svg';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function App() {
    const redireccionar = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div id="menu" className="bg-black fixed-top">
            <div className="items-menu">
                <div className="row p-2">
                    <div className="col-6">
                        <span className="navbar-brand mb-0 h1 ml-4">
                            <img src={Logo} alt="logo" width="20" height="20" className="pb-1" />&nbsp;&nbsp;arisoso.com
                        </span>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <FontAwesomeIcon icon={faTimes} className="fa-2x icon yellow btn-cerrar mr-4 mt-2" />
                    </div>
                </div>
                <div className="row pt-5 pb-5">
                    <div className="bg-links links-menu nav-item col-12 p-4 d-flex justify-content-center btn-cerrar">
                        <Link className="Link" activeClass="active" to="inicio" spy={true} smooth={true} duration={500}>
                            Inicio
                        </Link>
                    </div>
                    <div className="links-menu nav-item col-12 p-4 d-flex justify-content-center btn-cerrar">
                        <Link className="Link" activeClass="active" to="acerca" spy={true} smooth={true} duration={500}>
                            Perfil
                        </Link>
                    </div>
                    <div className="links-menu nav-item col-12 p-4 d-flex justify-content-center btn-cerrar">
                        <Link className="Link" activeClass="active" to="proyectos" spy={true} smooth={true} duration={500}>
                            Proyectos
                        </Link>
                    </div>
                    <div className="links-menu nav-item col-12 p-4 d-flex justify-content-center btn-cerrar">
                        <Link className="Link" activeClass="active" to="contactame" spy={true} smooth={true} duration={500}>
                            Contactame
                        </Link>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center pt-2">
                    <div className="pr-4">
                        <FontAwesomeIcon icon={faLinkedinIn} className="fa-4x icon" onClick={() => redireccionar('https://www.linkedin.com/in/aris-osorio/')} />
                    </div>
                    <div className="pl-4">
                        <FontAwesomeIcon icon={faGithub} className="fa-4x icon" onClick={() => redireccionar('https://github.com/aris-osorio')} />
                    </div>
                </div>
            </div>
        </div>
    )
}