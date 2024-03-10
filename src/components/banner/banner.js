import "./banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-element">
      <h1>Bun venit la</h1>
      <h1>Daconta</h1>
      <p>fiecare click deschide uși către o experiență remarcabilă</p>

      <Link className=" banner-link" to={"/toateprodusele"}>
        Descoperă Produsele Noastre
      </Link>
    </div>
  );
}

export default Banner;
