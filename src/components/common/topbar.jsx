import React, { useState } from "react";
import { Navbar, Button, Container, Image } from "react-bootstrap";
import "./topbar.scss";

const topbar = () => {
  // const [activeLanguage, setActiveLanguage] = useState("en");

  // const handleLanguageChange = (language) => {
  //   setActiveLanguage(language);
  //   // Burada dil değiştirme işlemleri yapılabilir.
  //   // Örneğin, dil seçimi ile ilgili bir fonksiyonu çağırabilirsiniz.
  // };

  return (
    <div className="topbar">
      <Container className="topbar-container d-none d-md-block">
      
        <Image
          src="../assets/images/icons/en.png"
          alt="EN Flag"
          style={{ marginRight: "5px", border:"none"}}
          role="button"
          className="btn btn-outline-secondary"
          // onClick={() => handleLanguageChange("en")}
        />

        <Image
          src="../assets/images/icons/de.png"
          alt="DE Flag"
          style={{ marginRight: "5px" , border:"none"}}
          role="button"
          className="btn btn-outline-secondary"
          // onClick={() => handleLanguageChange("tr")}
        />

        <Image
          src="../assets/images/icons/tr.png"
          alt="TR Flag"
          style={{ marginRight: "5px" , border:"none"}}
          role="button"
          className="btn btn-outline-secondary"
          // onClick={() => handleLanguageChange("tr")}
        />
      </Container>
    </div>
  );
};

export default topbar;
