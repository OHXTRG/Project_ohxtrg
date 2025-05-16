import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentLibIndex from "../pages/componentlib/Home";
import Signin from "../pages/auth/Signin";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import ProtectedRoute from "../Helper/ProtectedRoute";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/signIn" element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/component-library" element={<ComponentLibIndex />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default index;
