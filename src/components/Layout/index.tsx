import React from "react";
import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
      <div className="app">
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
  );
};

export default Layout;