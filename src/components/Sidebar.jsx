import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <ul>
      <li><Link to="/Concrete" className="sidebar-link"> <img src="images/concrete.svg" alt="" /> Concrete </Link></li>
      <li><Link to="/Brickwork" className="sidebar-link"> <img src="images/brickwork.svg" alt="" /> Brickwork</Link></li>
      <li><Link to="/Mortar" className="sidebar-link"> <img src="images/mortar.svg" alt="" /> Mortar</Link></li>
      <li><Link to="/Plaster" className="sidebar-link">  <img src="images/plaster.svg" alt="" /> Plaster</Link></li>
      <li><Link to="/Putty" className="sidebar-link"> <img src="images/putty.png" alt="" /> Putty</Link></li>
      <li><Link to="/Paint" className="sidebar-link"> <img src="images/paint.svg" alt="" /> Wall-Paint</Link></li>
    </ul>
  </div>
  );
};

export default Sidebar;
