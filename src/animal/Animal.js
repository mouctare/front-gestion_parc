import React from 'react'

const Animal = ({id, nom, description, image}) => {
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
               {/*  <div className="card-body">
                    <h3>Famille : <Bouton typeBtn="btn-primary">{famille.libelleFamille.toUpperCase()}</Bouton></h3>
                    <div>{famille.descriptionFamille}</div>
                </div> */}
              
            </div>
        </>
    );
}

export default Animal
