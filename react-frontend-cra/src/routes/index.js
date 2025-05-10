import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentLibIndex from "../pages/componentlib/Home";
const index = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/authenticate" element={<Signin />} /> */}
        <Route path="/component-library" element={<ComponentLibIndex />} />
      </Routes>
    </>
  );
};

export default index;
