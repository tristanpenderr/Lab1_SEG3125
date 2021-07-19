import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import French from "./components/French"
import BookClub from './components/BookClub';
import MusicInventory from './components/MusicInventory';
import BookInventory from './components/BookInventory';
import ArtInventory from './components/ArtInventory';
import Featured from './components/Featured';
import FrNavigation from './components/FrNavigation';
import Contact from './components/Contact';
import Footer from './components/Footer'
import NotFound from './components/NotFound'







function App() {
  return (

    <BrowserRouter>
      
      <div>
          <Switch>
            <Route path='/french' component={ FrNavigation } />
            <Route  component={ Navigation } />
          </Switch>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/french" component={French} exact/>
            <Route path="/book_club" component={BookClub} exact/>
            <Route path="/music_inventory" component={MusicInventory} exact/>
            <Route path="/book_inventory" component={BookInventory} exact/>
            <Route path="/art_inventory" component={ArtInventory} exact/>
            <Route path="/featured" component={Featured} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route component={NotFound} />






          </Switch>

        <Footer/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
