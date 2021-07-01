import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Navbar } from './Components/navbarComponents/indexNavbar';
import { Mercadolibre } from './Components/mlComponents/indexMl';
import { ItemDetailContainer } from './Components/detailComponents/itemDetailContainer';
import { ItemListContainer } from './Components/ItemComponents/itemListContainer';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Mercadolibre}/>
        <Route path="/producto/:productoId" component={ItemDetailContainer}/>
        <Route path="*" component={()=> <h1 className="red">404</h1>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
 