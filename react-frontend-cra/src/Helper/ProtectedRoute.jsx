import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  console.log(auth, "auth state");
  useEffect(() => {
    if (!auth) {
      navigate("/signin");
    }
  }, []);

  if (!auth)
    return !auth ? (
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    ) : (
      children
    );
};

export default ProtectedRoute;
