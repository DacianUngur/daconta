import "./imageandtext.css";
import "../general style/style.css";
import { Link } from "react-router-dom";

import Website from "../imagini/website.jpg";
import Promote from "../imagini/promote.jpg";

function Imageandtext() {
  return (
    <div className="sections-txtandimg">
      <div className="element-img-right">
        <img src={Website} />
        <div className="textsection">
          <h1>Website-uri de calitate</h1>
          <p>
            Dacă activitatea ta se desfașoară în vreunul din urmatoarele
            domenii: hoteluri, pensiuni, restaurante, atracții turistice; atunci
            te afli la locul potrivit. Daconta este partenerul perfect pentru
            Website-ul companiei tale.
          </p>

          <Link className="button-style button-width" to={"/toateprodusele"}>
            DESCOPERĂ PRODUSELE DACONTA
          </Link>
        </div>
      </div>
      <div className="element-img-left">
        <div className="textsection">
          <h1>Promovarea continua a afacerii tale</h1>
          <p>
            Folosim tehnici avansate de publicitate online pentru a vă aduce în
            fața audienței targetate, asigurând un randament investițional
            ridicat pentru fiecare euro cheltuit în campanii publicitare.
          </p>
          <Link
            className="button-style button-width"
            to={"/abonamentepromovare"}
          >
            MAI MULTE DETALII
          </Link>
        </div>
        <img src={Promote} />
      </div>
    </div>
  );
}
export default Imageandtext;
