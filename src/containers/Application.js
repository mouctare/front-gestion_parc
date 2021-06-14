import React, { Component } from 'react';
import TitreH1 from '../components/Ui/Titres/TitreH1';
import axios from "axios";
import Animal from '../animal/Animal';
import { Button } from '../components/Button';

class Application extends Component {
    state = {
        animaux : null,
        filtreFamille : null,
        filtreContinent : null,
        listeFamilles : null,
        listeContinents : null

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

        axios.get(`http://localhost/SERVEURANIMAUX/client/continents`)
        .then(response =>{
           this.setState({listeContinents:Object.values(response.data)});
        })

        axios.get(`http://localhost/SERVEURANIMAUX/client/familles`)
        .then(response =>{
          this.setState({listeFamilles:Object.values(response.data)});
        })
    }

    componentDidUpdate = (oldProps, oldState) => {
          // Je ne ferais du chargement des data que si le state a changé
          if(oldState.filtreFamille !== this.state.filtreFamille || oldState.filtreContinent !== this.state.filtreContinent ) {
            this.loadData();
        }
    }
    handleSelectionFamille = (idFamille) => {
        if(idFamille === "-1") this.handleResetFiltreFamille() 
        else this.setState({filtreFamille : idFamille});
    }

    handleSelectionContinent = (idContinent) => {
        if(idContinent === "-1") this.handleResetFiltreContinent()
        else this.setState({filtreContinent : idContinent});
    }
    
    handleResetFiltreFamille = () => {
        this.setState({filtreFamille:null})
    }
    handleResetFiltreContinent = () => {
        this.setState({filtreContinent:null})
    }

    render() {

       let nomFamilleFiltre = "";
       if(this.state.filtreFamille){
           // Ici, on récupère la case coché dans la liste des familles
           const numCaseFamilleFiltre = this.state.listeFamilles.findIndex(famille => {
               return famille.famille_id === this.state.filtreFamille;
           })
           // Récupérer une value dans un array
           nomFamilleFiltre = this.state.listeFamilles[numCaseFamilleFiltre].famille_libelle;
       }
       let nomContinentFiltre = "";
       if(this.state.filtreContinent){
           const numCaseContinentFiltre = this.state.listeContinents.findIndex(continent => {
               return continent.continent_id === this.state.filtreContinent;
              } )
              nomContinentFiltre = this.state.listeContinents[numCaseContinentFiltre].continent_libelle;

       }

        return (
            <>
            
            <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
                <div className="container-Fluid">
                    <span>Filtres : </span>
                    <select onChange={(event) => this.handleSelectionFamille(event.target.value)}>
                        <option value="-1" selected={this.state.filtreFamille === null && "selected"}>Familles</option>
                        {
                            this.state.listeFamilles && this.state.listeFamilles.map(famille => {
                                return <option 
                                    value={famille.famille_id}
                                    selected={this.state.filtreFamille === famille.famille_id && "selected"}
                                    >{famille.famille_libelle}</option>
                            })
                        }
                    </select>
                    <select onChange={(event) => this.handleSelectionContinent(event.target.value)}>
                        <option value="-1" selected={this.state.filtreContinent=== null && "selected"}>Continents</option>
                        {
                            this.state.listeContinents && this.state.listeContinents.map(continent => {
                                return <option 
                                    value={continent.continent_id}
                                    selected={this.state.filtreContinent=== continent.continent_id && "selected"}
                                    >{continent.continent_libelle}</option>
                            })
                        }
                    </select>

                  {
                this.state.filtreFamille &&
                <Button
                    typeBtn="btn-secondary"
                    clic = {this.handleResetFiltreFamille}
                    >
                    {nomFamilleFiltre} &nbsp;
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
                    >{nomContinentFiltre} &nbsp;
                     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
                    </svg>
                    </Button>
            }
          
              </div>

         
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