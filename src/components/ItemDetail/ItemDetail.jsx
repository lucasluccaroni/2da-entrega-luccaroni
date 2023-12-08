import ItemCount from "../ItemCount/ItemCount"
import estilos from "./ItemDetail.module.css"

const ItemDetail = ({name, category, img, price, description, stock}) =>{
    return(
        <div className={estilos.card} >
            <h1> {name} </h1>
            <p> Categoria: {category} </p>
            <img src={img} className={estilos.imagen}  />
            <h3> {price} </h3>
            <p> Descripcion:{description} </p>
            <ItemCount stock={stock} />

        </div>
    )
}

export default ItemDetail