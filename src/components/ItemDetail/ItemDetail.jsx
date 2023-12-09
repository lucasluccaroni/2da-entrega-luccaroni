import ItemCount from "../ItemCount/ItemCount"
import estilos from "./ItemDetail.module.css"

const ItemDetail = ({name, category, img, price, description, stock}) =>{
    return(
        <div className={estilos.card} >
            <h1 className={estilos.title} > {name} </h1>
            <p className={estilos.text} > Categoria: {category} </p>
            <img src={img} className={estilos.image}  />
            <h2> ${price} </h2>
            <p className={estilos.text} > Descripción: {description} </p>
            <ItemCount stock={stock} />

        </div>
    )
}

export default ItemDetail