import * as React from "react";
import '../Clients/table.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../pagination/Pagination";



const makeStyle = (status) => {
  if (status === false) {
    return { 
      status:'online',
      background: "rgb(0, 128, 0)",
      color: "green",
    };
  } else if (status === true) {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};


export default function Admins() {
  const admins = useSelector((state) => state.admins.admins);
  const currentPage = useSelector((state) => state.products.currentPage);
  const dispatch = useDispatch;
console.log(admins);
  const slicedProducts = () => {
    if (admins) {
      return admins.slice(currentPage, currentPage + 15);
    }
  };


  const handleSoftDelete = (admin) => {
    // admins.map(item)
    // dispatch(deleteAdmin(admin))
  console.log(admin);
  }


  return (
    <div>
      <div className="Table">
        <div className="column has-text-centered">
          <h1 className="title is-3 font_family mt-3 mb-4">Administradores</h1>
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
                  <TableCell>Nombre</TableCell>
                  <TableCell align="left">email</TableCell>
                  <TableCell align="left">Id de Usuario</TableCell>
                  <TableCell align="left">Estado</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {slicedProducts().map((admin) => (
                  <TableRow
                    key={admin.first_name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                    {admin.last_name} {admin.first_name}
                    </TableCell>
                    <TableCell align="left">
                      {admin.email}
                    </TableCell>
                    <TableCell align="left">{admin._id}</TableCell>
                    <TableCell align="left" className="Details">
                    <span className="status" style={makeStyle(admin.softDelete)}>
                        {admin.softDelete}</span>
                        <button onClick={() => handleSoftDelete(admin)}>Cambiar estado</button>
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
          <Pagination currentPage={currentPage} filtered={admins} />
        </div>
      </div>
    </div>
  );
}

