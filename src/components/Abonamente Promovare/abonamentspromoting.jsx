import FeaturedContentProducts from "../featured products/featured";
import Image1 from "../imagini/digitalmarketing.png";
import Image2 from "../imagini/globalmarketing.png";
import ButtonOrder from "../button order/buttonorder";

import "./abonamentpromotion.css";

function Abomanentspromoting() {
  window.scrollTo(0, 0);
  return (
    <div className="page-product-promotion">
      <h1>Abonamente Promovare Online</h1>
      <p>
        La Daconta, înțelegem importanța unei prezențe online solide pentru a
        atinge noi culmi de succes. Avem plăcerea de a vă prezenta soluțiile
        noastre de promovare în mediul digital, cu un accent deosebit pe
        platformele de comunicare de top, precum Google Ads și Facebook Ads.
      </p>
      <div className="section-two-elements">
        <div>
          <p>
            Alegând promovarea digitală, afacerea ta beneficiază de o prezență
            globală, interacțiune directă cu publicul, costuri eficiente și
            adaptabilitate rapidă, transformând provocările în oportunități și
            consolidând succesul în era digitală.
          </p>
          <ButtonOrder />
        </div>
        <img src={Image1} />
      </div>
      <p>
        Prin utilizarea eficientă a platformelor de comunicare de top precum
        Google Ads și Facebook Ads, vă ofer soluții personalizate care să vă
        pună afacerea în fața publicului țintă. Iată cum intenționez să vă ajut:
      </p>
      <h3>Optimizare pentru Google Ads:</h3>
      <p>
        Cu o campanie bine structurată pe Google Ads, afacerea dumneavoastră va
        atrage atenția utilizatorilor interesați, crescând astfel vizibilitatea
        și generând trafic de calitate pe site-ul dumneavoastră. Vom identifica
        cu atenție cuvintele cheie relevante și vom crea anunțuri captivante
        pentru a vă aduce în prim plan în căutările online.
      </p>
      <h3>Segmentare precisă pe Facebook Ads:</h3>
      <p>
        Prin intermediul Facebook Ads, vom targeta cu precizie audiența corectă
        pentru afacerea dumneavoastră. Fie că este vorba despre segmentarea după
        demografie, interese sau comportament online, vom asigura că mesajele
        dumneavoastră ajung la cei mai susceptibili de a deveni clienți loiali.
      </p>
      <img className="imagebanner" src={Image2} />
      <h3>Măsurarea performanțelor și optimizarea continuă:</h3>
      <p>
        Cu Daconta la cârmă, aveți garanția unei prezențe online puternice și a
        unei strategii digitale bine gândite. Contactați-ne astăzi pentru a
        începe transformarea afacerii dumneavoastră într-un succes online.
      </p>
      <p className="text-bold">Preturile incep de la 50euro / lună</p>

      <ButtonOrder />
      <p className="last-p">
        La Daconta, oferim nu doar servicii, ci o experiență de top în domeniul
        marketingului digital. Prețurile noastre reflectă angajamentul nostru de
        a furniza soluții de calitate superioară, adaptate nevoilor tale unice.
        Alege excelența în promovarea online cu Daconta și transformă-ți
        afacerea într-un brand remarcabil!
      </p>
      <FeaturedContentProducts />
    </div>
  );
}

export default Abomanentspromoting;
