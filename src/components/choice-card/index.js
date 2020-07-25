import React from "react";
import { Button, Card, Grid, Typography } from "@material-ui/core";
import Interweave from "interweave";

const ChoiceCard = ({ data, handleClick, picked }) => {
  const buttonStyles = {
    backgroundColor: picked ? "green" : "inherit",
  };

  return (
    <Button
      component={Card}
      onClick={() => handleClick(data)}
      style={buttonStyles}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>{data.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <Interweave content={data.description} />
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

ChoiceCard.defaultProps = {
  handleClick: (data) => console.log(data),
};

export default ChoiceCard;
