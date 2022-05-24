import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
});

//makeStyles not working on button so using custom styles
const style={
  btn : {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover' :{
      backgroundColor: 'blue'
    }
  }
}


export default function Create() {
  const classes = useStyle();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        sx={style.btn}
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
