import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Dicatphone from "./components/Dicatphone";
import Login from "./components/Login";
import Services from "./components/Services";
import ServiceResult from "./components/ServiceResult";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class App extends Component {
  


  render() {
    localStorage.setItem('id',2)
    return (
      <div
        className="bg-gray-900 h-screen">
        <Navigation></Navigation>
        <Dicatphone></Dicatphone>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/services/class" exact component={ServiceResult} />
          <Route path="/services/events" exact component={ServiceResult} />
          <Route path="/services/grades" exact component={ServiceResult} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(App);
