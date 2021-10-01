import menu from "./assets/menu.png"

export const HamburgerModule =({handleOpenNav})=>{

    
    

    return(
        <>
            <div className="onlyresponsive">
               <div><img src={menu} className="menu" alt="hamburger" onClick={()=>handleOpenNav()}/></div>
            </div>
        </>
    )
    
}