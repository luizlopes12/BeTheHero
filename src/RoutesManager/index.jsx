import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import NewCase from "../pages/NewCase";
import Details from "../pages/Details";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RoutesManager = () => {
  const loggedIn = useSelector((state) => state.userData);
  const caseData = useSelector((state) => state.caseData);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/admin"
        element={loggedIn ? <Admin /> : <Navigate to="/" />}
      />
      <Route
        path="/newcase"
        element={loggedIn ? <NewCase /> : <Navigate to="/" />}
      />
      <Route
        path="/details"
        element={caseData ? <Details /> : <Navigate to="/" />}
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesManager;
