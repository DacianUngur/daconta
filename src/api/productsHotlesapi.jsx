import Image1 from "../components/imagini/web-site-1.png";
import Image2 from "../components/imagini/web-site-8.png";
import Image3 from "../components/imagini/web-site-5.png";
import Image4 from "../components/imagini/web-site-2.png";
import Image5 from "../components/imagini/web-site-3.png";
import Image6 from "../components/imagini/web-site-2.png";
import Image7 from "../components/imagini/web-site-6.png";
import Image8 from "../components/imagini/web-site-7.png";

const productsForHotels = [
  {
    id: "htpd001",
    imageUrl: Image1,
    title: "Refined Rendezvous®",
    numberReviews: 75,
    category: "categoria pensiuni / hoteluri",
    price: 299,
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
    id: "htpd003",
    imageUrl: Image2,
    title: "Majestic Azure®",
    numberReviews: 104,
    category: "categoria pensiuni / hoteluri",
    price: 659,
    rating: 5,
  },
  {
    id: "htpd004",
    imageUrl: Image4,
    title: "Platinum Haven®",
    numberReviews: 54,
    category: "categoria pensiuni / hoteluri",
    price: 459,
    rating: 5,
  },
  {
    id: "htpd005",
    imageUrl: Image6,
    title: "Luxuria Grandiose®",
    numberReviews: 96,
    category: "categoria pensiuni / hoteluri",
    price: 109,
    rating: 5,
  },
  {
    id: "htpd006",
    imageUrl: Image7,
    title: "Elite Sapphire®",
    numberReviews: 84,
    category: "categoria pensiuni / hoteluri",
    price: 229,
    rating: 5,
  },
  {
    id: "htpd007",
    imageUrl: Image8,
    title: "Imperial Crown Plaza®",
    numberReviews: 150,
    category: "categoria pensiuni / hoteluri",
    price: 309,
    rating: 5,
  },
  {
    id: "htpd008",
    imageUrl: Image5,
    title: "Royal Suites®",
    numberReviews: 1.256,
    category: "categoria pensiuni / hoteluri",
    price: 749,
    rating: 5,
  },
  {
    id: "htpd009",
    imageUrl: Image7,
    title: "Opulent Oasis®",
    numberReviews: 83,
    category: "categoria pensiuni / hoteluri",
    price: 659,
    rating: 5,
  },
];

const fetchDataProductsHotels = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: productsForHotels,
        isOk: true,
      });
    }, 0);
  });
};

export default fetchDataProductsHotels;

export const fetchProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productForHotels = productsForHotels.find((item) => item.id === id);
      if (productForHotels) {
        resolve({
          data: productForHotels,
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
