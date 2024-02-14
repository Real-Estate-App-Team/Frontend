import React from "react";
import { useState } from "react";
import "./search.scss";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
  ToggleButton,
} from "react-bootstrap";
import { LiaSearchSolid } from "react-icons/lia";

function Search() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Rent", value: "1" },
    { name: "Sale", value: "2" },
  ];

  return (
    <div className="search-box">
      <Container className="search-container ms-5 d-none d-sm-flex align-items-start justify-content-start py-2">
        <Row className="search">
          <Row className="title">
            <h2>Easy Way to Find a Perfect Property</h2>
          </Row>

          <Row className="search-group">
            <Col className="radios">
              {radios.map((radio, idx) => (
                <ToggleButton
                  size="sm"
                  className="toggle"
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? "outline-danger" : "outline-success"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </Col>
          </Row>

          <Row className="search-area">
            <Row className="search-input">
              <Col md={11} sm={9} className="search-text-col">
                <Form.Control id="search" placeholder="search" type="text" />
              </Col>
              <Col md={1} sm={2} className="search-button-col">
                <Button className="search-button">
                  <LiaSearchSolid />
                </Button>
              </Col>
            </Row>
          </Row>

          <Row className="radios-buttons">
            <Col>
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="House"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Apartment"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Villa"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Office"
                      name="group1"
                      type={type}
                      id={`inline-${type}-4`}
                    />
                  </div>
                ))}
              </Form>
            </Col>
          </Row>
        </Row>
      </Container>

      <Image
        src="./assets/images/search/search-zone1.jpg"
        rounded
        alt="search"
        className="search-image"
      />
    </div>
  );
}

export default Search;
