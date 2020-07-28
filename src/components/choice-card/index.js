import React from "react";
import { Button, Card, Grid, Typography } from "@material-ui/core";
import Interweave from "interweave";

const ChoiceCard = ({ data, handleClick, picked, disabled }) => {
  const buttonStyles = {
    backgroundColor: picked ? "green" : "inherit",
  };

  return (
    <Button
      component={Card}
      disabled={disabled}
      onClick={() => handleClick(data)}
      style={buttonStyles}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>{data.title}</Typography>
        </Grid>
        {data?.personality_score && (
          <Grid item xs={12}>
            <Typography>{data.personality_score}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography>
            <Interweave content={data.description} />
          </Typography>
          {data?.drawback && (
            <Typography>
              Take the drawback
              <br />
              {`"${data.drawback}"`}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Button>
  );
};

ChoiceCard.defaultProps = {
  handleClick: (data) => console.log(data),
};

export default ChoiceCard;
