import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import Interweave from "interweave";
import { Link } from "react-router-dom";

import { getLocationData } from "../../redux/selectors";
import ChoiceList from "../choice-list";
import { sectionActions, updateLocation } from "../../redux/actions";

const Page = ({ data, handleClick, location, updateLocation }) => {
  const quickLinks = (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={6}>
          <Button
            component={Link}
            to="/expression"
            onClick={() => updateLocation("expression")}
          >
            Expression
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            component={Link}
            to="/accent"
            onClick={() => updateLocation("accent")}
          >
            Accent
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{data.get("title")}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <Interweave content={data.get("description")} />
        </Typography>
      </Grid>
      {location === "drawbacks" && quickLinks}
      {["accent", "expression"].includes(location) && (
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/drawbacks"
            onClick={() => updateLocation("drawbacks")}
          >
            Drawbacks
          </Button>
        </Grid>
      )}
      <Grid item xs={12}>
        {data.get("choices") && (
          <ChoiceList
            choices={data.get("choices")}
            handleClick={handleClick}
            location={location}
          />
        )}
      </Grid>
      {location === "drawbacks" && quickLinks}
      {["accent", "expression"].includes(location) && (
        <Grid item xs={12}>
          <Button
            component={Link}
            to="/drawbacks"
            onClick={() => updateLocation("drawbacks")}
          >
            Drawbacks
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  data: getLocationData(state),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(dispatch, ownProps);
  return {
    handleClick: (data) => dispatch(sectionActions[ownProps?.location](data)),
    updateLocation: (data) => dispatch(updateLocation(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
