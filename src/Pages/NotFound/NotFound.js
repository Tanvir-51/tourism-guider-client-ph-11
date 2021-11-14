import React from "react";
import { Link } from "react-router-dom";
import notFound from "./404.jpg";

const NotFound = () => {
  return (
    <div>
      <img style={{ width: "50%", height: "500px" }} src={notFound} alt="" />
      <br />
      <Link to="/">
        <button className="btn btn-primary">Go back</button>{" "}
      </Link>
    </div>
  );
};

export default NotFound;
