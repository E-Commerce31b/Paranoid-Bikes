import * as React from "react";
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../pagination/Pagination";
import {
  getUsers,
  softDeleteUser,
} from "../../../../redux/slices/adminActions";
import { Button, Switch } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../../../context/AuthContext.js";

const makeStyle = (status) => {
  if (status === false) {
    return {
      background: "rgb(0, 159, 0)",
      color: "green",
    };
  } else if (status === true) {
    return {
      background: "rgb(150, 0,0)",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function Clients() {
  const users = useSelector((state) => state.users.users);
  const currentPage = useSelector((state) => state.products.currentPage);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.admins.token);
  const [boolean, setBoolean] = useState(false);


  React.useEffect(() => {
    dispatch(getUsers(token));
  }, [boolean]);

  const handleSoftDelete = async (user) => {
    const data = { user, token };
    console.log(user.email);

    console.log("component", data);
    dispatch(softDeleteUser(data));
    setBoolean(!boolean);
  };

  const slicedProducts = () => {
    if (users) {
      return users.slice(currentPage, currentPage + 10);
    }
  };
  return (
    <div>
      <div className="Table">
        <div className="column has-text-centered">
          <h1 className="title font_family mt-3 mb-4">Usuarios</h1>
        </div>
        <div className="columns">
          <div className="column"></div>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="left">email</TableCell>
                  <TableCell align="left">Id de Usuario</TableCell>
                  <TableCell align="left">Estado</TableCell>
                  <TableCell align="left">Ban</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {slicedProducts().map((user) => (
                  <TableRow
                    key={user.first_name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.last_name} {user.first_name}
                    </TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">{user._id}</TableCell>
                    <TableCell align="left" className="Details">
                      <span
                        className="status"
                        style={makeStyle(user.softDelete)}
                      >
                        {user.softDelete}
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <Button onClick={() => handleSoftDelete(user)}>
                        Banear
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="column is-1"></div>
        </div>
        <div className="columns is-centered mb-4">
          <Pagination currentPage={currentPage} filtered={users} />
        </div>
      </div>
    </div>
  );
}
