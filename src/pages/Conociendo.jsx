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
            <div className="back-conociendo info-home ">
                <Link to='/' >
                    <h2 className="titles">Conociendo la Fundación</h2>
                </Link>
                <div className="cont-btn-generals">
                    {btns_conociendo.map(btn => {
                        return(
                            <div className="btn-generals">
                                <Link className="texto-btn" to={btn.path} key={btn.id}>{btn.nombre}</Link>
                            </div>
                        )
                    })}
                </div>
                <h4 className="titles text-conociendo">¡Te compartimos esta información para que estés preparado para comenzar a trabajar en equipo!</h4>
            </div>
        </div>
    )
}