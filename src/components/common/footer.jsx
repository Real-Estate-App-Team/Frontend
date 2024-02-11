import "./footer.scss";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { config } from "../../helpers/config";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="footer">
        <Row>
          <Col xs={12} lg={3} md={4} className="section1">
            <Link to="/">
              <Image
                src="/assets/images/logo/logo-white.png"
                className="img-fluid"
                alt={config.project.name}
              />
            </Link>
            <p className="mt-3">{config.project.slogan}</p>
            <div className="store">
              <a href="appStore">
                <div>
                  App Store
                  <FaAppStoreIos />
                </div>
              </a>
              <a href="playStore">
                <div>
                  Google Play
                  <FaGooglePlay />
                </div>
              </a>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4} className="section2">
            <h3>Quick Links</h3>
            <Nav className="flex-column">
              <Nav.Link  as={Link} to="/">Home</Nav.Link>
              <Nav.Link  as={Link} to="/courses">Properties</Nav.Link>
              <Nav.Link  as={Link} to="/events">About</Nav.Link>
              <Nav.Link  as={Link} to="/about">Contact</Nav.Link>
              <Nav.Link  as={Link} to="/contact">Privacy Policy</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} sm={4} md={4} className="section3">
          <h3>Contact</h3>
            <Nav className="flex-column">
              <Nav.Link href={config.contact.mapURL} target="_blank">{config.contact.address}</Nav.Link>
              <Nav.Link href={`tel:${config.contact.phone1}`}>{config.contact.phone1}</Nav.Link>
              <Nav.Link href={`mailto:${config.contact.email}`}>{config.contact.email}</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
