import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentLibIndex from "../pages/componentlib/Home";
import Signin from "../pages/auth/Signin";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/sginIn" element={<Signin />} />
        <Route path="/component-library" element={<ComponentLibIndex />} />
      </Routes>
    </>
  );
};

export default index;
