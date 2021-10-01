/* eslint-disable jsx-a11y/alt-text */
import "./navbar.css"

import { LogoModule } from "./logo.jsx"
import { ListModule } from "./list.jsx"
import { HamburgerModule } from "./hamburger.jsx"
import { useState} from "react"

export const Navbar =()=> {

    const [navActive, setNavActive] = useState(false)
    const handleOpenNav = () =>{
        navActive ? setNavActive(false) : setNavActive(true) 
        //console.log(navActive)
    }

    let widthScreen = window.screen.width;

    

    return(
        <span>
            <nav className="nav">
                <LogoModule/>
                <HamburgerModule handleOpenNav={handleOpenNav}/>
                <ListModule widthScreen={widthScreen} navActive={navActive} handleOpenNav={handleOpenNav}/>
            </nav>
            <div style={{height:"62px",position:"block", border:"1px solid red"}}></div>
        </span>
    )
}