import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
 const handlebtn=()=>{
navigate("/Concrete")
  }

  return (
    <div className="home-content">
      <h3 className="home-title">Welcome to Quantity Calculator !!</h3>
      <div className="message">
        This app is designed to help you calculate the quantities of materials
        required for various construction tasks. Whether you are working with
        concrete, brickwork, mortar, plaster, putty, or wall paint, our app
        provides precise calculations to ensure you have the right amount of
        materials for your project.
      </div>
      <div className="home-btn">
      Select a category from the sidebar and begin your calculations.
      <div><button onClick={handlebtn}>Get Started </button></div>
      </div>
    </div>
  );
};

export default Home;
