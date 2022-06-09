import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

import Characters from "./views/Characters";
import Error from "./views/Error";
import SignIn from "./views/SignIn";
import Profile from "./views/Profile";
import Home from "./views/Home";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { purple, green } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  let navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Toolbar>
                <Link to="/" className="link">
                  Rick and Morty
                </Link>
              </Toolbar>
              {!isAuth ? (
                <Button variant="contained">
                  <Link to="/login" className="link">
                    Login
                  </Link>
                </Button>
              ) : (
                <>
                  <Link to="/characters"></Link>
                  <Button variant="contained" onClick={signOut}>
                    Sing Out
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={<SignIn setIsAuth={setIsAuth} />}
          ></Route>
          <Route
            path="/characters"
            element={<Characters isAuth={isAuth} />}
          ></Route>
          <Route
            path="/characters/:id"
            element={<Profile isAuth={isAuth} />}
          ></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
