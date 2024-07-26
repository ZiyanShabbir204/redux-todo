import React, { useEffect } from "react";
import { deleteUser, userData} from "../api/jsonApi";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../store/slices/UserSlice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


import {
  addUser,
  deleteAllUser,
  removeUser,
  setUserKey,
} from "../store/slices/UserSlice";
import UserDetail from "./AddUser";
import User from "./User";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();
  // User is a store name and users is a state object

  const dataHandler = async () => {
    const data = await userData();
    dispatch(addUser(data));
    console.log("data", data);
  };

  useEffect(() => {
    dataHandler();
    dispatch(setLoader())
    console.log("use effect check");
  }, []);

  const deleteAllHandler = () => {
    dispatch(deleteAllUser());
  };

  const users = useSelector((state) => state.User.users);

  console.log("user data", users);
  
  return (
   
  
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {users.map((user) => (
            <User {...user} />
          ))}
        </Grid>
        <Stack
        direction="row"
        spacing={5}
        justifyContent="center"
        sx={{ marginTop: 7 }}
      >
        
       
      </Stack>
      </div>
      

     
    
  );
};

export default Users;
