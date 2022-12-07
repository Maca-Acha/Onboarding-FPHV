import {Link} from 'react-router-dom'
import { IoIosArrowBack} from "react-icons/io";
import ilustracion from "../assets/ilus-quienes.svg"

const btns_participamos = [
    {nombre: "Organigrma", path:'/organigrama', id:'organigrama'},
    {nombre: "Nuestro ADN", path:'/nuestro-adn', id:'nuestro-adn'},
    {nombre: "Partners Institucionales", path:'/partners', id:'partners'},
    {nombre: "Acreditaciones Multilaterales", path:'/acreditaciones', id:'acreditaciones'},
]

export default function QuienesParticipamos() {
    return (
        <div className='back-white'>
            <div className="cont cont-home cont-quienes-participamos">
                <div className="btn-volver btn-participamos">
                    <IoIosArrowBack />
                    <Link to='/Conociendo' className="volver">Conociendo la Fundación</Link>
                </div>
                <h2 className="titles title-participar title-quienes">Quienes participamos</h2>
                <div>
                    <div className='container-quienes'>
                        <div className="cont-btn-generals cont-btn-quienes">
                            {btns_participamos.map((btn) => {
                                return(
                                    <Link className="btn-generals" to={btn.path} key={btn.id}>
                                        <p className="texto-btn" to={btn.path} >{btn.nombre}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <img className='ilustracion-quienes' src={ilustracion} />
                </div>
            </div>
        </div>
    )
}