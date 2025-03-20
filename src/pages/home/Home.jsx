import React from "react";
import ServicesSection from "../../components/Services/ServicesSection";
import HowItWorkCompo from "../../components/HowItWorks/HowItWorkCompo";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import DownloadApp from "../../components/AppSection/DownloadApp";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";

function Home() {
  return (
    <React.Fragment>
      <Header />

      <WhyChooseUs />

      <About />

      <ServicesSection />

      <HowItWorkCompo />

      <DownloadApp />

      <SocialMedia />
    </React.Fragment>
  );
}

export default Home;
