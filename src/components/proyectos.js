import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import MemeChat from './memeChat';
//import SimpleTasks from './simpleTasks'

export default function Proyectos() {
    return (
        <section id="proyectos">
            <div className="bg-black">
                <div className="container vh-100 pt-5 pb-5">
                    <div className="col-12 d-flex justify-content-center p-5">
                        <h1 className="subtitle julius yellow">Proyectos</h1>
                    </div>
                    <MemeChat />
                    <div className="col-12 d-flex justify-content-center align-items-center p-5">
                        <div className="pr-4">
                            <FontAwesomeIcon icon={faAngleLeft} className="fa-4x icon" />
                        </div>
                        <div className="pl-4 pr-4">
                            <FontAwesomeIcon icon={faCircle} className="fa-2x" />
                        </div>
                        <div className="pr-4 pr-4">
                            <FontAwesomeIcon icon={faCircle} className="fa-2x yellow" />
                        </div>
                        <div className="pl-4">
                            <FontAwesomeIcon icon={faAngleRight} className="fa-4x icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}