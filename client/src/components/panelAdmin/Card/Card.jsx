
import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

const Card = (param) => {
  return (
    <div
    className="CompactCard"
    style={{
      background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
    }}
  >
    <div className="radialBar">
      <CircularProgressbar
        value={param.barValue}
        text={`${param.barValue}%`}
      />
      <span>{param.title}</span>
    </div>
    <div className="detail">
      <img src={param.png} alt="" />
      <span>{param.value}</span>
      <span>Total</span>
    </div>
  </div>
  );
};


export default Card;



