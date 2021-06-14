/* eslint-disable jsx-a11y/alt-text */
import "./navbar.css"

import { LogoModule } from "./logo.jsx"
import { ListModule } from "./list.jsx"
import { HamburgerModule } from "./hamburger.jsx"

export const Navbar =()=> {
    return(
        <span>
            <nav className="nav">
                <LogoModule/>
                <HamburgerModule/>
                <ListModule/>
            </nav>
        </span>
    )
}