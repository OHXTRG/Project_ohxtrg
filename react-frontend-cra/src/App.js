import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes/Index";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import StartUp from "./Helper/StartUp";

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <StartUp>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </StartUp>
    </Provider>
  );
}

export default App;
