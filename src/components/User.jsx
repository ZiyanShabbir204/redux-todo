import React from "react";
import { deleteUser, userData } from "../api/jsonApi";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUserKey } from "../store/slices/UserSlice";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    console.log(id);
    deleteUser(id);
    dispatch(removeUser(id));
  };

  const editHandler = (id) => {
    dispatch(setUserKey(id));
  };
  const users = useSelector((state) => state.User.users);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          
        >
          {users.map((user)=>(
            <Grid item xs={2} sm={4} md={4} key={user.id} sx={{display:"flex",justifyContent:"center"}} >
            <Card sx={{ minWidth: 275, marginTop: 2, maxWidth: 300 ,textAlign:"center"}}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="h6" component="div">
                  {user.username}
                </Typography>
                <Typography variant="h6" component="div">
                  {user.email}
                </Typography>
              </CardContent>
              <CardActions sx={{display:"flex",justifyContent:"center"}}>
                <IconButton
                  aria-label="delete"
                  size="large"
                  color="error"
                  onClick={() => deleteHandler(user.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <Link to="/userdetail">
                
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => editHandler(user.id)}
                >
                  Edit
                </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Box>
      {/* {users.map((user, index) => (
       
        <Card sx={{ minWidth: 275, marginTop: 2, maxWidth: 300 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="h6" component="div">
              {user.username}
            </Typography>
            <Typography variant="h6" component="div">
              {user.email}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="delete"
              size="large"
              color="error"
              onClick={() => deleteHandler(user.id)}
            >
              <DeleteIcon />
            </IconButton>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => editHandler(user.id)}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      ))} */}
    </div>
  );
};

export default User;
