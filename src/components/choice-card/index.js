import React from "react";
import {
  Button,
  Card,
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import Interweave from "interweave";
import { Img } from "react-image";

const ChoiceCard = ({ data, handleClick, picked, disabled }) => {
  const buttonStyles = {
    backgroundColor: picked ? "green" : "inherit",
    textTransform: "none",
    height: "100%",
  };

  const imageSection = (
    <Grid item xs={12}>
      <Grid container justify="center">
        <Img
          style={{ height: "300px", width: "100%", objectFit: "fill" }}
          src={data.src}
          loader={<CircularProgress />}
          unloader={<CircularProgress />}
        />
      </Grid>
    </Grid>
  );

  return (
    <Button
      component={Card}
      disabled={disabled}
      onClick={() => handleClick(data)}
      style={buttonStyles}
    >
      <Grid container>
        {imageSection}
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
