import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import the_who from '../images/the_who.jpeg';
import beatles from '../images/Beatles_FullCollection.jpeg';
import led from '../images/Led_Zeppelin.jpeg'
import edgar from '../images/edgar.jpg';
import kids from '../images/kids.jpg';
import legal from '../images/legal_foundations.jpg';
import landscape from '../images/landscape.jpeg';
import river from '../images/river.jpeg';
import location_pin from '../images/location_pin.png';




const Footer = () => {
  return (
<div class="container-fluid pb-0 mb-0 justify-content-center text-light bg-dark ">
     <footer>
         <div class="row my-5 justify-content-center py-5">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 class="text-muted mb-md-0 mb-5 bold-text text-white">The Picaso Library</h3>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 bold-text "><b>Menu</b></h6>
                         <ul class="list-unstyled">
                             <li><a href="./">Home</a></li>
                             <li ><a href="./featured">Inventory</a></li>
                             <li ><a href="./book_club">Book Club</a></li>
                             <li><a href="./cofee_house">Coffee House</a></li>
                             <li><a href="./contact">Contact</a></li>

                         </ul>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">Address
</h6>
<img src={location_pin} width="30" height="30"/> 100 Picaso Way, Ottawa, ON , K2W 9K1
                     </div>
                 </div>
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                     </div>
                     
                 </div>
             </div>
         </div>
     </footer>
 </div>
  );
};

export default Footer;



