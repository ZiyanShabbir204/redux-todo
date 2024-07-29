import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser, postUser } from "../store/slices/UserSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";

const AddUser = () => {
  const name = useRef();
  const username = useRef();
  const email = useRef();



  const data = useSelector((state) => state.User);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.userKey) {
      const user = data.users.find((user) => user.id == data.userKey);
      name.current.value = user.name;
      username.current.value = user.username;
      email.current.value = user.email;
    }
  }, [data.userKey]);

  const submitHandler = (e) => {

    const payload = {
      id: (data.users[data.users.length - 1]? data.users[data.users.length - 1].id :0)+1,
      // id: data.users[data.users.length - 1]?.id + 1,
      name: name.current.value,
      username: username.current.value,
      email: email.current.value,
    };

    {
      !data.userKey ? dispatch(postUser(payload)) : dispatch(editUser(payload));
    }

    name.current.value = "";
    username.current.value = "";
    email.current.value = "";
  };

  return (
    <>
      <Stack spacing={2} justifyContent="center" alignItems="center" marginTop={10}>
        <TextField label="Name" sx={{ width: "250px" }} inputRef={name} />
        <TextField
          label="Username"
          sx={{ width: "250px" }}
          inputRef={username}
        />
        <TextField label="Email" sx={{ width: "250px" }} inputRef={email} />
      

        <Button variant="contained" endIcon={<AddIcon />} onClick={submitHandler}>
          Add User
        </Button>
      </Stack>
     
    </>
  );
};

export default AddUser;
