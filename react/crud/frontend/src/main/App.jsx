import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Nav from "../components/templates/Nav";
import Footer from "../components/templates/Footer";
import Logo from "../components/templates/Logo";
import Home from "../components/home/Home";

export default props => (
  <div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>
);
