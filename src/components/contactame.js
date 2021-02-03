import Axios from 'axios'
import { useState } from "react"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'



toast.configure();
export default function Contactame() {

    let nombre = ""
    let correo = ""
    let mensaje = ""

    let [icono, setIcono] = useState([<FontAwesomeIcon icon={faLongArrowAltRight} />, "mt-1"])

    const redireccionar = (link) => {
        window.open(link, '_blank');
    }

    const resetear = () => {
        document.getElementById("inputName").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputMensaje").value = "";
    }

    const bloquear = () =>{
        document.getElementById("inputName").classList.add("desactivar")
        document.getElementById("inputEmail").classList.add("desactivar")
        document.getElementById("inputMensaje").classList.add("desactivar")
        document.getElementById("Btnenviar").classList.add("desactivar")
    }

    const desbloquear = () =>{
        document.getElementById("inputName").classList.remove("desactivar")
        document.getElementById("inputEmail").classList.remove("desactivar")
        document.getElementById("inputMensaje").classList.remove("desactivar")
        document.getElementById("Btnenviar").classList.remove("desactivar")
    }

    const flecha=()=>
    {
        setIcono([<FontAwesomeIcon icon={faLongArrowAltRight} />, "mt-1"])
    }

    const cargando=()=>
    {
        setIcono([<ClipLoader color="yellow" loading = {true} size={20} />, "mt-1"])
    }

    const enviarCorreo = () => {
        cargando()
        bloquear()
        Axios.post(`https://correos-arisoso.herokuapp.com/correos/`,
            {
                nombre: nombre.value,
                correo: correo.value,
                mensaje: mensaje.value,
            }).then(res => {
                resetear()
                toast("Se envio mensaje correctamente");
                desbloquear()
                flecha()
            }).catch((error) => {
                toast('Error al enviar mensaje intenta mas tarde')
                desbloquear()
                flecha()
            });
    }

    return (
        <section id="contactame">
            <div className="bg-black">
                <div className="container vh-100 pt-5">
                    <div className="col-12 d-flex justify-content-center p-5">
                        <h1 className="subtitle yellow">Contactame</h1>
                    </div>
                    <div className="aparece">
                        <div className="row d-flex m-0">
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="inputName" className="yellow">Tu nombre</label>
                                <input id="inputName" className="form-control form-control-lg input rounded-0 border-top-0 border-left-0 border-right-0" type="text" ref={txt => nombre = txt} placeholder="Ingresa tu nombre aqui" />
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="inputEmail" className="yellow">Tu correo</label>
                                <input type="email" className="form-control form-control-lg input rounded-0 border-top-0 border-left-0 border-right-0" ref={txt => correo = txt} id="inputEmail" placeholder="name@example.com" />
                            </div>
                        </div>
                        <div className="p-3">
                            <label htmlFor="inputMensaje" className="yellow">Tu mensaje</label>
                            <textarea className="form-control form-control-lg mb-3 input rounded-0 border-top-0 border-left-0 border-right-0" ref={txt => mensaje = txt} id="inputMensaje" placeholder="Ingresa tu mensaje aqui" rows="3" />
                            <div className="d-flex">
                                <button id="Btnenviar" type="button" className="d-flex btn btn-outline-warning btn-lg yellow" onClick={enviarCorreo}><div className="mr-2">Enviar</div> <div className= {icono[1]}>{icono[0]}</div></button>
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
            </div>
        </section>
    )
}