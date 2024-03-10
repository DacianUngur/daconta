import "./featured.css";
import Card from "../card/card";
import Image1 from "../imagini/website.png";
import Image2 from "../imagini/web-site-7.png";
import Image3 from "../imagini/web-site-5.png";
import Image4 from "../imagini/web-site-6.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: "htpd001",
    imageUrl: Image1,
    title: "Refined Rendezvous®",
    numberReviews: 75,
    category: "categoria pensiuni / hoteluri",
    price: 299,
    rating: 5,
  },
  {
    id: "rspd005",
    imageUrl: Image2,
    title: "Élégance Culinaire®",
    numberReviews: 153,
    category: "categoria restaurante",
    price: 279,
    rating: 4,
  },
  {
    id: "htpd002",
    imageUrl: Image3,
    title: "Nobilis Retreat®",
    numberReviews: 94,
    category: "categoria pensiuni / hoteluri",
    price: 359,
    rating: 5,
  },
  {
    id: "atpd005",
    imageUrl: Image4,
    title: "Majestic Discovery®",
    numberReviews: 452,
    category: "categoria atracții turistice",
    price: 559,
    rating: 4,
  },
];

function FeaturedContentProducts() {
  const navigate = useNavigate();

  const handleProductFeaturedClick = (id) => {
    navigate(`/produse/${id}`);
  };

  return (
    <div>
      <div className="title-featrued">
        <h1>Cele mai căutate</h1>

        <Link
          className="button-style center-cards center"
          to={"/toateprodusele"}
        >
          VEZI TOT
        </Link>
      </div>
      <div className="cards-display">
        {featuredProducts.map(
          ({ imageUrl, title, numberReviews, category, price, id, rating }) => (
            <Card
              key={id}
              onClick={() => handleProductFeaturedClick(id)}
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

export default FeaturedContentProducts;
