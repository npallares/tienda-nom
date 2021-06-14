import menu from "./assets/menu.png"

export const HamburgerModule =()=>{
    return(
        <>
            <div className="onlyresponsive">
               <div><img src={menu} className="menu" /></div>
            </div>
        </>
    )
    
}