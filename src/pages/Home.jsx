import React from "react";
import { Header } from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Navbar } from "../components/common/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <Footer/>
    </div>
  );
};
