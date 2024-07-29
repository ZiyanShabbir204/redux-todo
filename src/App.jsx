import { useState } from "react";

import Users from "./components/Users";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import AddUser from "./components/AddUser";
import "./App.css";
import DrawerAppBar from "./components/Navbar";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

function App() {
  
  // console.log("loader in appp", loader);

  return (
    <>
      <DrawerAppBar />
      <AddUser />
      {/* {loader && (
        <Box sx={{ width: "100%", display:"flex" , justifyContent:"center", marginTop:"10px"}}>
          <CircularProgress />
        </Box>
      )} */}
      <Users />
    </>
  );
}

export default App;
