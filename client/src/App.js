import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Category from './pages/Category';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Admin from './pages/Admin';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/drugs" element={<Category category="drugs" />} />
          <Route path="/skin-care" element={<Category category="skin-care" />} />
          <Route path="/baby-care" element={<Category category="baby-care" />} />
          <Route path="/home-care" element={<Category category="home-care" />} />
          <Route path="/men-care" element={<Category category="men-care" />} />
          <Route path="/women-care" element={<Category category="women-care" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
