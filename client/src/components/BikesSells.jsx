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
          horizontal: false,
        },
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "series-1",
        data: [],
      },
    ],
  });
  console.log(state);
  function bestSellers() {
    console.log(counter);
    let arr = [];
    let arrNames = [];
    let arrCount = [];
    let total = [];
    for (let i = 0; i < counter.length; i++) {
      if (counter[i].count > 0) {
        arr.push(counter[i]);
      }
    }
    console.log(arr);

    const arrSorted = arr.sort((a, b) => a.count - b.count);
    console.log(arrSorted);
    for (let i = 0; i < arrSorted.length; i++) {
      arrNames.push(arrSorted[i].name);
      arrCount.push(arrSorted[i].count);
    }
    total.push(arrNames);
    total.push(arrCount);
    return total;
  }
  bestSellers();
  useEffect(() => {
    const dataBikes = bestSellers();
    console.log(dataBikes);
    function numberBikes() {
      const initialValue = 0;
      const counterBike = counter.reduce(
        (accumulator, current) => accumulator + parseInt(current.stock),
        initialValue
      );
      console.log(counterBike);
      return counterBike;
    }
    console.log(dataBikes[0]);
    setState({
      options: {
        chart: {
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: dataBikes[0],
        },
      },
      series: [
        {
          name: "series-1",
          data: dataBikes[1],
        },
      ],
    });

    setUsers(usersArray);
    setBikes(numberBikes());
    setAdmins(adminsArray);
  }, []);

  return (
    <>
      <div className="is-flex is-justify-content-center">
        <div class="card m-4" style={{ width: "300px" }}>
          <div class="card-image mt-3 has-text-centered">
            <figure class="image is-96x96 is-inline-block">
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
          <div class="card-image mt-3 has-text-centered">
            <figure class="image is-96x96 is-inline-block">
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
          <div class="card-image mt-3 has-text-centered">
            <figure class="image is-96x96  is-inline-block">
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

      <div className="column has-text-centered has-text-white">
        <h1 className="title is-3 font_family mt-5">
          Las bicicletas mas vendidas
        </h1>
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
