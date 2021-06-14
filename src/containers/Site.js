import React, { Component } from 'react'
import Navbar from '../components/Ui/Navbar/Navbar'
import {Switch, Route} from "react-router-dom";
import Accueil from './Accueil';
import Error from "../components/Error/Error";
import { Footer } from '../components/Footer';
import Application from './Application';
import Contact from '../components/Contact';



export default class Site extends Component {
    render() {
        return (
            <>
            <div className="site">
              <Navbar/>
              <Switch>
              <Route path="/animaux" exact render={() => <Application/>} />
              <Route path="/contact" exact render={() => <Contact/>} />
                <Route path="/" exact render={() => <Accueil />} />
                <Route render={() => <Error type="404">La page n'existe pas</Error>} />
              </Switch>
              <div className="minSite"></div>
              </div>
              <Footer/>
            </>
        )
    }
}
