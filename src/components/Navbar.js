import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="droom-logo">Droom</div>
        <div className="links">
          <div id="link1" className="Cera-Pro">
            Celebrating 10 Years
          </div>
          <div id="link2" className="Cera-Pro">
            Achievements
          </div>
          <div id="link3" className="Cera-Pro">
            Chief Guests
          </div>
          <div id="link4" className="Cera-Pro">
            Supply Chain
          </div>
          <div id="link5" className="Cera-Pro">
            Partners & Sponsors
          </div>
          <div id="link6" className="Cera-Pro">
            Brand Recognition
          </div>
          <div id="link7" className="Cera-Pro">
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
