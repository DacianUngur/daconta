import React, { useState } from "react";
import StarRating from "../Starrating/starrating";
import "./reviews.css";

function Reviews() {
  const [reviewList, setReviewList] = useState([
    {
      id: 1,
      title: "Un produs excelent!",
      userName: "Andrei Popescu",
      rating: 5,
      text: "Produsul a depășit cu mult așteptările mele. Sunt foarte mulțumit!",
    },
    {
      id: 2,
      title: "O alegere bună",
      userName: "Ana Maria Radu",
      rating: 5,
      text: "Un produs bun la un preț rezonabil. Recomand!",
    },
    {
      id: 3,
      title: "Toate stelele",
      userName: "Alexandru Ionescu",
      rating: 5,
      text: "Un website minunat care se potriveste pentru domeniul meu",
    },
    {
      id: 4,
      title: "Recomand cu încredere!",
      userName: "Elena Dumitrescu",
      rating: 5,
      text: "Am fost foarte impresionat de calitatea produsului și de serviciile oferite de acest magazin online.",
    },
    {
      id: 5,
      title: "Nu pot să cred cât ma ajuta la promovare!",
      userName: "Ion Mihai Preda",
      rating: 5,
      text: "Probabil cel mai bun produs pe care l-am cumpărat vreodată. Nu îmi venea să cred cât de bun este!",
    },
  ]);

  const [newReview, setNewReview] = useState({
    title: "",
    userName: "",
    rating: 1,
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleRatingChange = (newRating) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      rating: newRating,
    }));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    const updatedReviewList = [
      ...reviewList,
      { ...newReview, id: reviewList.length + 1 },
    ];
    setReviewList(updatedReviewList);
    setNewReview({
      title: "",
      userName: "",
      rating: 1,
      text: "",
    });
  };

  return (
    <div className="reviews-container">
      <h1>Recenzii:</h1>
      <ul>
        {reviewList.map((review) => (
          <li key={review.id} className="review-item">
            <h3>{review.title}</h3>
            <div className="user-info">
              <div className="rating-bar">
                <div>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <div>{review.userName}</div>
            </div>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
      <div className="add-review-form">
        <h3>Adaugă o recenzie</h3>
        <form onSubmit={handleAddReview}>
          <div className="form-colum">
            <div className="form-group">
              <label>
                Titlul recenziei:
                <input
                  type="text"
                  name="title"
                  value={newReview.title}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Numele tău:
                <input
                  type="text"
                  name="userName"
                  value={newReview.userName}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>
              Rating:
              <StarRating
                rating={newReview.rating}
                onRatingChange={handleRatingChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Recenzie:
              <textarea
                name="text"
                value={newReview.text}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="form-group">
            <button type="submit">Adaugă recenzie</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reviews;
