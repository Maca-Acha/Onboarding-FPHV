import { Link } from "react-router-dom"

const btns_conociendo = [
    {nombre: "Quienes Participamos", path:'/quines-participamos', id:'participamos'},
    {nombre: "Nuestra Historia", path:'/nuestra-historia', id:'historia'},
    {nombre: "Qué hacemos", path:'/que-hacemos', id:'hacemos'},
    {nombre: "Oportunidades", path:'/oportunidades', id:'oportunidades'},
]

export default function Conociendo() {
    return (
        <div className='back-white'>
            <div className="cont info-conociendo ">
                <Link to='/' >
                    <h2 className="titles">Conociendo la Fundación</h2>
                </Link>
                <div className="cont-btn-generals">
                    {btns_conociendo.map((btn, index) => {
                        return(
                            <Link className="btn-generals" to={btn.path} style={{marginTop: index %2 ? 100 : 0}}>
                                <Link className="texto-btn" to={btn.path} key={btn.id}>{btn.nombre}</Link>
                            </Link>
                        )
                    })}
                </div>
                <h4 className="titles text-conociendo">¡Te compartimos esta información para que estés preparado para comenzar a trabajar en equipo!</h4>
            </div>
        </div>
    )
}