import estilos from "./Item.module.css"
import {Link} from "react-router-dom"

const Item = ({id, name, price, img}) =>{
    return(
        <div className={estilos.card} >
            <h3> {name} </h3>
            <img src={img} style={{width: 100}}/>
            <h4> ${price} </h4>
            <Link to={`/detail/${id}`}> Ver detalle </Link>
        </div>
    )
}

export default Item