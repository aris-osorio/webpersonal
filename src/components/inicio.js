import Typed from 'react-typed';

export default function Inicio() {

    return (
        <section id="inicio">
            <div className="d-flex align-items-center mandril">
                <div className="col-8 pl-0 pr-0 d-flex align-items-center justify-content-center">
                    <div className="text-white fondo aparece">
                        <h1 className="title julius text-center m-0 p-0">Aris Osorio</h1>
                        <h2 className="subtitle julius text-center">Desarrollador&nbsp;
                            <Typed strings={['Web', 'React', 'Django', 'Fullstack']} typeSpeed={40} backSpeed={50} startDelay={2000} backDelay={1000} />
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}