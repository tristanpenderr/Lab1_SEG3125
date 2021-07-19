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




const MusicInventory = () => {
  return (
    <div className="content container bg-light">
      <Jumbotron fluid>
        <Container>
          <h1>Our Featured Inventory</h1>
          <p>
            View our featured inventory at the Picaso Library ranging from music to visual art to litterary works.
          </p>
        </Container>
      </Jumbotron>

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        You are viewing the <strong>Music Inventory</strong>.
      </div>

      <br />

      <Alert variant="danger">
        <Alert.Heading>COVID-19 Notice</Alert.Heading>
        <p>
          Due to COVID-19 restrictions, you must call to reserve a slot before coming in to the Library.
        </p>
        <hr />
        <p className="mb-0">Store contact: (613)-444-1919</p>
      </Alert>

      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/art_inventory">
          <button type="button" class="btn btn-outline-info">
            Art Inventory
          </button>
        </Link>
        <Link to="/book_inventory">
          <button type="button" class="btn btn-outline-info">
            Book Inventory
          </button>
        </Link>
        <Link to="/music_inventory">
          <button type="button" class="btn btn-outline-info">
            Music Inventory
          </button>
        </Link>
        <Link to="/featured">
          <button type="button" class="btn btn-outline-info">
            Full Inventory
          </button>
        </Link>
      </div>
      <br />
      <br />

      <CardGroup>
                <Card>
                    <Card.Img variant="top" src={the_who} height = "200px"/>
                    <Card.Body>
                    <Card.Title>The Who - Tommy Vynil</Card.Title>
                    <Card.Text>
                        Mint Condition - First edition Vynil Record{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src={beatles}  height = "200px"/>
                    <Card.Body>
                    <Card.Title>Beatles Colored Vynil Records</Card.Title>
                    <Card.Text>
                        Mint Condition - All Beatles Albums Colored set.{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top"  src={led} height = "200px"/>

                    <Card.Body>
                    <Card.Title>Led Zeppelin Past, Present and Future,</Card.Title>
                    <Card.Text>
                        Rare - Never Released Record "Led Zeppelin Past, Present and Future,"
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                
            </CardGroup>
            

      <br />
      
    </div>
  );
};

export default MusicInventory;