import {Link} from 'react-router-dom'
import { IoIosArrowBack} from "react-icons/io";
import trabajo from '../assets/trabajo.svg'
import experiencias from '../assets/experiencias-ilus.png'
import juventud from '../assets/juventud-ilus.png'
import responsabilidad from '../assets/responsabilidad-ilus.png'
import excelencia from '../assets/excelencia-ilus.png'
import aprendizaje from '../assets/aprendizaje-ilus.png'

const Adn = [
    {name: "Trabajo en equipo", src: trabajo, alt:'trabajo-en-quipo', id:'trabajo', key: 1},
    {name: "Experiencias únicas", src: experiencias, alt:'experiencias-unicas', id:'experiencias', key: 2},
    {name: "Juventud", src: juventud, alt:'juventud', id:'juventud', key: 3},
    {name: "Responsabilidad y solidaridad", src: responsabilidad, alt:'responsabilidad-y-solidaridad', id:'responsabilidad', key: 4},
    {name: "Excelencia", src: excelencia, alt:'excelencia', id:'excelencia', key: 5},
    {name: "Aprendizaje continuo", src: aprendizaje, alt:'aprendizaje-continuo', id:'aprendizaje', key: 6},
]

export default function Conociendo() {
    return (
        <div className='back-white'>
            <div className="cont cont-nuestro-adn">
                <div className="btn-volver btn-participamos">
                    <IoIosArrowBack />
                    <Link to='/quienes-participamos' className="volver">Quienes participamos</Link>
                </div>
                <div className='cont-nuestro-adn'>
                    <h2 className="titles title-adn">Nuestro ADN</h2>
                    <div className='cont-adn'>
                        {Adn.map((adn)=>{
                            return(
                                <div id={adn.id} className='back-adn' key={adn.key}>
                                    <img alt={adn.alt} className='img-adn' src={adn.src}/>
                                    <p className='text-adn'>{adn.name}</p>
                                    {console.log(adn.src)}
                                </div>    
                            )
                        })}
                    </div>
                </div>
                <div className='cont-button-nuestroAdn'>
                    <div>
                        <Link to='/partners' className='btn-ver-mas btn-nuestro-adn'>Partners institucionales</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}