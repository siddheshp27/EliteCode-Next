import React from "react";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import { Footer } from "flowbite-react";

const Home = () => {
  return (
    <div className="home w-full overflow-x-clip">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
