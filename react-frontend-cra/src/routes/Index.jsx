import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentLibIndex from "../pages/componentlib/Home";
import Signin from "../pages/auth/Signin";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import ProtectedRoute from "../Helper/ProtectedRoute";
import { useDispatch } from "react-redux";
import Layout1 from "../components/Layouts/Layout1";

const Index = () => {
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
              <Layout1>
                <Home />
              </Layout1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Index;
