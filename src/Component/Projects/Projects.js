// import React from 'react';
// import './Projects.css';
// import project1 from '../../images/website1.png';
// const Projects = () => {
//     return (
//         <div className="projects component__space">
//             <div className="heading">
//                 <h1 className="heading">My Leatest Projects</h1>
//                 <p className="heading p__color">loreLorem ipsum dolor sit, amet consectetur adipisicing</p>
//                 <p className="heading p__color">loreLorem ipsum dolor</p>
//             </div> 
//             <div className="container">
//                 <div className="row">
//                     <div className="col__3">
//                         <div className="project__box pointer relative">
//                         <div className="project__box__img pointer relative">
//                         <div className="project__img__box">
//                          <img src={project1} alt="" className="project__img" />
//                         </div>
//                         <div className="mask__effect"></div>

//                         <div className="project__meta">
//                            <h5 className="project__text">Development</h5>
//                            <h4 className="project__text">Getting Tickets to the big show</h4>
//                           <a href="#" className="project__btn">View Details</a>
//                         </div>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="col__3">
//                         <div className="project__box pointer relative">
//                         <div className="project__box__img pointer relative">
//                         <div className="project__img__box">
//                          <img src={project1} alt="" className="project__img" />
//                         </div>
//                         <div className="mask__effect"></div>

//                         <div className="project__meta">
//                            <h5 className="project__text">Development</h5>
//                            <h4 className="project__text">Getting Tickets to the big show</h4>
//                           <a href="#" className="project__btn">View Details</a>
//                         </div>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="col__3">
//                         <div className="project__box pointer relative">
//                         <div className="project__box__img pointer relative">
//                         <div className="project__img__box">
//                          <img src={project1} alt="" className="project__img" />
//                         </div>
//                         <div className="mask__effect"></div>

//                         <div className="project__meta">
//                            <h5 className="project__text">Development</h5>
//                            <h4 className="project__text">Getting Tickets to the big show</h4>
//                           <a href="#" className="project__btn">View Details</a>
//                         </div>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="col__3">
//                         <div className="project__box pointer relative">
//                         <div className="project__box__img pointer relative">
//                         <div className="project__img__box">
//                          <img src={project1} alt="" className="project__img" />
//                         </div>
//                         <div className="mask__effect"></div>

//                         <div className="project__meta">
//                            <h5 className="project__text">Development</h5>
//                            <h4 className="project__text">Getting Tickets to the big show</h4>
//                           <a href="#" className="project__btn">View Details</a>
//                         </div>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="col__3">
//                         <div className="project__box pointer relative">
//                         <div className="project__box__img pointer relative">
//                         <div className="project__img__box">
//                          <img src={project1} alt="" className="project__img" />
//                         </div>
//                         <div className="mask__effect"></div>

//                         <div className="project__meta">
//                            <h5 className="project__text">Development</h5>
//                            <h4 className="project__text">Getting Tickets to the big show</h4>
//                           <a href="#" className="project__btn">View Details</a>
//                         </div>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="col__3">
//                         <div className="project__box pointer relative">
//                         <div className="project__box__img pointer relative">
//                         <div className="project__img__box">
//                          <img src={project1} alt="" className="project__img" />
//                         </div>
//                         <div className="mask__effect"></div>

//                         <div className="project__meta">
//                            <h5 className="project__text">Development</h5>
//                            <h4 className="project__text">Getting Tickets to the big show</h4>
//                           <a href="#" className="project__btn">View Details</a>
//                         </div>
//                         </div>
//                         </div>
//                         <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
//                             <button className="view__more pointer btn">View More</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Projects;

import React from "react";
import "./Projects.css";
import Project1 from '../../images/website1.png';


function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;