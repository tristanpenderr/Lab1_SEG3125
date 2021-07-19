import React from "react";
import './App.css';
import email_pin  from '../images/email_pin.png'
import phone_pin from '../images/phone_pin.png'
import book_club_main from '../images/book_club_main.jpeg'
import location_pin from '../images/location_pin.png'


import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";




function handleSubmit(e){
    e.preventDefault();
    alert('Your message has been sent. We will respond promptly');


}


const Contact = () => {
    return (
<div className = "content">
      <Jumbotron fluid className = "container bg-light text-center">
        <Container>
          <h1>Contact Us!</h1>
          <p>
            If you have any question or concerns please contact us by phone, email or by visiting our physical location.
          </p>

          <Alert variant="danger">
            <Alert.Heading>COVID-19 Notice</Alert.Heading>
            <p>
            Due to COVID-19, our responses might be delayed, however we will get back to you!
            </p>
        </Alert>
          <p>
              <img src={phone_pin} width="30" height="30"/>613-444-1919
              &nbsp;
              <img src={email_pin} width="40" height="30"/> info@picasolibrary.org
              &nbsp;
              <img src={location_pin} width="30" height="30"/> 100 Picaso Way, Ottawa, ON , K2W 9K1



        
          </p>



          
        </Container>
      </Jumbotron>
      <br />
      <br />

      <br />
      <br />



      </div>
    );
  };
  
  export default Contact;