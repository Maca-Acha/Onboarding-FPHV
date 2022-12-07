import {Link} from 'react-router-dom'
import { IoIosArrowBack} from "react-icons/io";
import organigrama from '../assets/organigrama.svg'

export default function Organigrama() {
    return (
        <div className='back-white-organigrama'>
            <div className="cont-home cont-largo">
                <div className="btn-volver btn-participamos">
                    <IoIosArrowBack />
                    <Link to='/quienes-participamos' className="volver">Quienes participamos</Link>
                </div>
                <div className='cont-title-organigrama'>
                    <h2 className="titles title-organigrama">Organigrama</h2>
                    <img className='organigrama' src={organigrama}/>
                </div>
                <div className='cont-button-nuestroAdn button-adn'>
                    <div>
                        <Link to='/nuestro-adn' className='btn-ver-mas btn-nuestro-adn'>Nuestro ADN</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}