import estilos from "./Item.module.css"

const Item = ({id, name, price, img}) =>{
    return(
        <div className={estilos.card} >
            <h3> {name} </h3>
            <img src={img} style={{width: 100}}/>
            <h4> {price} </h4>
            <button> Ver detalle </button>
        </div>
    )
}

export default Item