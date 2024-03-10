import ProductsWbsRestaurants from "../Products Wbs Restaurants/productswbsrestaurants";
import ProductsWbsHotels from "../Products Wbs Hotels/productswbshotels";
import ProductsWbsAtractions from "../Products Wbs Atractions/productswbsatractions";

import "./allproducts.css";

function AllProducts() {
  window.scrollTo(0, 0);
  return (
    <div className="main-allproducts">
      <h1>Toate Produsele:</h1>
      <div className="list-allproducts">
        <ProductsWbsAtractions />
        <ProductsWbsHotels />
        <ProductsWbsRestaurants />
      </div>
    </div>
  );
}

export default AllProducts;
