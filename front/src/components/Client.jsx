import React from "react";
import { Link } from "react-router-dom";

//Le composant fils (Client) reçoit les propriétés du composant parent (Liste)
//On reçoit les différentes propriétés sous forme d'objet json
const Client = ({client}) => {

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{client.prenom} {client.nom}</h5>
        <p className="card-text">  {client.societe} - {client.ca} </p>
        <Link to={`/clients/${client.id}`} className="btn btn-primary">Voir</Link>
      </div>
    </div>
  );
}

export default Client;
