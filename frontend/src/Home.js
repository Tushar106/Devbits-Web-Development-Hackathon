import React from "react";
import Navbar from "./Navbar";
import MainImage from "./img/undraw_stock_prices_re_js33.svg";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home__section">
        <div className="text__section">
          <div className="heading__section">
            <h1 className="section__title title">Lorem Ipsum</h1>
            <h3 className="section__subtitle subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              natus, nam debitis quisquam minus quas iste totam, aliquid commodi
              sapiente unde dicta ducimus sed labore sit fuga, aliquam similique
              libero temporibus nihil.
            </h3>
          </div>
          <div className="button__section">
            <button className="getstarted__button">Get Started</button>
          </div>
        </div>
        <div className="img__section">
          <img src={MainImage} alt="React Logo" />
        </div>
      </div>
      <div className="scroll__component">
        <i className="uil uil-mouse-alt"></i>
      </div>
      <section className="rishi-section-content" id="features">
        <div className="rishi-layout-container">
          <div className="rishi-section-content__layout rishi-layout-grid rishi-layout-grid-2">
            <div className="rishi-component-card rishi-layout-column-4">
              <img
                src=""
                alt="first__image"
                loading="lazy"
                className="rishi-component-card--image"
              />
              <h4 className="rishi-component-card--title">First Heading.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, ex
                tempore illum dicta asperiores mollitia?.
              </p>
            </div>
            <div className="rishi-component-card rishi-layout-column-4">
              <img
                src=""
                alt="first__image"
                loading="lazy"
                className="rishi-component-card--image"
              />
              <h4 className="rishi-component-card--title">Second Heading.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                illum, laboriosam consequatur expedita autem libero!
              </p>
            </div>
            <div className="rishi-component-card rishi-layout-column-4">
              <img
                src=""
                alt="first__image"
                loading="lazy"
                className="rishi-component-card--image"
              />
              <h4 className="rishi-component-card--title">Third heading.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                maxime aut minus eaque aperiam quod?
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
