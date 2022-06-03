import { useState } from "react";

import { Route, Routes, Link } from "react-router-dom";
import Home from "./views/Home";
import Error from "./views/Error";
import SignIn from "./views/SignIn";
import { useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  let navigate = useNavigate();
  return (
    <>
      <nav>
        {!isAuth ? (
          <Link to="/"> </Link>
        ) : (
          <>
            <Link to="/characters">Heroes </Link>
            <button> Sing Out</button>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/characters" element={<Home isAuth={isAuth} />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
