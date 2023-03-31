import React from 'react'
import Login from './Login';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand nav__title" href="/">
            Stokio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav__links"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav__links">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/stock">
                  Stock
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#footer">
                  Contact
                </a>
              </li>
            </ul>
            <button className="getstarted__button_navbar" onClick={()=>{navigate("/login")}}>Join</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar