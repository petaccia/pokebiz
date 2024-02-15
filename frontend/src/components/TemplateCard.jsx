import React from "react";
import "./TemplateCard.css";

function TemplateCard({ pokemon }) {
  return (
    <div>
      <div className="card-info rounded-3 p-2 mx-2">
        <div
          className={`${`${pokemon.primaryType}-color`} align-items-center w-100 h-100 p-3 rounded-3`}
        >
          <div className="container-card d-grid w-100">
            <div className="top-of-card d-flex justify-content-between align-items-center fw-bold">
              <p className="text-uppercase">{pokemon.pokemonName}</p>
              <p>{pokemon.hp} Hp</p>
            </div>
            <div className="picture-card-oneProduct bg-light">
              <img className="card-img-top" src={pokemon.pokemonUrl} alt="" />
            </div>
            <div className="container-attack-card d-flex flex-column justify-content-around">
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded ">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  1st move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold text-capitalize">
                  {pokemon.firstMove}
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  2nd move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold text-capitalize">
                  {pokemon.secondMove}
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  3rd move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold text-capitalize">
                  {pokemon.thirdMove}
                </p>
              </div>
              <div className="attack-card d-flex justify-content-between align-items-center p-2 mt-2 rounded">
                <p className="move-attack justify-content-center mb-0 fw-bold">
                  4th move
                </p>
                <p className="move-attack justify-content-center mb-0 fw-bold text-capitalize">
                  {pokemon.fourthMove}
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-of-card align-items-center container-fluid mt-3 bg-light">
            <ul className="d-flex list-unstyled mb-0">
              <li className="m-auto">Def:{pokemon.defense}</li>
              <li className="m-auto">S.Def:{pokemon.specialDefense}</li>
              <li className="m-auto">Att:{pokemon.attack}</li>
              <li className="m-auto">S.Att:{pokemon.specialAttack}</li>
              <li className="m-auto">Speed:{pokemon.speed}</li>
              <li className="m-auto">Exp:{pokemon.experience}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
