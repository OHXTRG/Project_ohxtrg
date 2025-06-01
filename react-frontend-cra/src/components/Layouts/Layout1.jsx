import React from "react";
import Header from "../Header";
const Layout1 = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout1;
