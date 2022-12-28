import React from "react";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

const Layout = ({ children }) => {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </>
  );
};

export default Layout;
