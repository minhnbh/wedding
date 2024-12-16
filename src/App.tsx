import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Countdown from "./components/Countdown";
import OurStory from "./components/OurStory";
import { Carousel } from "./components/Carousel";
import { Attending } from "./components/Attending";
import { OurWedding } from "./components/OurWedding";
import { Donation } from "./components/Donation";

function App() {
  return (
    <div className="page-container">
      <Header />
      <Banner />
      <Countdown />
      <OurStory />
      <Carousel />
      <Attending />
      <OurWedding />
      <Donation />
    </div>
  );
}

export default App;
