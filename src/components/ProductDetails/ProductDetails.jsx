import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api/productsHotlesapi";
import { fetchProductRestaurantById } from "../../api/productsRestaurantsapi";
import { fetchProductAtractionsById } from "../../api/productsAtractionsapi";
import React from "react";
import { useEffect, useState } from "react";
import "./productdetails.css";
import StarRating from "../Starrating/starrating";
import FeaturedContentProducts from "../featured products/featured";
import Reviews from "../reviews/reviews";

export default function ProductDetails() {
  window.scrollTo(0, 0);
  const [Product, setProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });
  const { ProductId } = useParams();

  const fetchData = async () => {
    // Try fetching data from fetchProductById
    const { isOk: isHotelProductOk, data: hotelProductData } =
      await fetchProductById(ProductId);

    // If fetchProductById is successful, set the product and return
    if (isHotelProductOk) {
      setProduct(hotelProductData);
      return;
    }

    // Try fetching data from fetchProductById
    const { isOk: isAtractionProductOk, data: atractionProductData } =
      await fetchProductAtractionsById(ProductId);

    // If fetchProductById is successful, set the product and return
    if (isAtractionProductOk) {
      setProduct(atractionProductData);
      return;
    }

    // If fetchProductById fails, try fetching data from fetchProductRestaurantById
    const { isOk: isRestaurantProductOk, data: restaurantProductData } =
      await fetchProductRestaurantById(ProductId);

    // If fetchProductRestaurantById is successful, set the product
    if (isRestaurantProductOk) {
      setProduct(restaurantProductData);
    } else {
      // If both fetchProductById and fetchProductRestaurantById fail, set the product to null
      setProduct(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!Product) {
    return <div> Produsul nu este disponibil</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datele introduse:", formData);
    setShowForm(false);
  };

  return (
    <div className="page-product">
      <div className="product-container">
        <div className="product-image sticky-object">
          <img src={Product.imageUrl} alt={Product.title} />
        </div>
        <div className="product-details">
          <p className="product-category-details">{Product.category}</p>
          <h1 className="product-title-details">{Product.title}</h1>
          <div className="rating-bar">
            <StarRating rating={Product.rating} />
            <p> ( {Product.numberReviews} ) </p>
          </div>
          <p className="product-price-details">{Product.price} EURO</p>
          <p className="product-tva-details">TVA inclus.</p>
          <p className="product-proritate-details">
            Comandă acum și îți garantăm livrare prioritară în Luna Urmatoare.
          </p>
          <div
            className="button-style modified-button-details"
            onClick={() => setShowForm(true)}
          >
            ÎL VREAU !
          </div>
          <div className="modified-description-details">
            <p>
              Website-ul nostru reprezintă un colț digital în care design-ul,
              funcționalitatea și inovația se împletesc pentru a crea o
              platformă ce te îndeamnă să explorezi și să interacționezi într-un
              mod captivant.
            </p>
            <p>
              Calitatea noastră se reflectă în fiecare aspect al site-ului,
              începând cu design-ul intuitiv și atractiv. Fiecare pagină este
              meticulos proiectată pentru a oferi o experiență de navigare
              plăcută și captivantă. Coloarele, fonturile și elementele grafice
              au fost alese cu grijă pentru a transmite identitatea brandului
              nostru și pentru a crea o atmosferă prietenoasă și profesionistă.
            </p>
            <p>
              Pe lângă estetică, ne mândrim cu performanța remarcabilă a
              site-ului nostru. Timpul de încărcare este optimizat pentru a
              asigura o navigare fluidă și rapidă, indiferent de dispozitivul
              folosit. Suntem dedicați oferirii unei experiențe consistente și
              plăcute utilizatorilor noștri, indiferent dacă accesează site-ul
              de pe un laptop, tabletă sau smartphone.
            </p>
            <p>
              Website-ul nostru nu este doar plăcut din punct de vedere vizual,
              ci și extrem de funcțional. Navigarea este intuitivă, iar toate
              funcționalitățile sunt concepute pentru a satisface nevoile și
              așteptările utilizatorilor noștri. De la formulare interactive și
              panouri de control ușor de utilizat până la integrarea social
              media și funcționalități avansate, ne asigurăm că fiecare detaliu
              servește scopului de a oferi o experiență web excepțională.
            </p>
            <p>
              Siguranța și confidențialitatea sunt priorități pentru noi.
              Website-ul nostru beneficiază de cele mai recente tehnologii de
              securitate pentru a proteja datele și informațiile personale ale
              utilizatorilor noștri. Ne angajăm să oferim o experiență online
              sigură și de încredere, astfel încât utilizatorii să se poată
              bucura pe deplin de tot ceea ce oferă site-ul nostru.
            </p>
            <p>
              În concluzie, "WebCraft Excellence" nu este doar un website, ci o
              destinație digitală în care calitatea este la bază fiecărui
              aspect. De la design-ul plin de creativitate până la performanța
              remarcabilă și funcționalitățile avansate, ne străduim să oferim o
              experiență web extraordinară, redefinind standardele calității în
              lumea online. Descoperă cu noi universul digital al excelenței!
            </p>
          </div>
          {showForm && (
            <div className="overlay">
              <div className="form-container">
                <h2>Completează datele pentru a fi contactat</h2>
                <form onSubmit={handleSubmit}>
                  <div className="line-form-checkout">
                    <label>
                      Nume:
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Prenume:
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <div className="line-form-checkout">
                    <label>
                      Compania:
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <h4>Produsul tău:</h4>
                  <div className="details-checkout">
                    <img
                      className="img-checkout"
                      src={Product.imageUrl}
                      alt={Product.title}
                    />
                    <p>
                      <span className="bold">Produs:</span> {Product.title}
                    </p>
                    <p>
                      <span className="bold">Preț:</span> {Product.price} EURO
                    </p>
                  </div>
                  <button type="submit">VREAU SĂ FIU CONTACTAT</button>
                  <div
                    className="close-button"
                    onClick={() => setShowForm(false)}
                  >
                    X
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Reviews />
      <FeaturedContentProducts />
    </div>
  );
}
