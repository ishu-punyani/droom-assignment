import React from "react";
import Navbar from "./components/Navbar";
import './App.css'
import Celebrating10Years from "./components/Celebrating10Years";
import DroomBrandRecognition from "./components/DroomBrandRecognition";
import DroomAchievements from "./components/DroomAchievements";
import PartnersAndSponsors from "./components/PartnersAndSponsors";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Celebrating10Years />
      <DroomBrandRecognition />
      <DroomAchievements />
      <PartnersAndSponsors />
    </div>
  );
}

export default App;
