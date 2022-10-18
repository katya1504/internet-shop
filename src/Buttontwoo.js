function Buttontwoo({filteredCloses}){
    return(
<div className="cont">
<button className="change" onClick={() => filteredCloses('Разноцветные')}>Разноцветные</button>
<button className="change"  onClick={() => filteredCloses('Белые')}>Белые</button>
<button className="change" onClick={() => filteredCloses('Черные')} >Черные</button>
</div>

    )
}

export default Buttontwoo;