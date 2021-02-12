import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function SimpleTasks() {
    const redireccionar = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div className="d-flex justify-content-center p-5">
            <div className="row">
                <div className="col-sm-7">
                    <div className="lap-simple d-flex align-items-center" />
                </div>
                <div className="col-sm-5 p-5">
                    <div className="col-12 d-flex justify-content-center">
                        <h3 className="yellow">Simple Tasks</h3>
                    </div>
                    <p className="mt-2 white text-justify">
                        Aplicación web con un diseño ligero en la cual los usuarios
                        pueden desde gestionar sus y filtrar estas mismas ya sea por
                        periodo de tiempo o su contenido.
                    </p>
                    <div className="d-flex justify-content-center">
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
    )
}