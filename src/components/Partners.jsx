import {Link} from 'react-router-dom'
import { IoIosArrowBack} from "react-icons/io";
import construya from '../assets/partners/construya.png'
import punto from '../assets/partners/punto-a-punto.png'
import calle_12 from '../assets/partners/calle-12.png'
import comercial_platense from '../assets/partners/comercial-platense.png'
import calpo from '../assets/partners/calpo.png'
import comercio_cb from '../assets/partners/camara-cb.png'
import oacis from '../assets/partners/oacis.png'
import comercio_av44 from '../assets/partners/comercio-av44.png'
import san_carlos from '../assets/partners/san-carlos.png'
import mv from '../assets/partners/mv.png'
import ccip from '../assets/partners/ccip.png'
import fce from '../assets/partners/fce-unlp.png'
import utn from '../assets/partners/utn.png'
import ucalp from '../assets/partners/ucalp.png'
import banco from '../assets/partners/banco-alimentario.png'
import logo from '../assets/partners/logo.png'
import uaem from '../assets/partners/uaem.png'
import eurosur from '../assets/partners/eurosur.png'

const Benefactores=[
    {name:'construya-al-costo',src: construya, key: 1, id:'construya'},
    {name:'punto-a-punto',src: punto, key: 2, id: 'puntoApunto'}
]
const Camaras=[
    {name:'calle-12',src: calle_12, key: 3, id:'calle-12'},
    {name:'camara-comercial-platense',src: comercial_platense, key: 4, id:'comercial-platense'},
    {name:'calpo',src: calpo, key: 5, id:'calpo'},
    {name:'camara-comercio-citybell',src: comercio_cb, key: 6, id:'comercio-cb'},
    {name:'oacis',src: oacis, key: 7, id:'oacis'},
    {name:'centro-comercio-av44',src: comercio_av44, key: 8, id:'comercio-av44'},
    {name:'camara-comercial-sancarlos',src: san_carlos, key: 9, id:'comercial-sancarlos'},
    {name:'mv',src: mv, key: 10, id:'mv'},
    {name:'ccip',src: ccip, key: 11, id:'ccip'},
] 
const Academias=[
    {name:'fce-unlp',src: fce, key: 12, id:'fce'},
    {name:'utn',src: utn, key: 13, id:'utn'},
    {name:'ucalp',src: ucalp, key: 14, id:'ucalp'},
    {name:'banco-alimentario',src: banco, key: 15, id:'banco'},
    {name:'logo',src: logo, key: 16, id:'logo'},
    {name:'uaem',src: uaem, key: 17, id:'uaem'},
    {name:'fundacion-eurosur',src: eurosur, key: 18, id:'eurosur'},
] 

export default function Conociendo() {
    return (
        <div className='back-white-partners'>
            <div className="cont-largo ">
                <div className="btn-volver btn-participamos">
                    <IoIosArrowBack />
                    <Link to='/quienes-participamos' className="volver">Quienes participamos</Link>
                </div>
                <h2 className="titles title-organigrama">Partners institucionales</h2>
                <div>
                    <div className='back-title-partners'>
                        <h5 className='title-partners'>Benefactores</h5>
                    </div>
                    <div className="cont-benefactores">
                        {Benefactores.map((benefactor)=>{
                            return(
                                <div key={benefactor.key}>
                                    <img id={benefactor.id} className='logo-partner' src={benefactor.src}/>
                                </div>
                            )})
                        }
                    </div>
                    <h5 className='title-partners'>Cámaras Comerciales y Empresarias</h5>
                    <div className="cont-camaras">
                        {Camaras.map((camara)=>{
                            return(
                                <div key={camara.key}>
                                    <img className='logo-partner' src={camara.src}/>
                                </div>
                            )})
                        }
                    </div>
                    <h5 className='title-partners'>Academia y Sociedad Civil</h5>
                    <div className="cont-academias">
                        {Academias.map((academia)=>{
                            return(
                                <div key={academia.key}>
                                    <img className='logo-partner' src={academia.src}/>
                                </div>
                            )})
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}