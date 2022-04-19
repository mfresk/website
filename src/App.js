import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ScrollingProvider
} from 'react-scroll-section';
import "./App.css";
import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs";
import StatergicSourcing from "./components/StatergicSourcing";
import TrainingAndDev from "./components/TrainingAndDev";
import TechnologyCon from "./components/TechnologyCon";
import DigitalTrans from "./components/DigitalTrans";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollingProvider>
        <Navigation />
        <home/>
        <Routes>          
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/navigation" element={<Navigation />}></Route>
          <Route path="/career" element={<Careers />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/statergic" element={<StatergicSourcing />}></Route>
          <Route path="/training" element={<TrainingAndDev />}></Route>
          <Route path="/technology" element={<TechnologyCon />}></Route>
          <Route path="/digital" element={<DigitalTrans />}></Route>
        </Routes>
        {/* <Footer /> */}
        <SocialMedia />
      </ScrollingProvider>
    </BrowserRouter>
  );
};

export default App;
