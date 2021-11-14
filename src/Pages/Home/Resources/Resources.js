import React from "react";
import "./Resources.css";
import { Button, Col, Container, Row } from "react-bootstrap";

const Resources = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="p-5" style={{ backgroundColor: "#aacfe1" }}>
          <h2 className="fw-bold">Backpackers & Adventure Travellers</h2>
          <Button className="my-5" variant="primary" size="lg">
            <a
              className="anchor-link"
              href="https://www.dfa.ie/travel/assistance-abroad/backpacking-and-adventure-tourism/"
              target="_blank"
              rel="noreferrer"
            >
              View All Resources
            </a>
          </Button>
        </Col>
        <Col className="p-5" style={{ backgroundColor: "#bde6fb" }}>
          <h2 className="fw-bold">Elderly Travellers.</h2>
          <Button className="my-5" variant="primary" size="lg">
            <a
              className="anchor-link"
              href="https://travelhealthpro.org.uk/factsheet/70/older-travellers"
              target="_blank"
              rel="noreferrer"
            >
              View All Resources
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Resources;
