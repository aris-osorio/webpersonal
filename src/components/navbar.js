import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <Navbar id="nav" collapseOnSelect expand="lg" variant="dark" className="" transition="fade">
            <div className="col-4">
                <Navbar.Brand href="/" className="julius yellow">Aris</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav id ="NavContainer" className="col-6 d-flex justify-content-between">
                    <li className="nav-item">
                        <Link activeClass="active" to="inicio" spy={true} smooth={true} duration={500}>
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="acerca" spy={true} smooth={true} duration={500}>
                            Perfil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="proyectos" spy={true} smooth={true} duration={500}>
                            Proyectos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="contactame" spy={true} smooth={true} duration={500}>
                            Contactame
                        </Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}