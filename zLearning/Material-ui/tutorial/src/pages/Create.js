import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
import Container from '@mui/material/Container';

export default function Create() {
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

      {/* <Button
        type="submit"
        color="primary"
        variant='outlined'
      >
        Submit
      </Button> */}

      {/* <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      <Button
        onClick={()=> console.log('You clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        // disableElevation
      >
        Submit
      </Button>
      {/* disableElevation for no shadow */}
    </Container>
  );
}
