import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Benifits = () => {
  return (
    <div>
      <h1 className="my-5 text-primary">Additional Benifits</h1>
      <Container>
        <Row>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Handpicked Hotels
                </Card.Title>
                <hr />
                <Card.Text>
                  All Book Your Travel Hotels fulfil strict selection criteria.
                  Each hotel is chosen individually and inclusion cannot be
                  bought.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Exclusive Knowledge
                </Card.Title>
                <hr />
                <Card.Text>
                  We’ve done our research. Our scouts are always busy finding
                  out more about our hotels, activities on offer nearby.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Passionate Service
                </Card.Title>
                <hr />
                <Card.Text>
                  Book Your Travels’s team will cater to your special requests.
                  We offer expert and passionate advice for finding the right
                  hotel.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Best Price Guarantee
                </Card.Title>
                <hr />
                <Card.Text>
                  We offer the best hotels at the best prices. If you find the
                  same room category on the same dates cheaper elsewhere, we
                  will refund the difference.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Secure Booking
                </Card.Title>
                <hr />
                <Card.Text>
                  Book Your Travel reservation system is secure and your credit
                  card and personal information is encrypted.We work to
                  guarantee your privacy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Benefits for Hoteliers
                </Card.Title>
                <hr />
                <Card.Text>
                  We provide a cost-effective model, a network of over 5000
                  partners and a personalised account management service to help
                  you optimise your revenue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benifits;
