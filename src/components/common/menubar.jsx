import Container from "react-bootstrap/Container";
import { UserOutlined } from "@ant-design/icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Image } from "react-bootstrap";
import { config } from "../../helpers/config";

function Menubar() {
  const expand = "lg"; // Set the desired expand size
  return (
    <Container className="my-3">
      <Navbar expand={expand} className="bg-none mb-3">
        <Container fluid>
          <Navbar.Brand href="#" title={config.project.name}>
            <Image
              src="/assets/images/logo/logo.png"
              alt={config.project.name}
              className="img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="d-flex align-items-center"
                id={`offcanvasNavbarLabel-expand-${expand}`}
              >
                <Image
                  src="/assets/images/logo/logo.png"
                  alt={config.project.name}
                  className="img-fluid"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#properties">Properties</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#contact">Register</Nav.Link>
                <Nav.Link href="#contact">Login</Nav.Link>
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
    </Container>
  );
}

export default Menubar;
