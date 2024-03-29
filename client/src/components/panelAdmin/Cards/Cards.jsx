
import React from "react";
import "./Cards.css";
import { cardsData } from "../Data/Data";
import { salesBarValue, salesValue, usersBarValue } from "../Analitics/Analytics";
import { useSelector } from "react-redux";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

import Card from "../Card/Card";

const Cards = () => {
  const products = useSelector((state) => state.products.products);
  const users = useSelector((state) => state.users.users)
  console.log(users);
  

  const colorSales = [
    {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
  ];

  const serieSales = [
    {
      name: "Sales",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  return (
    <>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-10">
          <div className="Cards">
            <div className="parentContainer" key={"sales"}>
              <Card
                title={"Sales"}
                color={colorSales}
                barValue={salesBarValue(products)}
                value={salesValue(products)}
                png={UilMoneyWithdrawal}
                series={serieSales}
              />
            </div>
            <div className="parentContainer" key={'users'} >
            <Card
              title={'Users'}
              color={`${colorSales}`}
              barValue={usersBarValue(users)}
              value={users.length}
              png={UilMoneyWithdrawal}
              series={serieSales}
            />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

