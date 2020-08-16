import React from "react";
import Header from "./Header";
import Footer from "./Footer"; 
import HomeImg from "./HomeImg"; 
import Content from "./Content"; 


const Home = () => {
  return (
    <div>
        <Header />
        <HomeImg />
        <Content />
        <Footer />
    </div>
  );
};
export default Home;