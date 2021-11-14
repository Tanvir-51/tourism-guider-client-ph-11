import React from "react";
import Banner from "../Banner/Banner";
import Resources from "../Resources/Resources";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Resources></Resources>
    </div>
  );
};

export default Home;
