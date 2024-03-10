import "./footer.css";
import Logo from "../logo/daconta-b.png";
import Sol from "../imagini/anpc-sol.png";
import Sal from "../imagini/anpc.png";

function Footer() {
  return (
    <footer>
      <div className="footer-elements">
        <div className="footerelement">
          <a href="#">Contact</a>
          <a href="#">Metodalități de plată</a>
          <a href="#">Cum ajunge site-ul in posesia ta ?</a>
          <a href="#">Cum comand un site personalizat ?</a>
        </div>
        <div className="footerelement">
          <a href="#">Termeni și condiții</a>
          <a href="#">Politica de utilizare Cookie-uri</a>
          <a href="#">ANPC</a>
          <a href="#">GDPR</a>
        </div>
        <div className="footerelement images">
          <img src={Logo} />
          <div className="imgfooter">
            <img src={Sol} />
            <img src={Sal} />
          </div>
        </div>
      </div>
      <p className="footer-bar"> ® 2024 Daconta</p>
    </footer>
  );
}

export default Footer;
