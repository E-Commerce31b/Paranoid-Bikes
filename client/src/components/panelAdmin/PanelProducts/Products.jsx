import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Pagination from "../../pagination/Pagination.jsx";
import Stock from "./Stock.jsx";
import { NavLink } from "react-router-dom";

export default function Products() {
  const bikes = useSelector((state) => state.products.products);
  const currentPage = useSelector((state) => state.products.currentPage);
  console.log("currentPage", currentPage);
  const slicedProducts = () => {
    // if(product) return product;
    if (bikes) {
      // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
      return bikes.slice(currentPage, currentPage + 15);
    }
  };
  return (
    <div>
      <div className="Table">
        <div className="column has-text-centered">
          <h1 className="title is-3 font_family mt-3 mb-4">Recent Orders</h1>
        </div>
        <div className="columns">
          <div className="column is-1"></div>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Bicicletas</TableCell>
                  <TableCell align="left">Id Bicicletas</TableCell>
                  <TableCell align="left">Stock Bicicletas</TableCell>
                  <TableCell align="left">Detalle de la bicicleta</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {slicedProducts().map((bike) => (
                  <TableRow
                    key={bike.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {bike.name}
                    </TableCell>
                    <TableCell align="left">{bike.id}</TableCell>
                    <TableCell align="left">
                      <Stock />
                    </TableCell>
                    <TableCell align="left" className="Details">
                      <NavLink to={`/details/${bike.id}`}>Detalle</NavLink>
                    </TableCell>
                    {/* <TableCell align="left"></TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="column is-1"></div>
        </div>
        <div className="columns is-centered mb-4">
          <Pagination currentPage={currentPage} filtered={bikes} />
        </div>
      </div>
    </div>
  );
}
