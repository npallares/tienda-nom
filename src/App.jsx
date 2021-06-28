import './App.css';
import { Navbar } from './Components/navbarComponents/indexNavbar';
import { ItemListContainer} from './Components/ItemComponents/itemListContainer';
import { Mercadolibre } from './Components/mlComponents/indexMl';
import { Formulario } from './Components/formularioComponents/indexFormulario';


function App() {
  return (
    <div>
      <Navbar/>
      {/* <Mercadolibre className="mlContainer"/> */}
      <ItemListContainer/>
    </div>
  );
};

export default App;
