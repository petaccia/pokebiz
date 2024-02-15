import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OneProduct from "./pages/OneProduct";
import AllProduct from "./pages/AllProduct";
import Basket from "./pages/Basket";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import pokemons from "./services/data";

import "./App.css";

function App() {
  const [basket, setBasket] = useState([{}]);

  const deleteFromBasket = (pokemon) => {
    setBasket(basket.filter((el) => el.id !== pokemon.id));
  };

  const handleQuantity = (pokemon, value) => {
    if (!value || value <= 0) {
      deleteFromBasket(pokemon);
    } else {
      const index = basket.indexOf(pokemon);
      const newBasket = [...basket];
      newBasket[index].quantity = value;
      setBasket(newBasket);
    }
  };

  const addBasket = (pokemon) => {
    setBasket([...basket, { id: pokemon.id, quantity: 1 }]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar pokemons={pokemons} />
        <Routes>
          {/* Si la valeur de page = Home alors on est sur la home */}
          <Route
            path="/"
            element={
              <Home
                basket={basket}
                addBasket={addBasket}
                handleQuantity={handleQuantity}
              />
            }
          />
          {/* Si la valeur de page = AllProduct alors on est sur la page de vente */}
          <Route
            path="/AllProducts"
            element={
              <AllProduct
                basket={basket}
                addBasket={addBasket}
                handleQuantity={handleQuantity}
              />
            }
          />
          {/* On filtre les pokemons, et quand la valeur de page = ID d'un pokemon on se trouve sur la page correspondante */}
          <Route
            path="/AllProducts/:id"
            element={
              <OneProduct
                basket={basket}
                addBasket={addBasket}
                handleQuantity={handleQuantity}
              />
            }
          />
          {/* On accède à la page panier */}
          <Route
            path="/Basket"
            element={
              <Basket
                basket={basket}
                handleQuantity={handleQuantity}
                deleteFromBasket={deleteFromBasket}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
