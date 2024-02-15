import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-contact container-fluid align-items-center justify-content-around mb-md-0 py-5">
        <div className="row ">
          <ul className="footer-list-button d-none d-md-block list-unstyled col-md-3 my-auto">
            <li>
              <Link to="/">
                <button
                  className="footer-list-button bg-transparent"
                  type="button"
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/AllProducts">
                <button
                  className="footer-list-button bg-transparent"
                  type="button"
                >
                  Our Cards
                </button>
              </Link>
            </li>
          </ul>
          <div className="col-12 d-md-block col-md-3 my-auto order-md-last d-none">
            <img
              id="footer-map"
              src="../src/assets/footerImgMap.jpg"
              alt="Map"
            />
          </div>
          <div className="col-md-6 col-12">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-dark text-white h-50 p-2">
        Copyright PokeBiz © 2022 - All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
