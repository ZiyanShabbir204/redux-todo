import React, { useEffect } from "react";
import { deleteUser, userData } from "../api/jsonApi";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { getUser ,setLoader} from "../actions";


import {
  deleteAllUser,
  removeUser,
  setUserKey,

} from "../store/slices/UserSlice";
import AddUser from "./AddUser";
import User from "./User";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();
  // User is a store name and users is a state object
  const loader = useSelector((state) => state.userReducer.loader);

  const dataHandler = async () => {
    const data = await userData();
    dispatch(getUser(data));
    dispatch(setLoader(false));
  };

  useEffect(() => {
    dataHandler();

  }, []);

  const deleteAllHandler = () => {
    dispatch(deleteAllUser());
  };

  // dispatch(setLoader())
  // const users = useSelector((state) => state.User.users);
  const users = useSelector((state) => state.userReducer.users);
  console.log("user data zzz", users);

  return (
    <div>
      {console.log(loader, "loader")}
      {loader ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {users.map((user) => (
            <User {...user} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Users;
