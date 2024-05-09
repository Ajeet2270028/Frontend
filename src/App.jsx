import "./App.css";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Navbar from "./componants/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./componants/Footer/Footer";
import men_banner from "./componants/Assets/banner_mens.png";
import women_banner from "./componants/Assets/banner_women.png";
import kid_banner from "./componants/Assets/banner_kids.png";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          {/* <Route path="/saveproducts" element={<Search />} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
