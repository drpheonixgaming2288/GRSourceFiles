import React from "react";
import './Navbar.css'
import { useNavigate } from "react-router";

export default function Navbar() {
  const Navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark w-100" style={{background: '#000'}}>
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => Navigate("/")} style={{cursor: 'pointer'}}>
            <img src="https://raw.githubusercontent.com/drpheonixgaming2288/GRImg/main/GRLogo.png" height='50px'/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-black fas fa-music mt-2"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" onClick={() => Navigate("/")} style={{cursor: 'pointer'}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => Navigate("/artists")} style={{cursor: 'pointer'}}>
                  Artists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => Navigate("/contact")} style={{cursor: 'pointer'}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
