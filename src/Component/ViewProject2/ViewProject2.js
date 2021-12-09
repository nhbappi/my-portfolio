import React from 'react';
import photo from '../../images/web.app 0.jpg';
import photo1 from '../../images/web.app 00.jpg'
import photo2 from '../../images/web.app 000.jpg'
import photo3 from '../../images/web.app 0.jpg'

const ViewProject2 = () => {
    return (
        <div>
            <h1 className="about__heading text-center mt-3">Health Care</h1>

            <div>
            <img src={photo} className="img-fluid" alt="..."/>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div className="me-2">
                <a href="https://healthcare-9ed42.web.app/" className="project__btn">LiveSite</a>
                
                </div>
            <div>
            <a href="https://github.com/nhbappi/healthCare" className="project__btn">ClientSide</a>
            </div>
            
            
            </div>
           <div>
               <h1 className="fs-1 fw-bold text-center m-5">Description</h1>
           </div>
           <div>
               <p className="container text-light text-inline bg-dark">
               "Health Care is open in western Palm Beach County, Florida, U.S.A. A Board Certified hospital supervises all of the services at the HealthCare Center. The Center has been awarded the highest level of certification by the American Hospital Association. We offer a wide range of services to satisfy the complete needs of your people. Our services range from State-of-the-Art Medical and Surgical care to Wellness Programs, Behavioral Counseling, Hospitalization, Boarding, Grooming, and Prescription Heartworm and Flea Medication.<br/>

               It is our pleasure to provide you with this web site. The focus of this site is to provide you with information on a variety of health care topics. Whether you want medical information on you pet’s condition or you want to know where you can find informative or entertaining Television programming relating to pets, you will find it on this site.<br/>

                This Web site is a service to you, the pet owner, if there is pet care topic you are interested in, we welcome your questions and suggestions".   
               </p>
           </div>

           <div>
           <h1 className="about__heading mt-5 text-center m-3">SomeShoots</h1>
           </div>
             <div>
             <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={photo1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
             </div>

             <div className="text-center m-5">
             <h2 className="home__text pz__10 animate-charcter">Thanks For <br/>Watching My Project</h2>
             </div>
        </div>

        
    );
};

export default ViewProject2;