import React from "react";

import { Link, Outlet } from "react-router-dom";

const Indexscreen = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">AboutUs</Link>
      <Link to="/cart">cart</Link>
      <Link to="/*">Error</Link>
      <Outlet />
    </div>
  );
};

export default Indexscreen;
