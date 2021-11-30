
import React, {useState} from "react";
import "./Home.css";
import logo from "../images/logo.png";
import photo from '../images/inline_image_preview.png';

const Home = () => {
 // fixed Header
 window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Service">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content d__flex">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Nazmul</h2>
              <h3 className="home__text sweet pz__10">Frontend Developer.</h3>
              <a href="https://drive.google.com/uc?export=download&id=1HK7m_WhKYESx2nnxYso7yX421HuZ06aW">
                  <button className="about btn pointer">Download Cv</button>
                </a>
            </div>
            <div>
                <img src={photo} width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;