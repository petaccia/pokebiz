import React from "react";
// Composant à appeller dans OneProduct et dans le "map" de AllProduct avec le composant TemplateCard
function AddToCartButton({ addBasket, pokemon }) {
  return (
    <div>
      <button
        onClick={() => addBasket(pokemon)}
        className="buttonColor p-2 fs-4 btn-warning"
        type="button"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCartButton;
