import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Navbar } from './Components/navbarComponents/indexNavbar';
import { ItemDetailContainer } from './Components/detailComponents/itemDetailContainer';
import { ItemListContainer } from './Components/ItemComponents/itemListContainer';
import { ShopComponentContext, ShopContext } from './context/shopContext';


function App() {
  return (  
    <ShopComponentContext>
      
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/producto/:productoId" component={ItemDetailContainer}/>
            <Route path="*" component={()=> <h1 className="red">404</h1>}/>
          </Switch>
        </BrowserRouter>
      
    </ShopComponentContext>
  );
};

export default App;
 