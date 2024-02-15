import { useTransition } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const onSelectLanguage = (language) => {
    //Local tarayici ayarlarinin hafizada tutulmasi
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };

  return (
    <>
      <Container className="justify-content-center d-flex my-3">
      <img
        src="https://flagcdn.com/24x18/us.png"
        width="24"
        height="18"
        alt="English"
        role="button"
        onClick={() => onSelectLanguage("en")}
        className="mx-1"
      ></img>
      <img
        src="https://flagcdn.com/24x18/tr.png"
        width="24"
        height="18"
        alt="Türkce"
        role="button"
        onClick={() => onSelectLanguage("tr")}
        className="mx-1"
      ></img>
      <img
        src="https://flagcdn.com/24x18/de.png"
        width="24"
        height="18"
        alt="Deutsch"
        role="button"
        onClick={() => onSelectLanguage("de")}
        className="mx-1"
      ></img>
      </Container>
    </>
  );
}
