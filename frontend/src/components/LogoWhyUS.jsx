import React from "react";
import LogoWhyUsCard from "./LogoWhyUsCard";

const logoReassurance = [
  {
    id: 1,
    src: "./src/assets/iconsHome/badge.png",
    alt: "logo badge",
    comment: "Official Cards",
  },
  {
    id: 2,
    src: "./src/assets/iconsHome/cadenas.png",
    alt: "logo cadenas",
    comment: "Secure Payment",
  },
  {
    id: 3,
    src: "./src/assets/iconsHome/bitcoin.png",
    alt: "logo bitcoin",
    comment: "Several currencies",
  },
];

export default function LogoWhyUs() {
  return (
    <div className="whyUs d-md-flex d-sm-flex-column mx-auto justify-content-between">
      {logoReassurance.map((logoInfo) => (
        <LogoWhyUsCard logoInfo={logoInfo} key={logoInfo.id} />
      ))}
    </div>
  );
}
