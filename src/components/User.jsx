import React, { useRef, useState } from "react";
import { deleteUser, userData } from "../api/jsonApi";
import { useDispatch, useSelector } from "react-redux";
import { editUser, removeUser, setUserKey } from "../store/slices/UserSlice";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const User = ({ id, name, email, username }) => {
  const [textField, setTextField] = useState(false);
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [usernameState, setUsernameState] = useState("");
  const [testState, setTestState] = useState("test");
  const dispatch = useDispatch();
  
  const deleteHandler = (id) => {
    console.log(id);
    deleteUser(id);
    dispatch(removeUser(id));
  };

  const editHandler = (id) => {
    setTextField(!textField);
    setNameState(name);
    setEmailState(email);
    setUsernameState(username);
  };

  const changeHandler = (id) => {
    console.log("name", nameState);
    const payload = {
      id: id,
      name: nameState,
      email: emailState,
      username: usernameState,
    };
    dispatch(setUserKey(id));
    dispatch(editUser(payload));
    setTextField(!textField);
  };

  const Text = () => {
    return (
      <>
        <Typography variant="h5" component="div" type="input">
          {name}
        </Typography>
        <Typography variant="h6" component="div">
          {username}
        </Typography>
        <Typography variant="h6" component="div">
          {email}
        </Typography>
      </>
    );
  };

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={4}
      key={id}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{ minWidth: 275, marginTop: 2, maxWidth: 300, textAlign: "center" }}
      >
        <CardContent>
          {textField ? (
            <>
              <TextField
                id="standard-basic"
                label="name"
                value={nameState}
                onChange={(e) => {
                  setNameState(e.target.value);
                }}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="username"
                value={usernameState}
                onChange={(e) => setUsernameState(e.target.value)}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="email"
                value={emailState}
                onChange={(e) => setEmailState(e.target.value)}
                variant="standard"
              />
            </>
          ) : (
            <Text />
          )}
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          {textField ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => changeHandler(id)}
            >
              Update
            </Button>
          ) : (
            <>
              <IconButton
                aria-label="delete"
                size="large"
                color="error"
                onClick={() => deleteHandler(id)}
              >
                <DeleteIcon />
              </IconButton>

              <Button variant="outlined" color="primary" onClick={editHandler}>
                Edit
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default User;
