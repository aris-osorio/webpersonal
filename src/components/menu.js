import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function App() {
    return(
        <div id="menu" className="menu-container bg-black fixed-top">
            <div className="d-flex justify-content-end pb-1 pr-1">
                <FontAwesomeIcon icon={faTimes} className="fa-2x yellow icon btn-cerrar mr-4 mt-3"/>
            </div>
        </div>
    )
}