import React from "react";
import { Grid, Paper, Button, Typography, TextField } from "@mui/material";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <Grid>
      <Paper elevation={5} className={classes.paper}>
        <Grid align="center">
          <Typography variant="h6">Register Here</Typography>
          <Typography variant="caption">
            Fill the form to create an account
          </Typography>
        </Grid>
        <form>
          <TextField label="Name" fullWidth />
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Phone Number" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
