import React, { Fragment } from "react";
import "./Home.css";
// import bannerImg from "../Home/banner image/banner img.jpg";
import MetaData from "../layout/MetaData";
import SliderHome from "./SliderHome";
import Search from "../Product/Search";
import Footer from "../layout/Footer/Footer";
import PrescriptionForm from '../User/PrescriptionForm';

function Home() {
  return (
    <Fragment>
      <MetaData title="beta 1.0" />
      <div className="carousel-container">
        <div className="carousel">
          <div className="slider">
            <div className="slide-content">
              <h1 className="movie-title">Kamal Medicos Pharma</h1>
              <ul className="movie-des">
                <li>
                  Order medicines and health products online and get it
                  delivered at home.
                </li>
                <li>
                  Get your allopathic, ayurvedic, homeopathic medicines,
                  vitamins & nutrition supplements and other health-related
                  products delivered at home.
                </li>
              </ul>
            </div>
              <img
                className="home__img"
                src="https://images.unsplash.com/photo-1576091358783-a212ec293ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
              />
          </div>
        </div>
      </div>
      <h2 className="homeHeading">Featured Brands/Products</h2>
      <SliderHome />
      {/* <div className="home__intro">
        Search for :
        <ReactRotatingText
          className="textA"
          items={["Medicines", "Pain Balm", "Health Drinks"]}
          typingInterval={40}
        />
      </div> */}
      <Search />
      <br></br>
      <PrescriptionForm />
      <br></br>
      <Footer />
    </Fragment>
  );
}

// var ReactRotatingText = require("react-rotating-text");

export default Home;
