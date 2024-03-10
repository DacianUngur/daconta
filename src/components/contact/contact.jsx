import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contactează-ne!</h1>
      <div>
        <div>
          <p>
            Suntem aici pentru a vă oferi suport și a răspunde la întrebările
            dumneavoastră. Alegeți una dintre opțiunile de contact de mai jos,
            iar un reprezentant <span className="bold-text-p">Daconta</span> vă
            va contacta în cel mai scurt timp posibil.
          </p>
          <p className="bold-text-p smal-margin ">Telefon:</p>
          <p>+4 0798 999 514 </p>
          <p className="bold-text-p smal-margin ">Email:</p>
          <p>office@daconta.ro</p>
        </div>
        <div>
          <p className="bold-text-p smal-margin ">Adresa:</p>
          <p className="smal-margin">S.C. DACONTA S.R.L.</p>
          <p className="smal-margin">Localitatea:Oradea nr. 88</p>
          <p className="smal-margin">Județul: BIHOR</p>
          <p className="smal-margin">ROMANIA</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
