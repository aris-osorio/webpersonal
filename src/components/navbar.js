import { Link } from "react-scroll";
import Logo from '../media/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
export default function NavBar() {
    return (
        <nav class="navbar fixed-top">
            <div class="col-2">
                <span class="navbar-brand mb-0 h1">
                    <img src={Logo} alt="logo" width="20" height="20" className="pb-1" />&nbsp;&nbsp;arisoso.com
                </span>
            </div>
            <div className="col-8 d-flex justify-content-center">
                <div className="d-flex w-75 justify-content-around">
                    <div className="nav-item">
                        <Link activeClass="active" to="inicio" spy={true} smooth={true} duration={500}>
                            Inicio
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link activeClass="active" to="acerca" spy={true} smooth={true} duration={500}>
                            Perfil
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link activeClass="active" to="proyectos" spy={true} smooth={true} duration={500}>
                            Proyectos
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link activeClass="active" to="contactame" spy={true} smooth={true} duration={500}>
                            Contactame
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-2 d-flex justify-content-end">     
                <FontAwesomeIcon icon={faCircle} className="fa-2x yellow icon"  />
            </div>
        </nav>
    )
}