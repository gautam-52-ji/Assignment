import React, { useState } from "react";
import "./NavbarComponent.css";
import img from "./assets/img/nav-img.png";
import img2 from "./assets/img/Star 3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="navbar-container">
      <div className="top-navbar">
        <div className="left-contents">
          <FontAwesomeIcon style={{ "margin-right": "10px" }} icon={faTruck} />
          Free Delivery | Return Policy
        </div>
        <div className="right-top-content">
          <span>Login</span>
          <span>Follow us:</span>
          <FontAwesomeIcon
            style={{ "margin-top": "4px" }}
            icon={faFacebookF}
            className="icon"
          />
          <FontAwesomeIcon
            style={{ "margin-top": "4px" }}
            icon={faInstagram}
            className="icon"
          />
          <FontAwesomeIcon
            style={{ "margin-top": "4px" }}
            icon={faTwitter}
            className="icon"
          />
        </div>
      </div>
      <div className={`sub-navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="left-sub-content">ShopKart</div>
        <div
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "X" : "☰"}
        </div>
        {!isMenuOpen && (
          <div className="right-sub-content ">
            <span>Wishlist(0)</span>
            <span>BAG(0)</span>
          </div>
        )}
        <div className="underline"></div>
        <div className="nav-links">
          {navbar.map((item) => {
            if (item.child) {
              return (
                <div key={item.id}>
                  <span onClick={() => setIsExpanded(!isExpanded)}>
                    {item.name}
                  </span>
                  {isExpanded && (
                    <div>
                      {item.child.map((childItem) => (
                        <span key={childItem.id}>{childItem.name}</span>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return <span key={item.id}>{item.name}</span>;
            }
          })}
        </div>

        <div className="image-div" style={{ "margin-top": "228px" }}>
          <img
            className="behind-image"
            src={img2}
            alt="Description of Behind Image"
          />
        </div>
        <div className="orange-div" style={{ "margin-top": "212px" }}>
          <img
            className="front-image"
            src={img}
            alt="Description of Front Image"
          />
        </div>
        <div className="freshlook">
          <span className="fresh">Fresh</span>
          <span className="year">2022</span>
          <span className="lookout">Look</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
