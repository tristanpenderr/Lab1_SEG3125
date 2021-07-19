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
            La bibliothèque Picaso
  
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="./">Accueil</Nav.Link>
            <NavDropdown title="Inventory" id="basic-nav-dropdown">
              <NavDropdown.Item href="/featured">
              Inventaire complet
              </NavDropdown.Item>
              <NavDropdown.Item href="/art_inventory">
              Inventaire des œuvres d'art
              </NavDropdown.Item>
              <NavDropdown.Item href="/book_inventory">
              Inventaire des livres
              </NavDropdown.Item>
              <NavDropdown.Item href="/music_inventory">Inventaire musical</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="/book_club">
              Club de Lecture
              </NavDropdown.Item>
              <NavDropdown.Item href="/coffee_house">
              Cafe
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact" >Contact</Nav.Link>
          </Nav>

          <Nav className="container-fluid">
            <Nav.Link className = "ml-auto bg-light text-dark" href="/">English</Nav.Link>
          </Nav>
        </Navbar>
        
      </div>
    );
  };
  
  export default Navigation;