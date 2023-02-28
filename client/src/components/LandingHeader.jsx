import React from 'react'
import './Landing.css'
import { useNavigate } from 'react-router-dom'

const LandingHeader = () => {

  const navigate = useNavigate()

  return (
    <div>
        <div className="landing_header">
        <div className="landing_header_image_container">
          <img src={require("../assets/bike_ride_4.png")} alt="man_riding_bike" className="landing_header_image" />
        </div>
        <div className="landing_header_text">
          <div className="landing_header_title">
            <div className="landing_header_title_container">
                <div className="first_header_title">
                  Take 
                </div>
                <div className="middle_header_container">
                  <div className="middle_header_title">
                    your cycling experience 
                  </div>
                </div>
            </div>
            <div className="last_header_title underline">
              <svg viewBox="0 0 2550 500">
                <symbol id="s-text">
                  <text textAnchor="middle" x="46%" y="38%">to the next level.</text>
                </symbol>
                <g class = "g-ants">
                  <use xlinkHref="#s-text" class="text-copy"></use>
                  <use xlinkHref="#s-text" class="text-copy"></use>
                  <use xlinkHref="#s-text" class="text-copy"></use>
                  <use xlinkHref="#s-text" class="text-copy"></use>
                  <use xlinkHref="#s-text" class="text-copy"></use>
                </g>
              </svg>
            </div>
          </div>
          <div className="landing_header_body">
            <div className="header_paragraph">
              <p className="p1">
                Buy based on A.I. advice, join a passionate community, 
              </p>
              <p className="p2">
                and much more...
              </p>
            </div>
            <div className="header_button">
              <button onClick={() => navigate('/offers')}>
                  View offers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingHeader