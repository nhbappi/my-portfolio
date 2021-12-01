
import React, {useState} from "react";
import "./Home.css";
import photo from '../images/inline_image_preview.png';

const Home = () => {
 // fixed Header
 window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);


   
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="">
            <h1 className="logos">Naz<span className="log">mul.</span></h1>
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



{/* toggle */}


<div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
 </div>
 {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#about">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#services">Services</a>
            </li>
            <li className="sideNavbar">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="sideNavbar">
              <a href="#blog">Blog</a>
            </li>
            <li className="sideNavbar">
              <a href="#contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}


        </div>
        
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content d__flex">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10 animate-charcter">Hi, I’m Nazmul</h2>
              <h3 className="home__text sweet pz__10 word">Frontend Developer.</h3>


              <div class="wrapper">
         <div class="button">
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-github"></i>
            </div>
            <span>Github</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
      </div>
              <a href="https://drive.google.com/uc?export=download&id=1HK7m_WhKYESx2nnxYso7yX421HuZ06aW">
<button className="about btn pointer ms-0 mt-3">Download Cv</button>
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