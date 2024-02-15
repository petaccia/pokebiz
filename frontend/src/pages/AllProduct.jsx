import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TemplateCard from "../components/TemplateCard";
import ShowMoreCard from "../components/ShowMoreCard";
import TemplateFilter from "../components/TemplateFilter";
import AddFavorite from "../components/AddFavorite";
import AddToCartButton from "../components/AddToCartButton";
import AddQuantity from "../components/AddQuantity";

import "./allProducts.css";

const types = [
  { name: "fire", checked: false },
  { name: "normal", checked: false },
  { name: "flying", checked: false },
  { name: "water", checked: false },
  { name: "grass", checked: false },
  { name: "poison", checked: false },
  { name: "bug", checked: false },
  { name: "electric", checked: false },
  { name: "ground", checked: false },
  { name: "fairy", checked: false },
];

function AllProduct({ basket, addBasket, handleQuantity }) {
  const [numberOfCard, setNumberOfCard] = useState(0);
  const [filterTypes, setFilterTypes] = useState(types);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pokeBiz`)
      .then((res) => res.json())
      .then((json) => setPokemons(json))
      .catch((err) => console.error(err));
  }, []);

  const handleCheck = (type) => {
    const newFilterType = [...filterTypes];
    const index = newFilterType.indexOf(type);
    newFilterType[index].checked = !newFilterType[index].checked;
    setFilterTypes(newFilterType);
  };

  const getSelected = () => {
    if (filterTypes.every((filter) => !filter.checked)) return pokemons;
    return pokemons.filter((pokemon) => {
      const el = filterTypes.find((type) => type.name === pokemon.primaryType);
      return el.checked;
    });
  };
  return (
    <section className="pokebiz-allProduct-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cartes pokémons</title>
        <meta
          name="description"
          content="Find all our premium pokemons cards!"
        />
      </Helmet>
      <h1 className="py-3 m-0 text-white">Our cards</h1>
      <TemplateFilter handleCheck={handleCheck} filterTypes={filterTypes} />
      <div className="container-fluid d-flex justify-content-center flex-wrap py-3">
        {getSelected(pokemons)
          .slice(0, numberOfCard + 6)
          .map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <Link to={`/AllProducts/${pokemon.id}`}>
                  <button
                    onClick={() => setNumberOfCard(numberOfCard + 6)}
                    className="bg-transparent allproduct-card-container"
                    type="button"
                  >
                    <TemplateCard key={pokemon.id} pokemon={pokemon} />
                  </button>
                </Link>
                <div className="d-flex align-items-center justify-content-around mt-3 mb-5">
                  <div className="pokemonPrice">
                    {/* Mettre le prix en dynamique avec les props reçues */}
                    <h3 className="priceStyle">{pokemon.pokemonPrice} £</h3>
                  </div>
                  {!basket.some((el) => el.id === pokemon.id) ? (
                    <div className="addToCartButton">
                      <AddToCartButton
                        addBasket={addBasket}
                        pokemon={pokemon}
                      />
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
                  <AddFavorite />
                </div>
              </div>
            );
          })}
      </div>
      <ShowMoreCard
        numberOfCard={numberOfCard}
        setNumberOfCard={setNumberOfCard}
        pokemons={pokemons}
      />
    </section>
  );
}

export default AllProduct;
