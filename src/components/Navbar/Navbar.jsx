import estilos from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () =>{
    return(
        <nav className={estilos.navbar} >
            <h1>Retro-Store</h1>
            <section className={estilos.links}>
                <button> Celulares </button>
                <button> Tablets</button>
                <button> Notebooks </button>
                <CartWidget />
            </section>
        </nav>
    )
}

export default Navbar