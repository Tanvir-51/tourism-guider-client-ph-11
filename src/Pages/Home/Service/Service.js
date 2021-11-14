import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";

const Service = ({ service }) => {
  const history = useHistory();
  const { id, name, img, description, price } = service; //destructuring service for single service
  return (
    <div className="col-lg-4 col-sm-6 col-12 ">
      <Card className="service" style={{ width: "24rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="text-success fw-bold">{price}</Card.Text>

          {/* <Link to={`/services/${id}`}> */}
          <Button
            variant="primary"
            onClick={() => {
              history.push(`/service/${id}`);
              console.log("hello service", id);
            }}
          >
            Book Now
          </Button>
          {/* </Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
