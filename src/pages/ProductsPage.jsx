import React from "react";
import { Carousel, Footer, NavBar, Products } from "../components";

const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Products heading={"Catalog of Offerings"} list={"carousel"} />
      <Footer />
    </div>
  );
};

export default ProductsPage;
