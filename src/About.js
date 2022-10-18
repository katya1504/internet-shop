import marriage from './marriage.jpg';
import birthday from './birthday.jpg';
import hands from './hands.webp';
import Logo from './logo.png';



function About(){
    return(
   <div className='blocktwoo'>
<div className='blockthree'>
    <img src={marriage} alt='image' width='500px' className='pictures'></img>
    <div className='blockfoir'>
    <p>При покупке 2 пар обуви, 3 пара:</p>
    <p className='price'>Бессплатно!!!</p>
    </div>
</div>

<div className='blockthree'>
    <img src={birthday}alt='image' width='500px' className='pictures'></img>
    <div className='blockfoir'>
    <p>Скидка при покупке кроссовок на 'День Рождения':</p>
    <p className='price'>30 %</p>
    </div>
</div>

<div className='blockthree'>
    <img src={hands}alt='image' width='500px' className='pictures'></img>
    <div className='blockfoir'>
    <p>Скидка многодетным семьям:</p>
    <p className='price'>20 %</p>
    </div>

</div>


<div className="App">
<img src={Logo} width='250px' alt='image' className='logo'></img>
</div>
   </div>
    )
}

export default About;