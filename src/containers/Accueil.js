import React, { Component } from 'react';
import TitreH1 from '../components/Ui/Titres/TitreH1';
import banderole  from "../assets/images/banderole.png";
import logo  from "../assets/images/logo.png";


class Accueil extends Component {
    componentDidMount = () => {
        document.title = "parc d'animaux MyZoo";
    }
    render() {
        return (
            <div>
                <img src={banderole} alt="banderole" className="img-fluid" />
                <TitreH1 bgColor="bg-success">Venez visiter le parc MyZoo !!!</TitreH1>
                <div className="container">
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                       Quos vero nulla perferendis laborum dicta numquam laudantium veritatis adipisci, beatae tenetur quisquam, iusto illum nihil dolor, fugit minus sapiente at iste.   
                    </p>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                       Quos vero nulla perferendis laborum dicta numquam laudantium veritatis adipisci, beatae tenetur quisquam, iusto illum nihil dolor, fugit minus sapiente at iste.   
                    </p>
                </div>
                 <div className="row no-gutters align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={logo} alt="logo du site" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quos vero nulla perferendis laborum dicta numquam laudantium veritatis adipisci, beatae tenetur quisquam, iusto illum nihil dolor, fugit minus sapiente at iste.     
                    </div>
                    <div className="col-12 col-md-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quos vero nulla perferendis laborum dicta numquam laudantium veritatis adipisci, beatae tenetur quisquam, iusto illum nihil dolor, fugit minus sapiente at iste.     
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={logo} alt="logo du site" className="img-fluid" />
                    </div>
                 </div>
            </div>
        );
    }
}

export default Accueil;