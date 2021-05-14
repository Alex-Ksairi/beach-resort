// importing React
import React from "react";

// importing App.scss styling
import './styles/App.scss';

// importing components
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

// importing pages
import HomePage from "./pages/homePage/HomePage";
import Rooms from "./pages/roomsPage/RoomsPage";
import SingleRoom from "./pages/singleRoom/SingleRoom";
import Contact from "./pages/contactPage/ContactPage";
import ErrorPage from "./pages/errorPage/errorPage";

// importing provider

// importing route
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact component={ErrorPage}/>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
