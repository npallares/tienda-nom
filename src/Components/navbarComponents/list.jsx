import "./navbar.css"
import chango from "./assets/chango.png"
import { Link } from "react-router-dom"
import { useContext,  useEffect, } from "react";
import { CartContext } from "../../context/cartContext";
import { LoginButton } from "../loginComponents/LoginButton";
import { LogoutButton } from "../loginComponents/LogoutButton";

export const ListModule = () =>{

    const {cartQuantity} = useContext(CartContext)

    useEffect(() => {

        // seteo de span ref. al numero del cart
        const setSpan=()=>{
            const $span = document.getElementById("itemQuantity")
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
                <Link to={`/remeras`}><li>Remera</li></Link>
                {/* <Link to={`/login`}><LoginButton/></Link>
                {LoginButton ? <h5>Login</h5> : <h5>Logout</h5>}
                <Link to={`/logout`}><LogoutButton/></Link> */}
                
                <Link to={`/cart`}><li><img src={chango} className="chango" /><span className="itemQuantity none" id="itemQuantity">{cartQuantity}</span></li></Link>
            </ul>
        </>
    )
}