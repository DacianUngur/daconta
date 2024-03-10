import Image1 from "../components/imagini/web-site-1.png";
import Image2 from "../components/imagini/web-site-8.png";
import Image3 from "../components/imagini/web-site-5.png";
import Image4 from "../components/imagini/web-site-2.png";
import Image5 from "../components/imagini/web-site-3.png";
import Image7 from "../components/imagini/web-site-6.png";
import Image8 from "../components/imagini/web-site-7.png";

const productsForAtractions = [
  {
    id: "atpd001",
    imageUrl: Image1,
    title: "Top Places®",
    numberReviews: 2.885,
    category: "categoria atracții turistice",
    price: 389,
    rating: 5,
  },
  {
    id: "atpd002",
    imageUrl: Image3,
    title: "Opulent Adventures Black®",
    numberReviews: 56,
    category: "categoria atracții turistice",
    price: 299,
    rating: 5,
  },
  {
    id: "atpd003",
    imageUrl: Image4,
    title: "Opulent Adventures®",
    numberReviews: 33,
    category: "categoria atracții turistice",
    price: 209,
    rating: 5,
  },
  {
    id: "atpd004",
    imageUrl: Image5,
    title: "Luxuria Grandiose®",
    numberReviews: 252,
    category: "categoria atracții turistice",
    price: 289,
    rating: 5,
  },
  {
    id: "atpd005",
    imageUrl: Image7,
    title: "Majestic Discovery®",
    numberReviews: 452,
    category: "categoria atracții turistice",
    price: 559,
    rating: 5,
  },
  {
    id: "atpd006",
    imageUrl: Image8,
    title: "Impresive Dawn®",
    numberReviews: 315,
    category: "categoria atracții turistice",
    price: 189,
    rating: 5,
  },
  {
    id: "atpd007",
    imageUrl: Image2,
    title: "Change Image®",
    numberReviews: 654,
    category: "categoria atracții turistice",
    price: 289,
    rating: 5,
  },
  {
    id: "atpd008",
    imageUrl: Image8,
    title: "Royal Image®",
    numberReviews: 77,
    category: "categoria atracții turistice",
    price: 359,
    rating: 5,
  },
];

const fetchDataProductsAtractions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: productsForAtractions,
        isOk: true,
      });
    }, 0);
  });
};

export default fetchDataProductsAtractions;

export const fetchProductAtractionsById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productForAtractions = productsForAtractions.find(
        (item) => item.id === id
      );
      if (productForAtractions) {
        resolve({
          data: productForAtractions,
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
