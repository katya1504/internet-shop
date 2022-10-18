import { useState } from 'react';
import { datathree } from './datathree';
import  Sneakersthree  from './Sneakersthree';
import Logo from './logo.png';
import Button from './Button';



function Homethoo (){

    const [person,setPerson]=useState(datathree);
  
    const chosenCloses = (searchTerm) =>{
        const newClothes = datathree.filter(element => element.searchTerm === searchTerm);
        setPerson(newClothes);
    }
    return(
        <div>
        <div className='buttonfilter'>
   <Button filteredCloses = {chosenCloses}/> 
   </div>
   <div>      
<Sneakersthree anyWord = {person}/>
        </div>

<div className="App">
<img src={Logo} width='250px' alt='logo'  className='logo'></img>
</div>
</div>
    )
}

export default Homethoo;
