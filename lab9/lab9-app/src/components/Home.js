import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import interior_image  from '../images/library-interior.jpeg'
import book_club from '../images/book_club.webp'
import book from '../images/book.png'
import coffee from '../images/coffee.jpeg'

import {Button, Card, CardGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className="jumbotron content">
            <div class="container text-center bg-light">
                <h1>Welcome to the Picaso Library</h1>      
                <p>The Picaso Libray is an Ottawa library which focuses on providing customers with elite literature, visual art and music.</p>
                <p>We are also home to the Picaso Coffee Shop and the Picaso Book Club.</p>
                <img src = {interior_image} height= "400px" width="800px"></img>
                <br/>
                <br/>

                <p >
                    <Link to="/featured">
                        <Button className="btn text-dark shadow-none" style={{background: "gold"}}>Featured Inventory</Button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/book_club">
                        <Button  className="btn text-dark shadow-none" style={{background: "gold"}}>Learn About the Book Club</Button>
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
                    <Card.Title>Library Collection</Card.Title>
                    <Card.Text>
                        At the Picaso Library, we pride ourselves on having the best of the best works of art ever created. From mystery novels,
                        punk-rock collection and visual art exibit, we have it all. .{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src = {book_club} height = "200px"/>
                    <Card.Body>
                    <Card.Title>Picaso Book Club</Card.Title>
                    <Card.Text>
                        The Picaso Book Club is an exclusive book club located in the heart of Ottawa.This member only club is renowned for
                        its commitment to the integrity of running a book club how it should be run.{" "}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src = {coffee} height = "200px"/>

                    <Card.Body>
                    <Card.Title>The Picaso Coffee House</Card.Title>
                    <Card.Text>
                        Located on the roof, the Picaso Coffee House offers award winning cuisine by chef Antoine Folz. The coffee house is perfect for having 
                        a latte and relax or have a lunch conversation with your friend. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 2 weeks ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
  };
  
  export default Home;