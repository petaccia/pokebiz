import React from "react";
import { Link } from "react-router-dom";

function SearchBar({ pokemons, goToOneProduct, searchValue, setSearchValue }) {
  return (
    <div className="pokebiz-searchBar-mobile d-flex flex-column justify-content-center bg-dark d-md-none overflow-auto">
      <form
        className="d-flex justify-content-center align-items-center"
        action=""
      >
        <div>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            className="p-3 border border-4 border-white text-white rounded-start fs-1 w-100"
            placeholder="Find your Pokemon"
            type="text"
          />
        </div>
      </form>
      <div
        className={
          !searchValue ? "d-none" : "d-flex flex-wrap container-fluid h-50 mt-3"
        }
      >
        <ul className="p-0 m-0 container-fluid">
          {pokemons
            .filter((pokemon) =>
              pokemon.pokemonName.toLowerCase().startsWith(searchValue)
            )
            .map((pokemon) => {
              return (
                <Link to={`/AllProducts/${pokemon.id}`} key={pokemon.id}>
                  <button
                    id="pokebiz-searchBar-value"
                    type="button"
                    className=" pokebiz-searchBar-output-mobile text-white list-unstyled bg-transparent border m-2"
                    onClick={() => goToOneProduct(pokemon)}
                  >
                    {pokemon.pokemonName}
                  </button>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
