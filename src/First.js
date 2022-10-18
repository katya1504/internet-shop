import './App.css';
import React from 'react'; 
import Sneakerstwo from './Sneakerstwo';
import Logo from './logo.png';

function App() {
  return (
    <div>
    <div className="App">
        <img src={Logo} width='250px' alt='image'  className='logo'></img>
        </div>

        <div className='App'>
        <h3 className='nov'>Новинки</h3>
        </div>

        <div> 
      <Sneakerstwo/>
      </div>

      <div  className='App twoo'>
        <h4>Тел.: +375 55 243-45-32</h4>
        <h4>г.Гомель, ул.Советская, 15</h4>
      </div>
      </div>
  );
}

export default App;
