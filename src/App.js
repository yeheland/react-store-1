import logo from './logo.svg';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Products from './Products/Products'
import Panier from './Panier/Panier'


function App() {

  const [panier, setPanier] = useState([])

  return (
    <div className="App">
      <header className='d-flex justify-content-center align-items-center mt-3'>
        <img style={{maxWidth: "50px"}} src={logo} alt="" />
        <h1 className='text-center'>Magasin en React</h1>
        <img style={{maxWidth: "50px"}} src={logo} alt="" />
      </header>
      <main className='p-5'>
        <Panier name="panier" panier={panier} setPanier={setPanier} />
        <Products name="products" panier={panier} setPanier={setPanier} />
      </main>
    </div>
  );
}

export default App;
