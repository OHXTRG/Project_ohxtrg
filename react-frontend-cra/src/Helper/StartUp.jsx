import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CircularProgress, Backdrop } from "@mui/material";

const StartUp = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token, "in start up app ********************");
    if (token) {
      const data = JSON.parse(localStorage.getItem("data"));
      //   console.log(data);
      dispatch({
        type: "LOGIN",
        payload: {
          token,
          data: data,
        },
      });
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        children
      )}
    </>
  );
};

export default StartUp;
