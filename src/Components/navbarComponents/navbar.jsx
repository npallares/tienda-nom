/* eslint-disable jsx-a11y/alt-text */
import "./navbar.css"
import menu from "./assets/menu.png"
import { LogoModule } from "./logo.jsx"

export const Navbar =()=> {
    return(
        <span>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> 
            <nav className="nav">
                <LogoModule/>
                <div className="onlyresponsive">
                    <div><img src={menu} className="menu" /></div>
                </div>

                
            </nav>
        </span>
    )
}