import React, { useState, Fragment } from "react";

import AppBar from "../application-bar";
import NavigationDrawer from "../drawer";

const Navigator = () => {
  const [drawerOpen, handleDrawerToggle] = useState(false);
  return (
    <Fragment>
      <AppBar
        handleHamburgerClick={handleDrawerToggle}
        drawerOpen={drawerOpen}
      />
      <NavigationDrawer
        open={drawerOpen}
        handleBackgroundClick={handleDrawerToggle}
      />
    </Fragment>
  );
};

export default Navigator;
