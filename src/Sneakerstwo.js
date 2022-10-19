import { useState } from "react";
import { dataTwoo } from './dataTwoo';
import { datafoir } from './datafoir';

function Sneakerstwo (){

    const [sneakers,setSneakers]=useState(dataTwoo);
    const [showText, setShowText] = useState(false);
    const [person, setPerson] = useState(0);
    const {imagetwoo} = datafoir[person];

    const removeGift = (id) => {
        let newSneakers = sneakers.filter(gift => gift.id!==id)
    setSneakers(newSneakers)
    }

const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
}

const previosPerson = () =>{
    setPerson((person => {
        person --;
        if(person<0){
            return datafoir.length-1;
        }
        return person;
    }))
}

const nextPerson = () =>{
    setPerson((person=>{
        person ++;
        if(person>datafoir.length -1){
            person=0;
        }
        return person;
    }))
}


    return(<div>
        <div className="container"> 
{sneakers.map((item => {
    const {id, image,text,showMore}= item;
    return(<div>
            <img src={image} width='500px' height='400px' alt="image" className="image"></img>
            <p className="text">{showMore ? text : text.substring(0,35)+'...'}<button className="item" onClick={() => showTextClick(item)}>{showMore ? 'Свернуть' : 'Развернуть'}</button></p>
            <button onClick={() => removeGift(id)} className='btn-three'>Закрыть</button>
        </div>
    )
}))}
</div>
<div className="btn-close">
        <button  onClick={() => setSneakers([])} className='close'>Закрыть все</button>
        </div>


<div  className="containertwoo">
    <div className="containerfoir">
<button className="btn" onClick={previosPerson}>Назад</button>
<img src={imagetwoo} width='700px' height='500px' alt='image' className="slide"></img>
<button className="btn"  onClick={nextPerson}>Вперед</button>
        </div>
        </div>
        </div>
   
    )
}

export default Sneakerstwo;