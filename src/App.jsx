import Header from "./components/header/header";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import ProductsWbsHotels from "./components/Products Wbs Hotels/productswbshotels";
import Desprenoi from "./components/desprenoi/desprenoi";
import Sepoate from "./components/sepoate/sepoate";
import Contact from "./components/contact/contact";
import ProductsWbsRestaurants from "./components/Products Wbs Restaurants/productswbsrestaurants";
import ProductsWbsAtractions from "./components/Products Wbs Atractions/productswbsatractions";
import Abomanentspromoting from "./components/Abonamente Promovare/abonamentspromoting";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AllProducts from "./components/All products/allproducts";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/websiteurihotelurisipensiuni"
            element={<ProductsWbsHotels />}
          />
          <Route
            path="/websiteurirestaurante"
            element={<ProductsWbsRestaurants />}
          />
          <Route
            path="/websiteuriatractiituristice"
            element={<ProductsWbsAtractions />}
          />

          <Route path="/desprenoi" element={<Desprenoi />} />
          <Route path="/daconta" element={<Homepage />} />
          <Route path="/sepoate" element={<Sepoate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produse/:ProductId" element={<ProductDetails />} />
          <Route path="/toateprodusele" element={<AllProducts />} />
          <Route
            path="/abonamentepromovare"
            element={<Abomanentspromoting />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
