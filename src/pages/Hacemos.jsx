import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

export default function Hacemos() {
    return (
        <div className='back-white'>
            <div className="cont cont-home">
                <div className="btn-volver">
                    <IoIosArrowBack />
                    <Link to='/conociendo' className="volver">Conociendo la fundación</Link>
                </div>
                <div>
                    <h1 className='titles'>Qué hacemos</h1>
                    <p className='text'>Somos una organización no gubernamental, independiente, apartidaria y sin fines de lucro, miembro de la sociedad civil, registrada y reconocida a nivel provincial, nacional e internacional.</p>
                    <div className='cont-btn'>
                        <Link className="btn-generals" to='/' >
                            <Link className="texto-btn" to='/' >Actividades</Link>
                        </Link>
                        <Link className="btn-generals" to='/' >
                            <Link className="texto-btn" to='/' >Estadísticas</Link>
                        </Link>
                    </div>
                    <h1 className='titles'>Misión</h1>
                    <p className='text'>Generar accesos y oportunidades para potenciar el desarrollo integral de las personas.</p>
                    <div className='cuatroPilares'>
                        <h1 className='cuatro'>4</h1>
                        <h5 className='titles text-hacemos'>Pilares fundamentales en la Fundación</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}