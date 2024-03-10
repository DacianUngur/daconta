import Card from "../card/card";
import fetchDataProductsAtractions from "../../api/productsAtractionsapi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductsWbsAtractions() {
  const navigate = useNavigate();
  const [productsForAtractions, setproductsForAtractions] = useState([]);

  const getData = async () => {
    const { isOk, data } = await fetchDataProductsAtractions();
    if (isOk) {
      setproductsForAtractions(data);
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
      <h1>Website-uri pentru Atracții turistice</h1>
      <p className="paragraph-products">
        Descoperă puterea unei prezențe online remarcabile cu serviciile noastre
        de creare website-uri pentru atrații turistice. Prezentăm locația tău în
        cel mai bun mod cu galerii foto de înaltă calitate și tururi virtuale
        interactive.
      </p>
      <div className="cards-display">
        {productsForAtractions.map(
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

export default ProductsWbsAtractions;
