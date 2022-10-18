import './App.css';
import React from 'react'; 

import {                                                       
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Homethoo from './Homethoo';
import First from './First';
import About from './About';

function App() {
  return (<div>
<Router>
<nav>
<Link to='/' className='link'>Главная</Link>  
<Link to='/Home' className='link'>Мужские кроссовки</Link>  
<Link to='/Homethoo' className='link'>Женские кроссовки</Link>  
<Link to='/About' className='link'>Акции</Link>  
</nav>

<Routes>
<Route path='/'element={<First/>}/>
<Route path='/Home' element={<Home/>}/>
<Route path='/Homethoo' element={<Homethoo/>}/>
<Route path='/About'element={<About/>}/>

</Routes>
</Router>
  </div>

  );
}

export default App;
