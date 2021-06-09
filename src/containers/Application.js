import React, { Component } from 'react';
import TitreH1 from '../components/Ui/Titres/TitreH1';
import axios from "axios";
import Animal from '../animal/Animal';

class Application extends Component {
    state = {
        animaux : null
    }
    componentDidMount = () => {
          axios.get(`http://localhost/SERVEURANIMAUX/client/animaux`)
          .then(response =>{
             // this.setState({animaux:Object.values(response.data)}); Ici on transforme l'objet en tableau
              this.setState({animaux:Object.values(response.data)});
          })
    }

    handleSelectionFamille = (idFamille) =>{
        console.log("Demande de ", idFamille);
    }

    handleSelectionContinent = (idContinent) =>{
        console.log("Demande de ", idContinent);
    }

    render() {
        return (
            <>
            <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
          
            <div className="container-fluid">
            <div className="row no-gutters">
                {
                    this.state.animaux && 
                    this.state.animaux.map(animal =>{
                        return(
                        <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                        <Animal {...animal}  filtreFamille = {this.handleSelectionFamille} filtreContinent = {this.handleSelectionContinent}/>
                        </div>
                        )
                    })
                }
                </div>
            </div>
            </>
        );
    }
}

export default Application;