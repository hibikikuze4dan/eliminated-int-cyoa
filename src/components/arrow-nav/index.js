import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getPreviousAndNextSection } from "../../redux/selectors";
import { connect } from "react-redux";
import ArrowRight from "@material-ui/icons/ArrowForward";
import ArrowLeft from "@material-ui/icons/ArrowBack";
import { updateLocation } from "../../redux/actions";

const ArrowNavigation = ({ prevNext, updateLocation }) => {
  return (
    <Grid container justify="space-between">
      <IconButton
        component={Link}
        onClick={() => updateLocation(prevNext[0].link)}
        to={`/${prevNext[0].link}`}
      >
        <ArrowLeft />
      </IconButton>
      <IconButton
        component={Link}
        onClick={() => {
          return updateLocation(prevNext[1].link);
        }}
        to={`/${prevNext[1].link}`}
      >
        <ArrowRight />
      </IconButton>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  prevNext: getPreviousAndNextSection(state),
});

export default connect(mapStateToProps, { updateLocation })(ArrowNavigation);
