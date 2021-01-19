import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Proyectos() {

    const redireccionar = (link) => {
        window.open(link, '_blank');
    }

    return (
        <section id="proyectos">
            <div className="bg-black">
                <div className="container vh-100 pt-5 pb-5">
                    <div className="col-12 d-flex justify-content-center p-3">
                        <h1 className="subtitle julius yellow">Proyectos</h1>
                    </div>
                    <div className="row aparece">
                        <div className="col-sm-6 justify-content-center align-items-center pb-3">
                            <div>

                            </div>
                            <div>
                                <div className="d-flex justify-content-center">
                                    <h3 className="yellow">Simple Tasks</h3>
                                </div>
                                <div>
                                    <p className="mt-2 white text-justify">
                                        Aplicación web con un diseño ligero en la cual los usuarios
                                        pueden desde gestionar sus tareas (crear, borrar, y eliminar) hasta
                                        organizar y filtrar estas mismas ya sea por periodo de tiempo o su
                                        contenido. Para la creación de esta aplicación se utilizaron las
                                        tecnologias html, css, boostrap y javascript (react).
                                    </p>
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="pr-4">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-4x icon" onClick={() => redireccionar('https://simple-tasks-react.netlify.app/')} />
                                        </div>
                                        <div className="pl-4">
                                            <FontAwesomeIcon icon={faGithub} className="fa-4x icon" onClick={() => redireccionar('https://github.com/aris-osorio/simple-tasks')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 justify-content-center align-items-center">
                            <div>

                            </div>
                            <div>
                                <div className="d-flex justify-content-center">
                                    <h3 className="yellow">Meme Chat</h3>
                                </div>
                                <div>
                                    <p className="mt-2 white text-justify">
                                        Chat-bot donde puedes interactuar con la llama "ola ke ase?"
                                        programada con algunas frases mas usadas en los memes .para la
                                        creación de esta aplicación se utilizaron las tecnologías html, css,
                                        boostrap y javascript (react).
                                    </p>
                                    <br/>
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="pr-4">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-4x icon" onClick={() => redireccionar('https://meme-chat.netlify.app/')} />
                                        </div>
                                        <div className="pl-4">
                                            <FontAwesomeIcon icon={faGithub} className="fa-4x icon" onClick={() => redireccionar('https://github.com/aris-osorio/meme-chat')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}