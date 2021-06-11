import React, { Component } from 'react';
import TitreH1 from '../components/Ui/Titres/TitreH1';
import axios from "axios";
import Animal from '../animal/Animal';
import { Button } from '../components/Button';

class Application extends Component {
    state = {
        animaux : null,
        filtreFamille : null,
        filtreContinent : null

    }

    loadData = () => {
        const famille = this.state.filtreFamille ? this.state.filtreFamille : "-1";
        const continent = this.state.filtreContinent ? this.state.filtreContinent : "-1";
        axios.get(`http://localhost/SERVEURANIMAUX/client/animaux/${famille}/${continent}`)
        .then(response =>{
           // this.setState({animaux:Object.values(response.data)}); Ici on transforme l'objet en tableau
            this.setState({animaux:Object.values(response.data)});
        })
    }
    componentDidMount = () => {
        this.loadData();
    }

    componentDidUpdate = (oldProps, oldState) => {
          // Je ne ferais du chargement des data que si le state a changé
          if(oldState.filtreFamille !== this.state.filtreFamille || oldState.filtreContinent !== this.state.filtreContinent ) {
            this.loadData();
        }
    }

    handleSelectionFamille = (idFamille) =>{
      //  console.log("Demande de ", idFamille);
        this.setState({filtreFamille:idFamille});
       
    }

    handleSelectionContinent = (idContinent) =>{
       // console.log("Demande de ", idContinent);
        this.setState({filtreContinent:idContinent});
        
    }

    handleResetFiltreFamille = () => {
        this.setState({filtreFamille:null})

    }
    handleResetFiltreContinent = () => {
        this.setState({filtreContinent:null})

    }

    render() {
        return (
            <>
            <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>

            {

             (this.state.filtreFamille || this.state.filtreContinent) && <span>Filtres : </span>

            }

            {
                this.state.filtreFamille &&
                <Button
                    typeBtn="btn-secondary"
                    clic = {this.handleResetFiltreFamille}
                    >
                    {this.state.filtreFamille} &nbsp;
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
                    </svg>
                </Button>
            }
            {
                this.state.filtreContinent &&
                <Button 
                    typeBtn="btn-secondary"
                    clic = {this.handleResetFiltreContinent}
                    >{this.state.filtreContinent} &nbsp;
                     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
                    </svg>
                    </Button>
            }
          
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