import React from "react";
import Login from "./Login";
import Register from "./Register";
import NoMatchPage from "./NoMatchPage";
import Dashboard from "./Dashboard";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import NavBar from "./NavBar";

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <div className="container-fluid">
        <Routes>
          <Route path="/" exact={true} element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="*" element={<NoMatchPage/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
