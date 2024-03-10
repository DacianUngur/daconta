import "./card.css";
import "../general style/style.css";
import StarRating from "../Starrating/starrating";

function Card({
  imageUrl,
  title,
  numberReviews,
  category,
  price,
  onClick,
  rating,
}) {
  return (
    <div className="products-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <div className="rating-bar">
        <StarRating rating={rating} />
        <p> ( {numberReviews} ) </p>
      </div>
      <p>{category}</p>
      <p className="price-product">{price} EURO</p>
      <div className="button-style center-cards" onClick={onClick}>
        VIZUALIZEAZĂ
      </div>
    </div>
  );
}

export default Card;
