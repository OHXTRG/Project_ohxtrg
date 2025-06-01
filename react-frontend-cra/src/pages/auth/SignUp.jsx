import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { authenticate } from "../../actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Signin = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth, "auth satate");
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/");
    }
  }, [auth]);

  const validation = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),

    password: Yup.string().required("password is required"),
  });

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={auth.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            console.log(values, "values");
            dispatch(
              authenticate(
                { email: values.email, password: values.password },
                "signUp"
              )
            );
          }}
        >
          {({ values, handleChange, handleBlur, errors, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  width: "500px",
                  maxWidth: "500px",
                  maxHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Typography component="h2">Sign Up</Typography>

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && errors.email}
                  sx={{ width: "100%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="outlined"
                  sx={{ width: "100%" }}
                  helperText={errors.password && errors.password}
                />
                <Button type="submit" sx={{ width: "100%" }}>
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Signin;
