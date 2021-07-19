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
import flowers from '../images/flowers.jpeg';




const Featured = () => {
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
        You are viewing the <strong>Full inventory</strong>.
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
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={edgar} height = "300px" width = "auto"/>
                    <Card.Body>
                    <Card.Title>Selected Tales Of Mystery
By Edgar Allan Poe</Card.Title>
                    <Card.Text>
                    London: Sidgwick & Jackson, 1909. First edition, hardcover. Good condition, no dust jacket. Thoughtfully illustrated by Byam Shaw.{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src={kids}  height = "300px" width = "auto" />
                    <Card.Body>
                    <Card.Title>And To Think That I Saw It On Mulberry Street: VERY RARE... BANNED
By Dr Seuss</Card.Title>
                    <Card.Text>
                    Published by Vanguard Press, Inc., New York BOOK CLUB EDITION
"1937" date and no mention of later printings (See photo)

A solid example of what is a rather scarce title. It was with this work that the career of the most influential author of children's books began.{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top"  src={legal} height = "300px" width = "auto"/>

                    <Card.Body>
                    <Card.Title>Legal Foundations Of Capitalism
By John R. Commons</Card.Title>
                    <Card.Text>
                    Extremely rare hardback copyright 1924 in good-plus condition; stated first edition, January 1924; well preserved withdrawal from university library with usual stamps and stickers;                    </Card.Text>
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

export default Featured;