import React, { useEffect } from "react";
import { deleteUser, userData } from "../api/jsonApi";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

import {
  addUser,
  deleteAllUser,
  removeUser,
  setUserKey,
} from "../store/slices/UserSlice";
import UserDetail from "./UserDetail";
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
    console.log("use effect check");
  }, []);

  const deleteAllHandler = () => {
    dispatch(deleteAllUser());
  };

  const users = useSelector((state) => state.User.users);

  console.log("user data", users);
  return (
    <div>
      Users
      <User />
      <Stack direction="row" spacing={5} justifyContent="center" sx={{"marginTop":7}}>
        {users.length > 0 && (
          <Button
            variant="outlined"
            onClick={deleteAllHandler}
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete All
          </Button>
        )}

        {/* <Button variant="contained" endIcon={<AddIcon />} >
          Add User
        </Button> */}
      </Stack>
     
    </div>
  );
};

export default Users;