
function Sneakersthree ({anyWord}){
   
   
    return(
        <div>
        <div className="sneakers">
<h3>Женские кроссовки</h3>
</div>

        <div id="key"  className="container">
            {anyWord.map(( element =>{
                const {id, image, searchTerm }= element;
                return <div key={id}>
                    <div>
<img src={image} width='400px' height='300px' alt='image'  className="image"></img>
<p>{searchTerm}</p>
</div>
                </div>
              
            }))}
                
                </div>
        </div>
    )
}

export default Sneakersthree;