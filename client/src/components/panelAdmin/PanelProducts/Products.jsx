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
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.jsx";
import detalle from "../../../assets/Detalle.png";

export default function Products() {
  const bikes = useSelector((state) => state.products.products);
  const currentPage = useSelector((state) => state.products.currentPage);
  const params = useLocation();
  const slicedProducts = () => {
    // if(product) return product;
    if (bikes) {
      // return filtered.slice(currentPage, currentPage ? currentPage + 16 : 0);
      return bikes.slice(currentPage, currentPage + 15);
    }
  };
  const productsSlice = () => {
    return bikes.slice(0, 9);
  };

  return (
    <div className="flex is-flex-direction-row is-justify-content-space-between">
      <div className="">
        {params?.pathname === "/productos" ? <Sidebar /> : <></>}
      </div>
      <div className="Table">
        {params?.pathname === "/panel" ? (
          <div className="column has-text-centered my-6">
            <h1 className="title is-3 font_family  mb-4">
              Vista Previa Productos
            </h1>
          </div>
        ) : (
          <div className="column has-text-centered">
            <h1 className="title is-3 font_family my-3 mb-4 ">
              Lista de Bicicletas
            </h1>
          </div>
        )}

        <div className="columns">
          <TableContainer
            component={Paper}
            style={{
              boxShadow: "0px 13px 20px 0px #80808029",
              padding: "30px",
            }}
          >
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="ml-4 mr-2"
            >
              <TableHead>
                <TableRow className="is-size-4 has-text-weight-bold">
                  <TableCell className="is-size-4 has-text-weight-bold">
                    Nombre
                  </TableCell>
                  <TableCell className="is-size-4 has-text-weight-bold">
                    Id
                  </TableCell>
                  {params?.pathname === "/productos" ? (
                    <TableCell className="is-size-4 has-text-weight-bold">
                      Stock
                    </TableCell>
                  ) : (
                    <></>
                  )}

                  <TableCell className="is-size-4 has-text-weight-bold">
                    Detalle
                  </TableCell>
                  <TableCell className="is-size-4 has-text-weight-bold">
                    Imagen
                  </TableCell>
                  {params?.pathname === "/productos" ? (
                    <TableCell className="is-size-4 has-text-weight-bold">
                      Fecha de Posteo
                    </TableCell>
                  ) : (
                    <></>
                  )}

                  <TableCell className="is-size-4 has-text-weight-bold">
                    # Vendidas
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {params?.pathname === "/panel"
                  ? productsSlice().map((product) => (
                      <TableRow
                        key={product.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {product.name}
                        </TableCell>
                        <TableCell>{product.id}</TableCell>
                        {params?.pathname === "/productos" ? (
                          <TableCell>
                            <Stock />
                          </TableCell>
                        ) : (
                          <></>
                        )}

                        <TableCell className="Details">
                          <NavLink to={`/details/${product.id}`}>
                            <img src={detalle} alt="Not found" width={30} />
                          </NavLink>
                        </TableCell>
                        <TableCell className="Details">
                          <div className="">
                            <img
                              src={product.image}
                              alt="Not found"
                              width={80}
                            />
                          </div>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {product.count}
                        </TableCell>
                      </TableRow>
                    ))
                  : slicedProducts().map((bike) => (
                      <TableRow
                        key={bike.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {bike.name}
                        </TableCell>
                        <TableCell align="left">{bike.id}</TableCell>
                        <TableCell align="left">
                          <Stock id={bike.id} />
                        </TableCell>
                        <TableCell align="left" className="Details">
                          <NavLink to={`/details/${bike.id}`}>
                            <img src={detalle} alt="Not found" width={30} />
                          </NavLink>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <div className="">
                            <img src={bike.image} alt="Not found" width={80} />
                          </div>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {bike.createdAt}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {bike.count}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {params?.pathname === "/productos" ? (
          <div className="columns is-centered mb-4">
            <Pagination currentPage={currentPage} filtered={bikes} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div></div>
    </div>
  );
}
