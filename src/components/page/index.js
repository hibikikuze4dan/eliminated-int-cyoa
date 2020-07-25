import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Interweave from "interweave";

import { getLocationData } from "../../redux/selectors";
import ChoiceList from "../choice-list";
import { sectionActions } from "../../redux/actions";

const Page = ({ data, handleClick, location }) => {
  console.log(location, handleClick);
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
      <Grid item xs={12}>
        {data.get("choices") && (
          <ChoiceList
            choices={data.get("choices")}
            handleClick={handleClick}
            location={location}
          />
        )}
      </Grid>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
