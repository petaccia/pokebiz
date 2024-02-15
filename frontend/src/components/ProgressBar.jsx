import React from "react";
import TemplateProgressBar from "./TemplateProgressBar";
import "./ProgressBar.css";

function ProgressBar({ pokemon }) {
  return (
    <div className="progressBarOneProduct">
      <TemplateProgressBar stats={pokemon.attack} statName="attack" />
      <TemplateProgressBar stats={pokemon.defense} statName="defense" />
      <TemplateProgressBar
        stats={pokemon.specialAttack}
        statName="special attack"
      />
      <TemplateProgressBar
        stats={pokemon.specialDefense}
        statName="special defense"
      />
      <TemplateProgressBar stats={pokemon.speed} statName="speed" />
    </div>
  );
}

export default ProgressBar;
