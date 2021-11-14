import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./Footer.css";
const Footer = () => {
  const history = useHistory();
  const footerLogin = () => {
    history.push("/login");
  };
  return (
    <div className="footer-container mt-5">
      <h2>Come To The Best Medical Facility In This City</h2>
      <h5>With All Modern Amenities Available</h5>
      <Link to="/login">
        <Button
          onClick={footerLogin}
          className="mt-3"
          variant="success"
          size="lg"
        >
          Login
        </Button>
      </Link>
      <p className="mt-5">©2021 Tanvir All rights reserved </p>
    </div>
  );
};

export default Footer;
