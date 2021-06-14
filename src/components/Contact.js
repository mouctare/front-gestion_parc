import React, { Component } from 'react';
import TitreH1 from '../components/Ui/Titres/TitreH1';
import Formulaire from './Formulaire'
import axios from "axios";


class Contact extends Component {

    componentDidMount = () =>{
        document.title = "Page de Contact"
    }

    handleEnvoiMail = (message) => {
      axios.post("http://localhost/SERVEURANIMAUX/client/sendMessage", message)
          .then(reponse=> {
              console.log(reponse)
          })
          .catch(error => {
              console.log(error)
          })
  }

  render() {
      return (
          <>
              <TitreH1 bgColor="bg-success">Contactez nous !</TitreH1>
              <div className="container">
                  <h2>Adresse :</h2>
                  9, Rue de la paix
                  <h2>Téléphone</h2>
                  04-05-33-66
                  <h2>Vous préfèrez nous écrire ? </h2>
                  <Formulaire sendMail = {this.handleEnvoiMail}/>
              </div>
          </>
      );
  }
}

export default Contact;