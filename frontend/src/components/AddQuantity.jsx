/* eslint no-unsafe-optional-chaining: 0 */

import React from "react";
import "./addQuantity.css";

function AddQuantity({ pokemon, handleQuantity }) {
  // Création d'un fonction pour gérer la quantité souhaitée au clic sur "plus" ou "moins".
  // La fonction a besoin d'un "opérateur" en argument au moment de l'appel, pour identifier le bouton cliqué.
  const handleQuantityOnClick = (operator) => {
    if (operator === "plus") {
      handleQuantity(pokemon, pokemon?.quantity + 1);
    } else if (operator === "minus") {
      handleQuantity(pokemon, pokemon?.quantity - 1);
    }
  };
  return (
    <div className="addQuantityButton d-flex justify-content-around rounded-3 w-100 px-2">
      <button
        onClick={() => handleQuantityOnClick("minus")}
        className="bg-transparent text-white"
        type="button"
      >
        -
      </button>
      <input
        onChange={(e) => handleQuantity(pokemon, e.target.value)}
        type="text"
        className="bg-transparent text-white text-center w-100"
        value={pokemon?.quantity}
      />
      <button
        onClick={() => handleQuantityOnClick("plus")}
        className="bg-transparent text-white"
        type="button"
      >
        +
      </button>
    </div>
  );
}

export default AddQuantity;
