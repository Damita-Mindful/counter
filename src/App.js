import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador'
import banner from './img/banner.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const esClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarCont = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-cont'> 
      <img className='logo' src={banner} alt='Contador de clicks'/>
      </div>
  
      <div className='container-principal'>
        <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={esClic}
        />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarCont}
        />
      </div>
    </div>
  );
}

export default App;
