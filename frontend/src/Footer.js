import React from "react";
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__bg">
        <div className="footer__box">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Stokio</h1>
              <span className="footer__subtitle">
                Lorem ipsum dolor sit amet consectetur .
              </span>
            </div>
            <ul className="footer__links">
              <li>
                <a href="/" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="/stock" className="footer__link">
                  Stock
                </a>
              </li>
              <li>
                <a href="/about" className="footer__link">
                  About
                </a>
              </li>
            </ul>
            <div className="footer__socials">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="uil uil-arrow"></i>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="uil uil-link"></i>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
          </div>
          <div className="iframe__section">
            <iframe
              title="location"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IIT%20BHU+(Location)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <p className="footer__copy">&#169; Lorem Ipsum. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
