import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import './App.css';

const Header = () => {
  return (
    <div className="wrapper" style={{ background: "black" }}>
      <Navbar inverse style={{ background: "blue" }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a  href="/" style={{ color: "white", fontSize: "28px" }}>DEMO Streaming</a>
          </Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
              <NavItem style={{ color: "white" }}>Log In</NavItem>
            <NavItem>
              <button style={{ background: "black", color: "white", border: "0px" }} >
                
                Start your free trial
              </button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div >
     <p className="title"> POPULAR TITLES</p>
   </div>
    </div>
    
   
  );
};

export default Header;
