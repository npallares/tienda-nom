import logo from './logo.svg';
import './App.css';

const CardProduct = () =>{
  return(
    <div className="card">
          <div><img src={logo} className="logo" alt="logo" /></div>  
          <div className="description">
            <div className="title">Zapas Nike</div>
            <div className="price">$7200</div>
          </div>
    </div>
  );
};
const CardProduct2 = () =>{
  return(
    <div className="card2">
          <div><img src={logo} className="logo" alt="logo" /></div>  
          <div className="description">
            <div className="title">Zapas Nike</div>
            <div className="price">$7200</div>
          </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CardProduct/>
      <div className="row">
        <div className="test"><CardProduct/></div>
        <div className="test"><CardProduct2/></div>
        <div className="test"><CardProduct/></div>
        <div className="test"><CardProduct2/></div>
        <div className="test"><CardProduct/></div>
        <div className="test"><CardProduct2/></div>
      </div>
      <CardProduct2/>
      <div className="row">
        <div className="test"><CardProduct/></div>
        <div className="test"><CardProduct2/></div>
        <div className="test"><CardProduct/></div>
        <div className="test"><CardProduct2/></div>
        <div className="test"><CardProduct/></div>
        <div className="test"><CardProduct2/></div>
      </div>
    </div>
  );
};

export default App;
