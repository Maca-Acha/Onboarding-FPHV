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
            <div className="cont info-home">
                <h2 className="titles">Conociendo la Fundación</h2>
                <div>
                    {btns_conociendo.map(btn => {
                        return(
                            <Link className="btn-generales" to={btn.path} key={btn.id}>{btn.nombre}</Link>
                        )
                    })}
                </div>
                <h4 className="titles">¡Te compartimos esta información para que estés preparado para comenzar a trabajar en equipo!</h4>
            </div>
        </div>
    )
}