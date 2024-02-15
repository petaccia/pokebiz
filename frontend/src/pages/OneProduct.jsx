import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import AddQuantity from "../components/AddQuantity";
import AddToCartButton from "../components/AddToCartButton";
import ProgressBar from "../components/ProgressBar";
import AddFavorite from "../components/AddFavorite";
import TemplateCard from "../components/TemplateCard";

import "./oneProduct.css";

function OneProduct({ basket, addBasket, handleQuantity }) {
  // Création du state pour enregistrer la quantité souaihtée.
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/pokeBiz/${id}`)
      .then((res) => res.json())
      .then((json) => setPokemon(json))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pokemon.pokemonName}</title>
        <meta
          name="description"
          content={`Find all the details of ${pokemon.pokemonName} `}
        />
      </Helmet>
      {/* ONE PRODUCT MOBILE VERSION */}
      <div className="oneProductPage d-lg-none container-fluid d-flex flex-column align-items-center justify-content-around text-dark pt-5 bg-container">
        <h1 className="text-white pb-2 text-capitalize">
          {pokemon.pokemonName} card
        </h1>
        <div className="pokebiz-card-container">
          <TemplateCard pokemon={pokemon} />
        </div>
        <div className="mt-3 d-flex">
          <AddFavorite />
        </div>
        <div className="pokebiz-progressBar-oneProduct d-flex">
          <ProgressBar pokemon={pokemon} />
        </div>
        <div className="oneProduct-postCard-element my-5 d-flex align-items-center justify-content-between">
          <div className="pokemonPrice">
            {/* Mettre le prix en dynamique avec les props reçues */}
            <h3 className="priceStyle">{pokemon.pokemonPrice} £</h3>
          </div>
          {!basket.some((el) => el.id === pokemon.id) ? (
            <div className="addToCartButton">
              <AddToCartButton addBasket={addBasket} pokemon={pokemon} />
            </div>
          ) : (
            <div className="addQuantityButton">
              {/* Envoie du state dans le composant */}
              <AddQuantity
                pokemon={basket.find((el) => el.id === pokemon.id)}
                handleQuantity={handleQuantity}
              />
            </div>
          )}
        </div>
      </div>
      {/* ONE PRODUCT DESKTOP VERSION */}
      <div className="oneProductPage d-none d-lg-flex container-fluid flex-column align-items-center justify-content-around text-dark pt-5 bg-container">
        <h1 className="text-white pb-2 text-capitalize">
          {pokemon.pokemonName} card
        </h1>
        <div className="d-flex mb-5">
          {/* TEMPLATE CARD */}
          <div className="allproduct-card-container">
            <TemplateCard pokemon={pokemon} />
          </div>
          {/* STATS + ADDFAVORITE + PRICE/QUANTITY/ADDtoCART */}
          <div className="ms-5">
            <div className="oneProduct-postCard-element my-5 d-flex align-items-center justify-content-around">
              <div className="pokemonPrice">
                {/* Mettre le prix en dynamique avec les props reçues */}
                <h3 className="priceStyle">{pokemon.pokemonPrice} £</h3>
              </div>
              {!basket.some((el) => el.id === pokemon.id) ? (
                <div className="addToCartButton">
                  <AddToCartButton addBasket={addBasket} pokemon={pokemon} />
                </div>
              ) : (
                <div className="addQuantityButton">
                  {/* Envoie du state dans le composant */}
                  <AddQuantity
                    pokemon={basket.find((el) => el.id === pokemon.id)}
                    handleQuantity={handleQuantity}
                  />
                </div>
              )}
            </div>
            <div>
              <ProgressBar pokemon={pokemon} />
            </div>
            <div className="mt-3 d-flex">
              <AddFavorite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
