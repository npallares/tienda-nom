import './App.css';
import { Navbar } from './Components/navbarComponents/indexNavbar';
import { ItemListContainer} from './Components/ItemComponents/itemListContainer';
import { Mercadolibre } from './Components/mlComponents/indexMl';


function App() {
  return (
    <div>
      <Navbar/>
      <Mercadolibre className="mlContainer"/>
    </div>
  );
};

export default App;
