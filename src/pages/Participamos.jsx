import {Link} from 'react-router-dom'
import { IoIosArrowBack} from "react-icons/io";
import ilustracion from '../assets/ilus-participar.png'

export default function Participamos() {
    return (
        <div className='back-white'>
            <div className="cont cont-home">
                <div>
                    <div className="btn-volver btn-participamos">
                        <IoIosArrowBack />
                        <Link to='/Conociendo' className="volver">Conociendo la Fundación</Link>
                    </div>
                    <div className='cont-participar'>
                        <div>
                            <h2 className="titles">Quienes participamos</h2>
                            <p className='text-body'>En nuestra organización, los jóvenes tienen un rol preponderante en la toma de decisiones, en el armado de proyectos y en el desarrollo y posicionamiento de la Fundación en la región. Por ello, nuestro equipo está compuesto en su mayoría por hombres y mujeres menores de 30 años.
                            <span>A dicho staff, ubicado en la sede en la ciudad de La Plata (Argentina),  se suman los 34 delegados que la Fundación posee a lo largo y ancho del globo.</span>
                            <span>La presencia de estos representantes en cada ciudad del mundo nació de experiencias, pasantías y voluntariados que los mismos realizaron en nuestra institución cuando residieron en Argentina.</span>
                            </p>
                            <div className='cont-flex'>
                                <p className='text-body pre-btn'>En nuestra página los podés conocer </p>
                                <Link to='/bienvenida' className='button-participar texto-btn'>¡Hacé click aquí!</Link>
                            </div>
                        </div>
                        <div className='cont-right'>
                            <img src={ilustracion} />
                            <Link to='/' className='arrow'>
                                <svg  width="114" height="54" viewBox="0 0 114 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M97.8765 5.80595C98.4551 7.87797 100.527 7.29942 101.106 9.37144C99.0336 9.94999 96.383 8.45651 94.311 9.03506C89.5884 8.12013 83.3724 9.85577 78.6498 8.94085C67.7112 9.76157 57.351 12.6543 49.0629 14.9685C38.7028 17.8612 28.9213 22.826 21.7903 29.2842C14.0808 33.6705 4.87778 40.7072 0.975911 50.731C1.55446 52.803 2.13298 54.875 3.62645 52.2244C15.2379 37.8145 32.1504 26.3915 50.7986 21.1846C61.1587 18.2918 69.4468 15.9776 80.3855 15.1569C84.5295 13.9998 89.2521 14.9148 93.9746 15.8297C96.0467 15.2511 100.769 16.1661 102.841 15.5875C98.6973 16.7446 95.1318 19.9737 93.6383 22.6243C92.1448 25.2748 92.7233 27.3469 96.8674 26.1898C103.083 24.4541 106.07 19.153 112.286 17.4174C114.358 16.8388 113.78 14.7668 113.201 12.6948C109.394 7.05725 106.165 3.49175 100.863 0.504801C98.7914 1.08335 95.226 4.31248 97.8765 5.80595Z" fill="#231F20"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}