import CV from '../documents/ArisOsorio.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faPython, faGitAlt, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'



export default function Acerca() {
    return (
        <section id="acerca">
            <div className="bg-black">
                <div className="pt-5 pb-5 container">
                    <div className="col-12 d-flex justify-content-center p-5">
                        <h1 className="subtitle yellow">Perfil</h1>
                    </div>
                    <div className="row d-flex aparece">
                        <div className="col-sm-6 pb-3 d-flex justify-content-center align-items-center">
                            <div className="perfil" />
                        </div>
                        <div className="col-sm-6 justify-content-center align-items-center">
                            <div className="d-flex justify-content-center">
                                <h3 className="yellow">¿Quien soy?</h3>
                            </div>
                            <div>
                                <p className="mt-2 white text-justify">
                                    ¡Hola! me llamo Aris Bersain Osorio Villa, Ingeniero en Ciencias Computacionales
                                    enfocado en desarrollar sitios web. Tengo la capacidad de desempeñarme tanto en el Frontend
                                    (React Js) como en el Backend (Django).
                                </p>
                                <p className="mt-2 text-justify white">
                                    Actualmente resido en Gudalajara - Mexico y en el ultimo año, me he dedicado a la
                                    construccion de aplicaciones web utilizando las ultimas tecnologias de desarrollo,
                                    con las cuales, puedo transformar las ideas en productos significativos y útiles.
                                </p>
                            </div>
                            <div>
                                <div className="row d-flex justify-content-between iconos">
                                    <div className="col-sm-6 d-flex justify-content-between pb-3">
                                        <FontAwesomeIcon icon={faHtml5} className="fa-4x" />
                                        <FontAwesomeIcon icon={faCss3Alt} className="fa-4x" />
                                        <FontAwesomeIcon icon={faJs} className="fa-4x" />
                                        <FontAwesomeIcon icon={faPython} className="fa-4x" />
                                    </div>
                                    <div className="col-sm-6 d-flex justify-content-between pb-3">
                                        <FontAwesomeIcon icon={faBootstrap} className="fa-4x" />
                                        <FontAwesomeIcon icon={faReact} className="fa-4x" />
                                        <svg fill="currentColor" height="64" width="64" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m27.724 0h10.476v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56v-20.66zm-10.465-16.104h10.465v10.737h-10.465z" />
                                        </svg>
                                        <FontAwesomeIcon icon={faGitAlt} className="fa-4x" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 d-flex justify-content-center">
                                <a className="btn btn-outline-warning btn-lg yellow" href={CV} download="Aris_Osorio_CV.pdf" role="button">
                                    <FontAwesomeIcon icon={faFileDownload}/>
                                    &nbsp;Descargar cv
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}