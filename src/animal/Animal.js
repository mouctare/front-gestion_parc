import React from 'react'
import { Button } from '../components/Button';

const Animal = ({id, nom, description, image, famille, continents, filtreFamille, filtreContinent }) => {
    return (
        <>
        
             
            <div className="card mb-3">
                <h3 className="card-header">{id} - {nom}</h3>
                <div className="card-body">
                    <div className="card-text">{description}</div>
                </div>
                <div className="text-center" style={{"height": "100px"}} >
                    <img src={image} alt={nom} className="img-fluid h-100"/>
                </div>
                <div className="card-body">
                    <h3>Famille : <Button typeBtn="btn-dark" clic = {() => filtreFamille(famille.idFamille)}>{famille.libelleFamille.toUpperCase()}</Button></h3>
                    <div>{famille.descriptionFamille}</div>
                </div>
              
                <div className="card-body">
                    <h3>Continents : </h3>
                    {
                       continents.map(continent => {
                            let colorBtn = "";
                            switch(continent.idContinent){
                                case "1" : colorBtn="btn-primary";
                                break;
                                case "2" : colorBtn="btn-danger";
                                break;
                                case "3" : colorBtn="btn-warning";
                                break;
                                case "4" : colorBtn="btn-success";
                                break;
                                case "5" : colorBtn="btn-info";
                                break;
                                default :  colorBtn = "btn-secondary";
                            }
                            return <Button 
                            typeBtn={colorBtn} 
                            css="m-1" 
                            clic = {() => filtreContinent(continent.idContinent)}
                            key={continent.idContinent}
                            >{continent.libelleContinent}</Button>
                    
                        })
                    }
                    
                </div>
              
            </div>
        </>
    );
}

export default Animal
