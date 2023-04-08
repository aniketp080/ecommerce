
//import './App.css';

import Navbar from "./components/Navbar";
import Product from"./components/Product";
import Home from "./Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Navbar/>


      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Product/>}/>
        <Route exact path="/products/:id" element={<Products/>}/>
        <Route exact path="/addproduct" element={<AddProduct/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    
    
    
    
    
    </>
  );
}

export default App;
