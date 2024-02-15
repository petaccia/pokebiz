import React from "react";

function ShowMoreCard({ numberOfCard, setNumberOfCard, pokemons }) {
  return (
    <div className="d-block justify-content-center">
      <button
        type="button"
        onClick={() => setNumberOfCard(numberOfCard + 6)}
        className="btn btn-warning mb-3 mt-3 text-capitalize"
      >
        {numberOfCard >= pokemons.length ? "No more cards " : "show more cards"}
      </button>
    </div>
  );
}

export default ShowMoreCard;
