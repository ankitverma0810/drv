import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 701,
            md: 1025,
            lg: 1441,
            xl: 1920
        }
    },
    palette: {
        primary: {
            main: "#036939"
        },
        secondary: {
            main: "#14BD50"
        },
        error: {
            main: "#FE1C18"
        },
        info: {
            main: "#444444"
        },
        warning: {
            main: "#FFD219"
        }
    },
    typography: {
        h1: {
            fontSize: "6.75rem",
            fontWeight: 500
        },
        h2: {
            fontSize: "4.75rem",
            fontWeight: 500
        },
        h3: {
            fontSize: "2.75rem",
            fontWeight: 500
        },
        h4: {
            fontSize: "1.40rem",
            fontWeight: 500
        },
        body1: {
            fontSize: "1rem"
        }
    }
});

export default appTheme;
