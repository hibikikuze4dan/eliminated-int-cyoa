import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { getLocationData } from "../../redux/selectors";
import { connect } from "react-redux";
import Interweave from "interweave";

const Page = ({ data }) => {
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
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  data: getLocationData(state),
});

export default connect(mapStateToProps)(Page);
