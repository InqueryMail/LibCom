import { NavBar, Hero, Products, Footer, Map } from "../components";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Products heading={"Catalog of Offerings"} list={"products"} />
      <Map />
      <Footer />
    </>
  );
};

export default LandingPage;
