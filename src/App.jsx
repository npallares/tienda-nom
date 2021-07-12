import './App.css';
import { useContext, useState } from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Navbar } from './Components/navbarComponents/indexNavbar';
import { ItemDetailContainer } from './Components/detailComponents/itemDetailContainer';
import { ItemListContainer } from './Components/ItemComponents/itemListContainer';
import { ShopComponentContext} from './context/shopContext';
import { CartContext, CartComponentContext } from './context/cartContext';
import { CartListComponent } from './Components/cartComponent/cartListComponent'


function App() {

  
  return (  
    <ShopComponentContext>
        <CartComponentContext>
          <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={ItemListContainer}/>
              <Route path="/cart" component={CartListComponent}/>
              <Route path="/producto/:productoId" component={ItemDetailContainer}/>
              <Route path="*" component={()=> <h1 className="red">404</h1>}/>
            </Switch>
          </BrowserRouter>
        </CartComponentContext>
    </ShopComponentContext>
  );
};

export default App;
 