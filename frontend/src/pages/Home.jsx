// import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./Home.css";

import SocialMedia from "../components/SocialMedia";
import LogoWhyUs from "../components/LogoWhyUS";
import CardOffer from "../components/CardOffer";
import CardOfferCardMobile from "../components/CardOfferCardMobile";

export default function Home({ basket, addBasket, handleQuantity }) {
  return (
    <div className="accueilBackground">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Acceuil</title>
        <meta name="description" content="page accueil" />
      </Helmet>
      <div className="prez position-relative d-flex flex-column justify-content-end">
        <div className="position-absolute">
          <h1 className="text-white fs-2">Welcome to PokeBiz</h1>
          <h2 className="text-white fs-1">Pokemon shop</h2>
          <Link to="/AllProducts">
            <button className="btn btn-warning mb-5" type="button">
              Catch them !
            </button>
          </Link>
        </div>
      </div>
      <div className="prezIntro pt-5 mx-auto d-none d-md-block d-lg-block">
        <h2>Buy official Pokemon cards</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi
          iste odit quasi id esse, dicta expedita perspiciatis blanditiis
          tenetur a eaque, veritatis labore iure ratione. Rerum ipsum inventore
          doloremque.
        </p>
      </div>
      {/* carrousel version tablette + desktop */}
      <div className="specialOffer d-none d-md-flex align-items-center justify-content-center pt-5">
        <div className="carrouselOffer d-flex justify-content-center flex-column align-items-center mb-3">
          <h2 className="text-white">Special Offers</h2>
          <br />
          <input
            className="d-none"
            type="radio"
            name="slider"
            id="item-1"
            defaultChecked
          />
          <input
            className="d-none"
            type="radio"
            name="slider"
            id="item-2"
            defaultChecked
          />
          <input
            className="d-none"
            type="radio"
            name="slider"
            id="item-3"
            defaultChecked
          />
          <CardOffer
            basket={basket}
            addBasket={addBasket}
            handleQuantity={handleQuantity}
          />
        </div>
      </div>
      {/* fin carrousel version tablette + desktop */}
      <br />
      {/* carrousel version mobile */}
      <div className="d-flex justify-content-center">
        <div className="allproduct-card-container d-md-none d-sm-block">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <CardOfferCardMobile />
              </div>
              <div className="carousel-item">
                <CardOfferCardMobile />
              </div>
              <div className="carousel-item">
                <CardOfferCardMobile />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* fin carrousel version mobile */}
      <br />
      <div className="whyUsEx pt-5">
        <h2 className="text-center">Why choose PokeBiz ?</h2>
        <br />
        <LogoWhyUs />
      </div>
      <br />
      <div className="socialMediaEx pt-5 pb-5">
        <h2 className="text-center">Our social networks</h2>
        <br />
        <SocialMedia />
      </div>
      <br />
    </div>
  );
}
