import Card from "../card/card";
import fetchDataProductsHotels from "../../api/productsHotlesapi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductsWbsHotels() {
  const navigate = useNavigate();
  const [productsForHotels, setProductsForHotels] = useState([]);

  const getData = async () => {
    const { isOk, data } = await fetchDataProductsHotels();
    if (isOk) {
      setProductsForHotels(data);
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
      <h1>Website-uri pentru Hoteluri si Pensiuni</h1>
      <p className="paragraph-products">
        Descoperă puterea unei prezențe online remarcabile cu serviciile noastre
        de creare website-uri pentru hoteluri. Prezentăm hotelul tău în cel mai
        bun mod cu galerii foto de înaltă calitate și tururi virtuale
        interactive.
      </p>
      <div className="cards-display">
        {productsForHotels.map(
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

export default ProductsWbsHotels;
