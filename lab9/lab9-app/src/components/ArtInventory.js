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
import landscape from '../images/landscape.jpeg';
import river from '../images/river.jpeg';
import flowers from '../images/flowers.jpeg';




const ArtInventory = () => {
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
        You are viewing the <strong>Art Inventory</strong>.
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
                    <Card.Img variant="top" src={river} height = "200px" />
                    <Card.Body>
                    <Card.Title>River</Card.Title>
                    <Card.Text>
Beautiful Painiting of a River by Picaso Jr                 </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src={landscape}  height = "200px" />
                    <Card.Body>
                    <Card.Title>Beautiful Ottawa Desert</Card.Title>
                    <Card.Text>
                    Ottawa Desert - 2060 by Picaso jr
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src={flowers} height = "200px" />

                    <Card.Body>
                    <Card.Title>Chamolile - 2003</Card.Title>
                    <Card.Text>
                    Painted 13 minutes before Picaso Jr's death. Amazing.                </Card.Text>
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

export default ArtInventory;