import React from "react";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";

import appTheme from "../src/theme/appTheme";
import Center from "../src/components/Center/Center";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
        viewports: INITIAL_VIEWPORTS // to use a detailed set of devices in viewport
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    // for sorting stories alphabetically
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
    }
};

// decorators
export const decorators = [
    (Story) => {
        return (
            <MUIThemeProvider theme={appTheme}>
                <ThemeProvider theme={appTheme}>
                    <Center>{Story()}</Center>
                </ThemeProvider>
            </MUIThemeProvider>
        );
    }
];
