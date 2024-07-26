import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser, postUser } from "../store/slices/UserSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Stack } from "@mui/material";

const UserDetail = () => {
  const name = useRef();
  const username = useRef();
  const email = useRef();

  const data = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (data.userKey) {
      const user = data.users.find((user) => user.id == data.userKey);
      name.current.value = user.name;
      username.current.value = user.username;
      email.current.value = user.email;
    }
  }, [data.userKey]);

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      id: data.users[data.users.length - 1].id + 1,
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
    // navigate("/");

    // console.log(payload)
  };

  return (
    <>
    <Stack spacing={2} justifyContent="center" alignItems="center">
    <TextField label="Name" sx={{"width":"250px"}}/>
    <TextField label="Username" sx={{"width":"250px"}}/>
    <TextField label="Email" sx={{"width":"250px"}} />

    </Stack>
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={submitHandler}
      >
       
        <label style={{ marginTop: 10 }}>
          Enter Name:
          <input ref={name} type="text" name="userID" />
        </label>
        <label style={{ marginTop: 10 }}>
          Enter Username :
          <input ref={username} type="text" name="userID" />
        </label>
        <label style={{ marginTop: 10 }}>
          Enter Email :
          <input ref={email} type="text" name="userID" />
        </label>

        {!data.userKey ? (
          <button type="Submit" style={{ width: "fit-content" }}>
            Post
          </button>
        ) : (
          <button type="Submit" style={{ width: "fit-content" }}>
            EDIT
          </button>
        )}
      </form>
      <Link to="/">
        <button>View Users</button>
      </Link>
    </div>
    </>
  );
};

export default UserDetail;
