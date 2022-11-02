import logo from '../assets/logo-horizontal.png'
import ilustracion from '../assets/ilustracion_intro.svg'

export default function Home() {
    return (
        <div className='back-white'>
            <div className='cont cont-home'>
                <div className='space'></div>
                <div className='info-home'>
                    <h1 className='titles'>Te damos la bienvenida a</h1>
                    <img alt="logo-horizontal" src={logo} className="logo-horizontal" />
                    <img alt="ilustracion" src={ilustracion} className="ilustracion-intro" />
                </div>
                <div className='cont-button-home'>
                    <button className='button-comenzar'>Comenzar el recorrido</button>
                </div>
            </div>
        </div>
    )
}