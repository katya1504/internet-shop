import { useState } from 'react';
import { data } from './data';
import  Sneakers  from './Sneakers';
import Logo from './logo.png';
import Buttontwoo from './Buttontwoo';



function Home (){

    const [person,setPerson]=useState(data);
    const chosenCloses = (searchTerm) =>{
        const newClothes = data.filter(element => element.searchTerm === searchTerm);
        setPerson(newClothes);
    }

    return(
        <div>
              <div className='buttonfilter'>
   <Buttontwoo filteredCloses = {chosenCloses}/> 
   </div>
        <div>
<Sneakers anyWord = {person}/>
        </div>

<div className="App">
<img src={Logo} width='250px' alt='image'  className='logo'></img>
</div>
</div>
    )
}

export default Home;