import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Navbar } from './Components/navbarComponents/indexNavbar';
import { ItemDetailContainer } from './Components/detailComponents/itemDetailContainer';
import { ItemListContainer } from './Components/ItemComponents/itemListContainer';
import { ShopComponentContext} from './context/shopContext';
import { CartContext, CartComponentContext } from './context/cartContext';
import { CartListComponent } from './Components/cartComponent/cartListComponent'
import { ItemListContainerNike } from './Components/ItemComponents/itemListContainerNike';
import { ItemListContainerAdidas } from './Components/ItemComponents/itemListContainerAdidas';
import { ItemListContainerTopper } from './Components/ItemComponents/itemListContainerTopper';
import { ItemListContainerZapatillas } from './Components/ItemComponents/itemListContainerZapatillas';
import { ItemListContainerBuzos } from './Components/ItemComponents/itemListContainerBuzos';
import { ItemListContainerRemeras } from './Components/ItemComponents/itemListContainerRemeras';
import { LoginButton } from './Components/loginComponents/LoginButton';
import { LogoutButton } from './Components/loginComponents/LogoutButton';



function App() {

  
  return (  
    <ShopComponentContext>
        <CartComponentContext>
          <BrowserRouter basename = "/tienda-nom">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={ItemListContainer}/>
              {/* <Route path="/login/" component={LoginButton}/> */}
              {/* <Route path="/logout/" component={LogoutButton}/> */}
              <Route path="/tienda-nom/" component={ItemListContainer}/>
              <Route path="/remeras" component={ItemListContainerRemeras}/>
              <Route path="/buzos" component={ItemListContainerBuzos}/>
              <Route path="/zapatillas" component={ItemListContainerZapatillas}/>
              <Route path="/topper" component={ItemListContainerTopper}/>
              <Route path="/nike" component={ItemListContainerNike}/>
              <Route path="/adidas" component={ItemListContainerAdidas}/>
              <Route path="/cart" component={CartListComponent}/>
              <Route path="/producto/:productoId" component={ItemDetailContainer}/>
              {/* <Route path="*" component={()=> <h1 className="red">404</h1>}/> */}
            </Switch>
          </BrowserRouter>
        </CartComponentContext>
    </ShopComponentContext>
  );
};

export default App;
 