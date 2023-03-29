import React from "react";
import Banner from "./components/Banner";
import NewProducts from "./components/NewProducts";
import Vitrin from "./components/Vitrin";

const Home = () => {

  return (
    <div className="container">
      <Banner />
      <Vitrin />
      <NewProducts />
    </div>
  );

};

export default Home;
