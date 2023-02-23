import React from "react";
import ImageDiscount from "../assets/Imagedescuentos.png";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import BestSellers from "./BestSellers";
import './Landing.css';
import Categories from './Categories'
import BikeAdvisorIntro from './BikeAdvisorIntro'
import NewsLetter from './NewsLetter'
import Discord from './Discord'
import LandingHeader from './LandingHeader'

export default function Landing() {

  // const status = useSelector((state) => state.products.status);

  // <Loader loading={status}></Loader>

  return (
    <div>
      <LandingHeader />
      <div className="landing_subsection_preferences">
        <h2 className="py-6 has-text-centered has-text-white">
            At Paranoid, we understand that everyone has different cycling goals and preferences. 
        </h2>
      </div>
        <Categories/>
      {/* <div className="landing_subsection_bike_advisor">
        <h2> 
            No goals nor preferences, but need some guidance? 
        </h2>
        <h2 className="bigger"> 
            We got you 
        </h2>
        <BikeAdvisorIntro/>
      </div>
      <div className="bestSellers_container">
        <BestSellers />
      </div>
      <div>
        <p>Stay ahead of Paranoid offers and news regarding the world of bikes:</p>
        <NewsLetter />
      </div>
      <div>
        <p>Share your passion by joining our Discord server:</p>
        <Discord />
      </div> */}
    </div>
  );
}