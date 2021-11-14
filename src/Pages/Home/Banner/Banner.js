import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import img1 from "../Banner/anthony-delanoix-aDxmYZtYj7g-unsplash.jpg";
import img2 from "../Banner/free-walking-tour-salzburg-pIU6ksp2mOs-unsplash.jpg";
import img3 from "../Banner/photo-1608930716113-42a41e5d4ca2.avif";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
