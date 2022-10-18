function Button({filteredCloses}){
    return(
<div className="cont">
<button className="change" onClick={() => filteredCloses('Серые')}>Серые</button>
<button className="change"  onClick={() => filteredCloses('Белые')}>Белые</button>
<button className="change" onClick={() => filteredCloses('Черные')} >Черные</button>
<button className="change" onClick={() => filteredCloses('Розовые')} >Розовые</button>
</div>
)
}

export default Button;