import React from "react";

import AppTextField from "./Textfield";

export default {
    title: "Form/Textfield",
    component: AppTextField
};

export const Outlined = () => <AppTextField id="outlined" label="Outlined" variant="outlined" />;
export const Filled = () => <AppTextField id="filled" label="Filled" variant="filled" />;
export const Standard = () => <AppTextField id="standard" label="Standard" variant="standard" />;
