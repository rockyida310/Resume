import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { makeStyles } from "@material-ui/styles";

// const useStyle = makeStyles({

// });


export default function Create() {
  // const classes = useStyle();
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log("You clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>

      <br/>


    </Container>
  );
}
