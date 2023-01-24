import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import img from "../assets/perfil.png";
import bikeImg from "../assets/mountain_bike.jpeg";
import logo from "../assets/logoProfile.png";

const BikesSells = () => {
  const counter = useSelector((state) => state.products.products);
  const usersArray = useSelector((state) => state.users.users);
  const adminsArray = useSelector((state) => state.admins.admins);
  console.log(counter);
  const [users, setUsers] = useState("");
  const [bikes, setBikes] = useState(0);
  const [admins, setAdmins] = useState("");

  const [state, setState] = useState({
    options: {
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: ["Road", "Mountain", "Urban"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45],
      },
    ],
  });

  useEffect(() => {
    function numberBikes() {
      const initialValue = 0;
      const counterBike = counter.reduce(
        (accumulator, current) => accumulator + parseInt(current.stock),
        initialValue
      );
      console.log(counterBike);
      return counterBike;
    }

    setUsers(usersArray);
    setBikes(numberBikes());
    setAdmins(adminsArray);
  }, []);

  return (
    <>
      <div className="is-flex is-justify-content-center">
        <div class="card m-4" style={{ width: "300px" }}>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={img} alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="subtitle is-6">Usuarios Registrados</p>
              </div>
            </div>

            <div class="content">
              {users.length}
              <br />
            </div>
          </div>
        </div>

        <div class="card m-4" style={{ width: "300px" }}>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={bikeImg} alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="subtitle is-6">Numero de Bicicletas en Stock</p>
              </div>
            </div>

            <div class="content">
              {bikes}
              <br />
            </div>
          </div>
        </div>

        <div class="card m-4" style={{ width: "300px" }}>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={logo} alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="subtitle is-6">Numero de Administradores</p>
              </div>
            </div>

            <div class="content">
              {admins.length}
              <br />
            </div>
          </div>
        </div>
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
      />
    </>
  );
};

export default BikesSells;
