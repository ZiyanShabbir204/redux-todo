import { useState } from "react";

import Users from "./components/Users";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from '@mui/material/LinearProgress';
import UserDetail from "./components/AddUser";
import "./App.css";
import DrawerAppBar from "./components/Navbar";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

function App() {

  const loader = useSelector((state) => state.User.loader);

  return (
    <>
      <DrawerAppBar/>
      <UserDetail />
      {loader && (
        <Stack flex marginTop={10} alignItems="center">
          <CircularProgress/>

        </Stack>
        
      )}
      <Users  />
      
   
      
    </>
  );
}

export default App;
