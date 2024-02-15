import React from "react";
import "./AllTemplateCard.css";

function AllTemplateCard({ pokemon }) {
  return (
    <div className="card">
      <img className="card-img-top" src={pokemon.url} alt="Card  cap" />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
        <p className="card-text">Pokebiz</p>
        <a href="/#" className="btn btn-warning btn-sm text-capitalize">
          Add to card
        </a>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item text-capitalize">
          experience: {pokemon.experience}
        </li>
        <li className="list-group-item text-capitalize">
          height: {pokemon.heigth}
        </li>
        <li className="list-group-item text-capitalize">hp: {pokemon.hp}</li>
      </ul>
    </div>
  );
}
export default AllTemplateCard;
