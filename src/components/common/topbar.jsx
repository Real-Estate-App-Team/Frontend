import React, { useState } from "react";
import { Navbar, Button, Container } from "react-bootstrap";

const LanguageSelector = () => {
  const [activeLanguage, setActiveLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setActiveLanguage(language);
    // Burada dil değiştirme işlemleri yapılabilir.
    // Örneğin, dil seçimi ile ilgili bir fonksiyonu çağırabilirsiniz.
  };

  return (
    <div className="topbar bg-light ">
      <Container className="d-flex justify-content-end">
        <img
          src="https://flagcdn.com/24x18/us.png"
          alt="EN Flag"
          style={{ marginRight: "5px" }}
          onClick={() => handleLanguageChange("en")}
        />

        <img
          src="https://flagcdn.com/24x18/de.png"
          alt="DE Flag"
          style={{ marginRight: "5px" }}
          onClick={() => handleLanguageChange("tr")}
        />

        <img
          src="https://flagcdn.com/24x18/tr.png"
          alt="TR Flag"
          style={{ marginRight: "5px" }}
          onClick={() => handleLanguageChange("tr")}
        />
      </Container>
    </div>
  );
};

export default LanguageSelector;
