import { useState } from "react"
import estilos from "./ItemCount.module.css"


const ItemCount = ({initialValue = 1, stock, onAdd}) =>{
    const [count, setCount] = useState(initialValue)

    const increment = () =>{
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    const decrement = () =>{
        if(count > 1){
            setCount(prev => prev - 1)
        }
    }


    return(
        <div className={estilos.contadorContainer} >
            <h3 className={estilos.count}> {count} </h3>
            <button onClick={decrement} >-</button>
            <button onClick={()=> onAdd(count)} >Agregar al carrito</button>
            <button onClick={increment} >+</button>
        </div>
    )
}

export default ItemCount