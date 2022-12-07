import './App.css'
import Home from './pages/Home.jsx'
import Bienvenida from './pages/Bienvenida.jsx'
import Conociendo from './pages/Conociendo.jsx'
import Participamos from './pages/Participamos.jsx'
import Quienes from './components/Quienes-participamos'
import Organigrama from './components/Organigrama.jsx'
import Partners from './components/Partners.jsx'
import NuestroAdn from './components/NuestroAdn.jsx'
import Historia from './pages/Historia'
import Hacemos from './pages/Hacemos.jsx'
import Oportunidades from './pages/Oportunidades.jsx'
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path= "/" element= {<Home />} />
            <Route path= "/bienvenida" element= {<Bienvenida />} />
            <Route path= "/conociendo" element= {<Conociendo />} />
            <Route path= "/participamos" element= {<Participamos />} />
            <Route path= "/quienes-participamos" element= {<Quienes />} />
            <Route path= "/organigrama" element= {<Organigrama />} />
            <Route path= "/nuestro-adn" element= {<NuestroAdn />} />
            <Route path= "/partners" element= {<Partners />} />
            <Route path= "/nuestra-historia" element= {<Historia />} />
            <Route path= "/que-hacemos" element= {<Hacemos />} />
            <Route path= "/oportunidades" element= {<Oportunidades />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
