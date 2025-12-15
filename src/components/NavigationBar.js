import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">John Doe</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={({ isActive }) => 
                isActive ? "nav-link active-link" : "nav-link"}
                to="home">Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className= {({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"}
                to="/services">Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>
                isActive ? "nav-link active-link": "nav-link"}
                to="/portfolio">Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>
                isActive ? "nav-link active-link": "nav-link"}
                to="/contact">Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive })=>
                isActive ? "nav-link active-link" : "nav-link"}
                to="/mentions-legales">Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;