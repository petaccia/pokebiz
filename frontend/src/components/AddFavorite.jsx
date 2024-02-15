import React, { useState } from "react";
import "./addFavorite.css";

function AddFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  // fonction qui gère le passage du bouton en favoris.
  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={handleIsFavorite}
      // Toggle de class en fcontion de la valeur de isFavorite (pour le changement visuel du bouton)
      className={isFavorite ? "isFavorite" : "notFavorite"}
      type="button"
      aria-label="add to favorite"
    />
  );
}

export default AddFavorite;
