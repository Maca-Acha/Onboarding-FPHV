import './App.css'
import Home from './pages/Home.jsx'
import Bienvenida from './pages/Bienvenida.jsx'
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
              <Route path= "/" element= {<Home />} />
              <Route path= "/bienvenida" element= {<Bienvenida />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
