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
    { name: "Sale", value: "1" },
  ];

  return (
    <div className="search-box">
      <Container className="search-container">
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
              <Col md={10}>
                <Form.Control id="search" placeholder="search" type="text" />
              </Col>
              <Col md={2}>
                <Button className="search-button">
                  <LiaSearchSolid />
                </Button>
              </Col>
            </Row>
          </Row>

          <Row className="radios-buttons">
            <Col>Radios-Buttton</Col>
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
