import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import HowItWorks from "./pages/howItWorks/HowItWorks.jsx";
import Privacy from "./pages/privacy/Privacy.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbars from "./components/Navbar/Navbar.jsx";
import FAQ from "./pages/faqs/FAQ.jsx";
import Terms from "./pages/termsAndCondition/Terms.jsx";
import ScrollToTop from "./components/Scroll/ScrollToTop.jsx";
import CancellationAndRefund from "./pages/cancellation/Cancellation.jsx";
import ShippingAndDelivery from "./pages/shipping/Shipping.jsx";

function App() {
  return (
    <Router>
      <Navbars />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/policies/terms" element={<Terms />} />
        <Route path="/policies/privacy" element={<Privacy />} />
        <Route path="/policies/shipping" element={<ShippingAndDelivery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/policies/cancellation"
          element={<CancellationAndRefund />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
