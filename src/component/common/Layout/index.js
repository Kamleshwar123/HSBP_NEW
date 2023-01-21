import React from "react";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";

const Layout = ({ children }) => {
  
  return (
    <>
    <div id="main_layout">
      <TheHeader />
      <main>
        {children}
      </main>
      <TheFooter />
    </div>
    </>
  );
};

export default Layout;
