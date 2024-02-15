import React from "react";

export default function SocialMediaCard({ socialInfo }) {
  return (
    <div>
      <img
        className="logoSocialMedia"
        src={socialInfo.src}
        href={socialInfo.href}
        alt={socialInfo.alt}
      />
    </div>
  );
}
