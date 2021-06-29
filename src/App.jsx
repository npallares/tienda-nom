import './App.css';
import { Navbar } from './Components/navbarComponents/indexNavbar';
import { ItemDetailContainer} from './Components/detailComponents/itemDetailContainer';


function App() {
  return (
    <div>
      <Navbar/>
      <ItemDetailContainer/>
    </div>
  );
};

export default App;
