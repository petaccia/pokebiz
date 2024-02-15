import React from "react";
import SocialMediaCard from "./SocialMediaCard";

const social = [
  {
    id: 1,
    src: "./src/assets/iconsHome/twitter.png",
    href: "twitter.com",
    alt: "logo Twitter",
  },
  {
    id: 2,
    src: "./src/assets/iconsHome/youtube.png",
    href: "youtube.com",
    alt: "logo Youtube",
  },
  {
    id: 3,
    src: "./src/assets/iconsHome/facebook.png",
    href: "facebook.com",
    alt: "logo Facebook",
  },
  {
    id: 4,
    src: "./src/assets/iconsHome/instagram.png",
    href: "instagram.com",
    alt: "logo Instagram",
  },
];

export default function SocialMedia() {
  return (
    <div className="socialMedia d-flex mx-auto justify-content-between">
      {social.map((socialInfo) => (
        <SocialMediaCard socialInfo={socialInfo} key={socialInfo.id} />
      ))}
    </div>
  );
}
