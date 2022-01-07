import React from "react";

import { createStyles, makeStyles } from "@mui/styles";

export interface CenterProps {}

const useStyles = makeStyles(() =>
    createStyles({
        center: {
            display: "flex",
            justifyContent: "center"
        }
    })
);

export const Center: React.FC<CenterProps> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.center}>{children}</div>;
};

export default Center;
