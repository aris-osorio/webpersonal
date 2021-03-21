import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function MemeChat() {
    const redireccionar = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div className="tarjeta d-flex justify-content-center">
            <div className="row pr-5">
                <div className="col-sm-8 p-0">
                    <div>
                        <div className="lap-simple d-flex align-items-center" />
                    </div>
                </div>
                <div className="col-sm-4 contenido-tarjeta">
                    <div className="col-12 d-flex justify-content-center">
                        <h3 className="yellow">Meme chat</h3>
                    </div>
                    <p className="mt-2 white text-justify">
                        Chat-bot donde puedes interactuar con la llama "ola ke ase?"
                        programada con algunas frases mas usadas en los memes.
                    </p>
                    <div className="d-flex justify-content-center">
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
        
    )
}