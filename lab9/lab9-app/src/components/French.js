import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import interior_image  from '../images/library-interior.jpeg'
import book_club from '../images/book_club.webp'
import book from '../images/book.png'
import coffee from '../images/coffee.jpeg'

import {Button, Card, CardGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const French = () => {
    return (
        <div className="jumbotron Frcontent">
            <div class="container text-center bg-light">
                <h1>Bienvenue à la bibliothèque Picaso</h1>      
                <p>La bibliothèque Picaso est une bibliothèque d'Ottawa qui se concentre sur l'offre de littérature d'élite, d'art visuel et de musique à ses clients.</p>
                <p>Nous accueillons également le café Picaso et le club de lecture Picaso.</p>
                <img src = {interior_image} height= "400px" width="800px"></img>
                <br/>
                <br/>

                <p >
                    <Link to="/featured">
                        <Button className="btn text-dark shadow-none" style={{background: "gold"}}>Inventaire vedette</Button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/book_club">
                        <Button  className="btn text-dark shadow-none" style={{background: "gold"}}>S'informer au club de lecture</Button>
                    </Link>
                </p>
            </div>
            <br/>
            <br/>
            <div class = "text-center container">

            </div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src = {book} height = "200px"/>
                    <Card.Body>
                    <Card.Title>Collection de la bibliothèque</Card.Title>
                    <Card.Text>
                    À la bibliothèque Picaso, nous sommes fiers de posséder le meilleur des meilleures œuvres d'art jamais créées. Des romans policiers,
                        la collection de punk-rock et l'exposition d'art visuel, nous avons tout.{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Dernière mise à jour : il y a 2 semaines</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src = {book_club} height = "200px"/>
                    <Card.Body>
                    <Card.Title>Club de lecture Picaso</Card.Title>
                    <Card.Text>
                    Le Picaso Book Club est un club de lecture exclusif situé au cœur d'Ottawa.
                        son engagement envers l'intégrité de la gestion d'un club de lecture comme il se doit.{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Dernière mise à jour : il y a 2 semaines</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src = {coffee} height = "200px"/>

                    <Card.Body>
                    <Card.Title>Le café Picaso</Card.Title>
                    <Card.Text>
                    Situé sur le toit, le Picaso Coffee House propose une cuisine primée du chef Antoine Folz. Le café est parfait pour prendre un 
                        un café au lait et se détendre ou avoir une conversation avec un ami. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Dernière mise à jour : il y a 2 semaines</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
  };
  
  export default French;