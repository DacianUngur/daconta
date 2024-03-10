import Image1 from "../components/imagini/web-site-1.png";
import Image2 from "../components/imagini/web-site-8.png";
import Image3 from "../components/imagini/web-site-5.png";
import Image5 from "../components/imagini/web-site-3.png";
import Image6 from "../components/imagini/web-site-2.png";
import Image7 from "../components/imagini/web-site-6.png";
import Image8 from "../components/imagini/web-site-7.png";

const productsForRestaurants = [
  {
    id: "rspd001",
    imageUrl: Image5,
    title: "Gourmet Elegance®",
    numberReviews: 55,
    category: "categoria restaurane",
    price: 299,
    rating: 4,
  },
  {
    id: "rspd002",
    imageUrl: Image6,
    title: "Retreat Luxury®",
    numberReviews: 56,
    category: "categoria restaurane",
    price: 299,
    rating: 5,
  },
  {
    id: "rspd003",
    imageUrl: Image7,
    title: "Luxury Space®",
    numberReviews: 554,
    category: "categoria restaurane",
    price: 359,
    rating: 5,
  },
  {
    id: "rspd004",
    imageUrl: Image3,
    title: "Luxuria Grandiose®",
    numberReviews: 752,
    category: "categoria restaurane",
    price: 229,
    rating: 5,
  },
  {
    id: "rspd005",
    imageUrl: Image8,
    title: "Élégance Culinaire®",
    numberReviews: 153,
    category: "categoria restaurane",
    price: 279,
    rating: 5,
  },
  {
    id: "rspd006",
    imageUrl: Image2,
    title: "Imperial Plazzo®",
    numberReviews: 1.215,
    category: "categoria restaurane",
    price: 999,
    rating: 5,
  },
  {
    id: "rspd007",
    imageUrl: Image1,
    title: "Royal Venue®",
    numberReviews: 550,
    category: "categoria restaurane",
    price: 589,
    rating: 5,
  },
  {
    id: "rspd008",
    imageUrl: Image5,
    title: "Royal Palate®",
    numberReviews: 85,
    category: "categoria restaurane",
    price: 309,
    rating: 5,
  },
];

const fetchDataProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: productsForRestaurants,
        isOk: true,
      });
    }, 0);
  });
};

export default fetchDataProducts;

export const fetchProductRestaurantById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productForRestaurants = productsForRestaurants.find(
        (item) => item.id === id
      );
      if (productForRestaurants) {
        resolve({
          data: productForRestaurants,
          isOk: true,
        });
      } else {
        resolve({
          data: null,
          isOk: false,
        });
      }
    }, 0);
  });
};
