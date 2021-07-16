import "./navbar.css"
import chango from "./assets/chango.png"
import { Link } from "react-router-dom"
import { useContext,  useEffect, } from "react";
import { CartContext } from "../../context/cartContext";

export const ListModule = () =>{

    const {cartQuantity} = useContext(CartContext)
    console.log(cartQuantity)

    useEffect(() => {
        const setSpan=()=>{

            const $span = document.getElementById("itemQuantity")
            console.log($span.classList)
            if(cartQuantity > 0){
                $span.classList.remove("none")
            } else {
                $span.classList.add("none")
            }    

        }
        setSpan()
    }, [cartQuantity])

    return(
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> 

            <ul className="responsive">
                <Link to={`/nike`}><li>Nike</li></Link>
                <Link to={`/adidas`}><li>Adidas</li></Link>
                <Link to={`/topper`}><li>Topper</li></Link>
                <Link to={`/zapatillas`}><li>Zapatillas </li></Link>
                <Link to={`/buzos`}><li>Buzos</li></Link>
                <Link to={`/remeras`}><li>Remeras</li></Link>
                <Link to={`/cart`}><li><img src={chango} className="chango" /><span className="itemQuantity none" id="itemQuantity">{cartQuantity}</span></li></Link>
            </ul>
        </>
    )
}