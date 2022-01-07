import * as React from "react";

import TextField from "@mui/material/TextField";

export interface AppTextFieldProps {
    id: string;
    label: string;
    variant: "outlined" | "filled" | "standard";
}

const AppTextFieldDefaultProps: AppTextFieldProps = {
    id: "",
    label: "",
    variant: "outlined"
};

const AppTextField: React.FC<AppTextFieldProps> = ({ id, label, variant }) => {
    return <TextField id={id} label={label} variant={variant} />;
};

AppTextField.defaultProps = AppTextFieldDefaultProps;

export default AppTextField;
