import React from "react";
import { Grid, Paper, Button, Typography, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const phoneRegExp = /^[2-9]{2}[0-9]{8}/;
  const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "It's too short")
      .required("Required"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Required"),
    // phoneNumber: Yup.number()
    //   .typeError("Enter valid Phone number")
    //   .required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Enter valid Phone number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Minimum characters should be 8")
      .matches(
        passwordRegExp,
        "Password must have one upper, lower case, number, special symbol"
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matches")
      .required("Required"),
  });
  const onSubmit = (values, props) => {
    alert(JSON.stringify(values), null, 2);
    props.resetForm();
  };
  return (
    <Grid>
      <Paper elevation={5} className={classes.paper}>
        <Grid align="center">
          <Typography variant="h6">Register Here</Typography>
          <Typography variant="caption">
            Fill the form to create an account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form noValidate>
              {/* <TextField
                label="Name"
                name="name"
                fullWidth
                value={props.values.name}
                onChange={props.handleChange}
                helperText={<ErrorMessage name="name" />}
              /> */}
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                error={props.errors.name && props.touched.name}
                helperText={<ErrorMessage name="name" />}
                required
              />
              {/* <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                {...props.getFieldProps("email")}
              /> */}
              <Field
                as={TextField}
                name="email"
                label="Email"
                type="email"
                fullWidth
                error={props.errors.email && props.touched.email}
                helperText={<ErrorMessage name="email" />}
                required
              />
              <Field
                as={TextField}
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                error={props.errors.phoneNumber && props.touched.phoneNumber}
                helperText={<ErrorMessage name="phoneNumber" />}
                required
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                error={props.errors.password && props.touched.password}
                helperText={<ErrorMessage name="password" />}
                required
              />
              <Field
                as={TextField}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                error={
                  props.errors.confirmPassword && props.touched.confirmPassword
                }
                helperText={<ErrorMessage name="confirmPassword" />}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
