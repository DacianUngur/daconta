import Card from "../card/card";
import fetchDataProductsRestaurants from "../../api/productsRestaurantsapi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductsWbsRestaurants() {
  const navigate = useNavigate();
  const [productsForRestaurants, setproductsForRestaurants] = useState([]);

  const getData = async () => {
    const { isOk, data } = await fetchDataProductsRestaurants();
    if (isOk) {
      setproductsForRestaurants(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/produse/${id}`);
  };

  return (
    <div className="section-products">
      <h1>Website-uri pentru Restaurante</h1>
      <p className="paragraph-products">
        Descoperă puterea unei prezențe online remarcabile cu serviciile noastre
        de creare website-uri pentru restaurante. Prezentăm locația tău în cel
        mai bun mod cu galerii foto de înaltă calitate și tururi virtuale
        interactive.
      </p>
      <div className="cards-display">
        {productsForRestaurants.map(
          ({ imageUrl, title, numberReviews, category, price, id, rating }) => (
            <Card
              key={id}
              onClick={() => handleProductClick(id)}
              imageUrl={imageUrl}
              title={title}
              numberReviews={numberReviews}
              category={category}
              price={price}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ProductsWbsRestaurants;
