import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { TextField } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    field: {
      marginBottom: 20,
      display: "block",
    },
  })
);

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // console.log(`title : ${title}`);
  // console.log(`details : ${details}`);

  const handleSubmit = (e) => {
    // e.preventDeafault();
    console.log(title + "\n" + details);
  };

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          InputProps={{ className: classes.field }}
          margin="dense"
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required //require just add * and not some validation
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          InputProps={{ className: classes.field }}
          margin="dense"
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required //require just add * and not some validation
        />
      </form>
      <Button
        onClick={(e) => {
          handleSubmit(e);
        }}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
