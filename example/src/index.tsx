import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@mui/material/styles";

import appTheme from "./theme/appTheme";
import App from "./App";

ReactDOM.render(
    <ThemeProvider theme={appTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
