import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const scrollToSection = (targetClass) => {
    const targetSection = document.getElementsByClassName(targetClass)[0];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="droom-logo"></div>
        <div className="links">
          <div id="link1" className="Cera-Pro" onClick={() => scrollToSection('celebrating10years')}>
            Celebrating 10 Years
          </div>
          <div id="link2" className="Cera-Pro" onClick={() => scrollToSection('droom-achievements')}>
            Achievements
          </div>
          <div id="link3" className="Cera-Pro" onClick={() => scrollToSection('Group-164796')}>
            Chief Guests
          </div>
          <div id="link4" className="Cera-Pro">
            Supply Chain
          </div>
          <div id="link5" className="Cera-Pro" onClick={() => scrollToSection('partners-and-sponsors')}>
            Partners & Sponsors
          </div>
          <div id="link6" className="Cera-Pro" onClick={() => scrollToSection('droomBrandRecognition')}>
            Brand Recognition
          </div>
          <div id="link7" className="Cera-Pro" onClick={() => scrollToSection('footer')}>
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
