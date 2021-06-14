import './App.css';
import { Navbar } from './Components/navbarComponents/indexNavbar';
import { ItemListContainer} from './Components/ItemComponents/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer data={"Bienvenidos a la Tienda Nom"}/>
    </div>
  );
};

export default App;
