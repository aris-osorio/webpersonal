import MemeChat from './memeChat';
//import SimpleTasks from './simpleTasks'

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
                    <MemeChat />   
                </div>
            </div>
        </section>
    )
}