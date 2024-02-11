import { UserOutlined } from "@ant-design/icons";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { config } from "../../helpers/config";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./menubar.scss";

function Menubar() {
  const [mode, setMode] = useState("white");
  const handleScroll = () => {
    const scrollYPosition = window.scrollY;
    if (scrollYPosition > 70) {
      setMode("dark");
    } else {
      setMode("white");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`menubar bg-${mode}`}
      sticky="top"
      data-bs-theme={mode}
    >
      <Container fluid>
        <Navbar.Brand href="#" title={config.project.name}>
          <Image
            src={`/assets/images/logo/${mode === "white" ? "logo" : "logo-white"}.png`}
            alt={config.project.name}
            className="img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              <Image
                src="/assets/images/logo/logo.png"
                alt={config.project.name}
                className="img-fluid"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3 menu">
              <Nav.Link as={Link} to="/" className="menu-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="#properties">
                Properties
              </Nav.Link>
              <Nav.Link as={Link} to="#about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="#contact">
                Contact
              </Nav.Link>
              {/* <Nav.Link as={Link} to="#contact">Register</Nav.Link>
                <Nav.Link as={Link} to="#contact">Login</Nav.Link> */}
            </Nav>
            <Nav className="ms-auto d-none d-lg-flex align-items-center">
              <UserOutlined className="d-none d-lg-block" />
              <Nav.Link href="#login">Login</Nav.Link>
              <div className="d-none d-lg-block">/</div>
              <Nav.Link href="signUp">Register</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Menubar;
