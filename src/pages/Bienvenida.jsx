import {Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

export default function Bienvenida() {
    return (
        <div className='back-white'>
            <div className="cont cont-home">
                <div className='space'>
                    <div className="btn-volver">
                        <IoIosArrowBack />
                        <Link to='/' className="volver">Volver</Link>
                    </div>
                </div>
                <div className='info-home'>
                    <h2 className="titles">¡Te invitamos a ver este video institucional de la Fundación Pro Humanae Vitae!</h2>
                    <img className='video'/>
                </div>
                <div className='cont-button-home'>
                    <div>
                        <Link className='btn-ver-mas'>Ver mas tarde</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}