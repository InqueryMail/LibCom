import { NavBar, Hero, HomeProducts, Footer, Map } from "../components";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeProducts heading={"Catalog of Offerings"} list={"products"} />
      <Map />
      <Footer />
    </>
  );
};

export default LandingPage;
