import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import TableChart from "@material-ui/icons/TableChart";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { getRequiredDrawbacks } from "../../redux/selectors";

const ApplicationBar = ({
  drawbacksRequired,
  handleHamburgerClick,
  drawerOpen,
}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-between">
          <IconButton onClick={() => handleHamburgerClick(!drawerOpen)}>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <TableChart />
          </IconButton>
          <Typography style={{ alignSelf: "center" }}>
            {drawbacksRequired}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  drawbacksRequired: getRequiredDrawbacks(state),
});

export default connect(mapStateToProps)(ApplicationBar);
