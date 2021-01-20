import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import emailjs from 'emailjs-com';

export default function Contactame() {

    let nombre = ""
    let correo = ""
    let mensaje = ""

    const redireccionar = (link) => {
        window.open(link, '_blank');
    }

    const resetear = () => {
        document.getElementById("inputName").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputMensaje").value = "";
    }

    const enviarCorreo = () => {
        emailjs.send("service_lz2gfwh", "template_s93zrwn",
            {
                nombre_cliente: nombre.value,
                mensaje_cliente: mensaje.value,
                correo_cliente: correo.value
            }, "user_1QPMAW15vauwZvzOWeVXo"
        ).then(res => {
            console.log('Email successfully sent!')
            resetear();
        }
        ).catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
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
                            <div className="">
                                <button type="button" className="btn btn-outline-warning btn-lg yellow" onClick={enviarCorreo}>Enviar <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" /></button>
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