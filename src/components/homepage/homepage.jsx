import "./homepage.css";

import Banner from "../banner/banner";
import Paragraph from "../paragraph/paragraph";
import Imageandtext from "../image and text/imageandtext";
import Paragraphlast from "../paragraphlast/paragraphlast";
import FeaturedContentProducts from "../featured products/featured";

function Homepage() {
  return (
    <div>
      <Banner />
      <Paragraph />
      <Imageandtext />
      <Paragraphlast />
      <FeaturedContentProducts />
    </div>
  );
}

export default Homepage;
