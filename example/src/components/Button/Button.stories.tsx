import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppButton from "./Button";

export default {
    title: "Form/Button",
    component: AppButton,
    parameters: {
        actions: {
            handles: ["mouseover", "click"] // using builtin actions addon
        }
    },
    args: {
        // default arguments passed in all the stories
        children: "Button",
        color: "primary"
    },
    argTypes: {
        // registering custom onClick event
        // either we can use actions like above in parameters property or this approach to register events
        onClick: {
            action: "onClick",
            table: {
                category: "Props"
            }
        },
        children: {
            type: { name: "string", required: true },
            description: "Button label",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "undefined" },
                category: "Props"
            }
        },
        variant: {
            options: ["text", "outlined", "contained"],
            control: { type: "select" },
            description: "Button variant types",
            table: {
                type: { summary: "text | outlined | contained" },
                defaultValue: { summary: "contained" },
                category: "Props"
            }
        },
        color: {
            options: ["primary", "secondary", "success", "error"],
            control: { type: "select" },
            description: "Button color types",
            table: {
                type: { summary: "primary | secondary | success | error" },
                defaultValue: { summary: "theme.color.primary" },
                category: "Props"
            }
        }
    }
} as ComponentMeta<typeof AppButton>;

// ===============Old way of defining stories================
/* export const Text = () => <AppButton variant="text">Text</AppButton>;

export const Outlined = () => (
    <AppButton variant="outlined">Outlined</AppButton>
);
export const Contained = () => (
    <AppButton variant="contained">Contained</AppButton>
); */

// ===============Arguments: Better way for defining stories=================
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AppButton> = (args) => (
    <AppButton {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
    variant: "contained"
};

export const Text = Template.bind({});
Text.args = {
    variant: "text",
    onClick: () => console.log("Button clicked", process.env.STORYBOOK_DATA_KEY) // using env variables
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: "outlined",
    color: "error"
};
