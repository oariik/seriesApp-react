import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Series from './Series';


class Home extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick = ()=> {
     
  }
  render() { 
    return ( 
      <div>
      <Router>
        <div>
          <div className="box">
            <Link to="/series"  onClick= {this.onClick}  href="/series"  style={{ color: "white" }}>
              SERIES
            </Link>
          </div>
          <div className="box">
            <Link to="/movies" style={{ color: "white" }}>
              MOVIES
            </Link>
            
          </div>
          <Route exact path="/series/"  />
          <Route exact path="/movies/"    />
          <Route exact path="/"  />
        </div>
      </Router>
          
      <div className="wrapper-footer">
          <div className="links">
            <a href="#"> Home |</a>
            <a href="#"> Terms and Conditions |</a>
            <a href="#"> Privacy Policy | </a>
            <a href="#"> Collection Statement |</a>
            <a href="#"> Help |</a>
            <a href="#"> Manage Account</a>
          </div>
          <p className="paragraf" > Copyright © 2016 DEMO Streaming. All rights reserved </p>
          <div className="social-icons"> 
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
    
          </div>
  
          <div className="store">
  
          </div>
      
       </div>
    </div>
     );
  }
}
 
export default Home;