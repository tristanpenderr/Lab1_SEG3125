import React from "react";
import './App.css';
import email_pin  from '../images/email_pin.png'
import phone_pin from '../images/phone_pin.png'
import book_club_main from '../images/book_club_main.jpeg'
import community from '../images/community.png'
import intellectual from '../images/intellectual.jpeg'
import exclusive from '../images/exclusive.jpeg'


import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


function handleSubmit(e){
    e.preventDefault();
    alert('Your message has been sent. We will respond promptly');


}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address! Please respect the format xxxx@xxxxx.xx")
    return (false)
}
const BookClub = () => {
    return (
<div className = "content">
      <Jumbotron fluid className = "container bg-light text-center">
        <Container>
          <h1>Apply to the Picaso Book Club</h1>
          <p>
            The exclusive Book Club is currently taking applications for new members.
            Are you an introspective reader with a love for literature, if so we want to hear from you!

          </p>
          <h2>Contact us! </h2>
          <p>
              If you have any questions you can contact at the phone number and email address below.
              <br/>
              <img src={phone_pin} width="30" height="30"/>613-444-1919
              &nbsp;
              <img src={email_pin} width="40" height="30"/> bookclub@picasolibrary.org
        
          </p>

          <img src = {book_club_main} height= "400px" width="800px"></img>


          
        </Container>
      </Jumbotron>
      <br />
      <br />
        <Container>
      <CardGroup>
                <Card>
                    <Card.Img src ={community} variant="top"  height = "200px"/>
                    <Card.Body>
                    <Card.Title>Strong Community</Card.Title>
                    <Card.Text>
                        The Picaso Book Club is a small tight knit group of people from diverse backgrounds and interests
                        This allows for members to form bonds with each other which often result in life long friendships.{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img src ={intellectual} variant="top"  height = "200px"/>
                    <Card.Body>
                    <Card.Title>Intellectual</Card.Title>
                    <Card.Text>
                        The intellectual stimulation provided by the conversations during the Picaso Book Club
                        is unlike any book club. As it is member-only, the book club participants are carefully curated
                        to push all members way of thinking.{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img src = {exclusive} variant="top"  height = "200px"/>

                    <Card.Body>
                    <Card.Title>Exclusive</Card.Title>
                    <Card.Text>
                        The Book Club is exclusive and home to Canada's elite, if you are accepted as a member you will be offered elite perks.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            </Container>

      <br />
      <br />


      <Jumbotron fluid>
        <Container className = "bg-light">
          <h1>Get in touch</h1>
          <p>Fill out the form below and we will get back to you promptly.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Please write your desired message" required/>
                </Form.Group>
            </Form.Row>

            <Form.Row />
            <br/>

            <Button variant="primary" className="btn text-dark shadow-none" type="submit" style={{background: "gold"}}>
              Submit
            </Button>
          </Form>
        </Container>
      </Jumbotron>

      </div>
    );
  };
  
  export default BookClub;