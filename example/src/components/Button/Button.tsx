import React from "react";

import Button from "@mui/material/Button";

export interface AppButtonProps {
    color?: "primary" | "secondary" | "success" | "error";
    variant?: "text" | "outlined" | "contained";
    onClick?: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({
    color = "primary",
    variant = "contained",
    children,
    onClick
}) => {
    return (
        <Button color={color} variant={variant} onClick={onClick}>
            {children}
        </Button>
    );
};

export default AppButton;
