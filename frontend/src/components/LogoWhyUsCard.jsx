import React from "react";

export default function LogoWhyUsCard({ logoInfo }) {
  return (
    <div className="categoryWhyUs text-white mt-3 pt-3 rounded">
      <img className="logoWhyUs" src={logoInfo.src} alt={logoInfo.alt} />
      <p className="pt-3">{logoInfo.comment}</p>
    </div>
  );
}
