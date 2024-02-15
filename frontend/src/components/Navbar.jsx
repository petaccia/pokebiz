import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./navbar.css";

function Navbar() {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pokebiz`)
      .then((res) => res.json())
      .then((json) => setPokemons(json))
      .catch((err) => console.error(err));
  }, []);

  const goToOneProduct = () => {
    setDisplaySearchBar(!displaySearchBar);
  };

  const handleDisplaySearchDesktop = () => {
    if (searchValue.length > 0) {
      setSearchValue("");
      setDisplaySearchBar(false);
    }
  };
  // useEffect permet de gérer le d-none de la modale quand on clique à côté.
  useEffect(() => {
    document.body.addEventListener("click", handleDisplaySearchDesktop);
  }, []);
  return (
    <div>
      {/* SEARCH BAR MOBILE */}
      <div className={!displaySearchBar ? "d-none" : "d-block"}>
        <SearchBar
          pokemons={pokemons}
          goToOneProduct={goToOneProduct}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div>
        {/* NAVBAR - MOBILE */}
        <div className="navbar-mobile fixed-bottom container-md d-md-none">
          <nav className="p-3">
            <ul className="list-unstyled d-flex justify-content-around m-0">
              {/* LOGO */}
              <Link to="/">
                <button
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <img
                    className="navbar-icon"
                    src="../src/assets/navbar-icons/logo-black.png"
                    alt="logo-icon"
                  />
                </button>
              </Link>
              {/* ALL PRODUCT BUTTON */}
              <Link to="/AllProducts">
                <button
                  onClick={() => setDisplaySearchBar(false)}
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <img
                    className="navbar-icon"
                    src="../src/assets/navbar-icons/cards.png"
                    alt="store-icon"
                  />
                </button>
              </Link>
              {/* SEARCH BUTTON */}
              <button
                onClick={() => setDisplaySearchBar(!displaySearchBar)}
                className="border border-0 bg-transparent"
                type="button"
              >
                <img
                  className="navbar-icon"
                  src="../src/assets/navbar-icons/search-black.png"
                  alt="search-icon"
                />
              </button>

              {/* BASKET BUTTON */}
              <Link to="/Basket">
                <button
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <img
                    className="navbar-icon"
                    src="../src/assets/navbar-icons/basket-black.png"
                    alt="basket-icon"
                  />
                </button>
              </Link>
            </ul>
          </nav>
        </div>
        {/* ------ NAVBAR DESKTOP ------- */}
        <div className="navbar-desktop fixed-top d-none d-md-block container-fluid">
          <nav className="p-3">
            <ul className="list-unstyled d-flex justify-content-between m-0">
              {/* LOGO */}
              <Link to="/">
                <button
                  className="navbar-button border border-0 bg-transparent"
                  type="button"
                >
                  <div className="d-flex">
                    <img
                      className="navbar-icon"
                      src="../src/assets/navbar-icons/logo.png"
                      alt="logo-icon"
                    />
                    <h2 className="ms-2">Pokebiz</h2>
                  </div>
                </button>
              </Link>
              {/* ALL PRODUCTS BUTTON */}
              <Link to="/AllProducts">
                <button
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <div className="navbar-desktop-store-icon d-flex align-items-center">
                    <img
                      className="navbar-icon"
                      src="../src/assets/navbar-icons/cards-orange.png"
                      alt="store-icon"
                    />
                    <p className="m-0 ms-2 fs-6">Our cards</p>
                  </div>
                </button>
              </Link>
              <div className="navbar-desktop-right-icon d-flex justify-content-around">
                {/* SEARCH BAR */}
                <form action="">
                  <label className="d-flex bg-dark rounded-3 px-3 py-1">
                    <input
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="pokebiz-seachBar-Desktop text-white"
                      type="text"
                      value={searchValue}
                      placeholder="Find your Pokemon"
                    />
                    <button
                      onClick={handleDisplaySearchDesktop}
                      className="border border-0 bg-transparent"
                      type="button"
                    >
                      <img
                        className="navbar-icon"
                        src="../src/assets/navbar-icons/search-orange.png"
                        alt="search-icon"
                      />
                    </button>
                  </label>
                  {searchValue.length > 0 && (
                    <div className="pokebiz-searchBar-output-container d-flex flex-column align-items-start container-fluid h-50 mt-3 position-absolute overflow-auto">
                      {pokemons
                        .filter((pokemon) =>
                          pokemon.pokemonName
                            .toLowerCase()
                            .startsWith(searchValue)
                        )
                        .map((pokemon) => {
                          return (
                            <Link
                              to={`/AllProducts/${pokemon.id}`}
                              key={pokemon.id}
                            >
                              <button
                                type="button"
                                className="pokebiz-searchBar-output text-white bg-transparent fs-5"
                                onClick={() => goToOneProduct(pokemon)}
                              >
                                {pokemon.pokemonName}
                              </button>
                            </Link>
                          );
                        })}
                    </div>
                  )}
                </form>
                {/* BASKET BUTTON */}
                <Link to="/Basket">
                  <button
                    className="border border-0 bg-transparent"
                    type="button"
                  >
                    <img
                      className="navbar-icon ms-4"
                      src="../src/assets/navbar-icons/basket-orange.png"
                      alt="basket-icon"
                    />
                  </button>
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
