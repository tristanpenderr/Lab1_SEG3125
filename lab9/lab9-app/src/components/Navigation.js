import React from "react";
import logo from '../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'



const Navigation = () => {
    return (
        <div className="App">
        <Navbar bg = "dark" variant = "dark"
        fixed="top">
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px"/>{' '}
            The Picaso Library
  
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="./">Home</Nav.Link>
            <NavDropdown title="Inventory" id="basic-nav-dropdown">
              <NavDropdown.Item href="/featured">
                Full Inventory
              </NavDropdown.Item>
              <NavDropdown.Item href="/art_inventory">
                Art Inventory
              </NavDropdown.Item>
              <NavDropdown.Item href="/book_inventory">
                Book Inventory
              </NavDropdown.Item>
              <NavDropdown.Item href="/music_inventory">Music Inventory</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Explore" id="basic-nav-dropdown">
            <NavDropdown.Item href="/book_club" width="100px">Book Club</NavDropdown.Item>
            <NavDropdown.Item href="/coffee_house" width="100px">Coffee House</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="contact" >Contact</Nav.Link>
          </Nav>

          <Nav className="container-fluid">
            <Nav.Link className = "ml-auto bg-light text-dark" href="french">Francais</Nav.Link>
          </Nav>
        </Navbar>
        
      </div>
    );
  };
  
  export default Navigation;