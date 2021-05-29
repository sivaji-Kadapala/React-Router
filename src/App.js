import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Register from "./component/Register";
import Login from "./component/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/Contact">Contact</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/Register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/Login">Login</Link>
              </li>
             
             
             
            </ul>
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/Register" component={Register}></Route>
            <Route exact path="/Login" component={Login}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
