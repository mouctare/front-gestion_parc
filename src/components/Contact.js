import React, { Component } from 'react';
import TitreH1 from '../components/Ui/Titres/TitreH1';
import Formulaire from './Formulaire'
import axios from "axios";


export default class Contact extends Component {
    componentDidMount = () =>{
        document.title = "Page de Contact"
    }

    handleEnvoiMail = (message) =>{
        axios.post("http://localhost/SERVEURANIMAUX/client/sendMessage", message)
             .then(response => {
                 console.log(response);
             })
             .catch(error => {
                console.log(error);
             })

    }
  render() {
    return (
      <> <TitreH1 bgColor="bg-success">Contactez nous !</TitreH1> 
      <div className="container">
          <h2>Adresse :</h2>
          xxxxxxxxxxx
          <h2>Téléphone</h2>
          00 00 00 00
          <h2>Vous préférez nous écrire ?</h2>
        <Formulaire sendMail = {this.handleEnvoiMail}/>
      </div>
      </>
    );
  }
}
