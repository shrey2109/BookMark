import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// react-hot-toast
import { Toaster } from 'react-hot-toast';


const Layout = (props) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "77.7vh" }}>
        <Toaster />
        {props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
