import React from "react";
import Footer from "@components/Footer";
import NavBar from "@components/navbar";
import Cards from "@components/home/Cards";
interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <NavBar />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
