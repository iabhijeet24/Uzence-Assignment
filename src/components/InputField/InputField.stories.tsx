import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import React, { useState } from "react";

// Controlled wrapper to manage InputField value inside Storybook
const ControlledInput = (args: React.ComponentProps<typeof InputField>) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <InputField
      {...args}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email"],
    },
    darkMode: { control: "boolean" },
    clearable: { control: "boolean" },
    passwordToggle: { control: "boolean" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Username",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
    darkMode: false,
  },
};

export const Filled: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    variant: "filled",
    size: "md",
  },
};

export const Ghost: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Search",
    placeholder: "Type here...",
    variant: "ghost",
    size: "lg",
  },
};

export const PasswordWithToggle: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Password",
    type: "password",
    passwordToggle: true,
    helperText: "Click eye icon to toggle visibility",
  },
};

export const Clearable: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Search",
    placeholder: "Type something...",
    clearable: true,
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="bg-gray-900 p-4 w-full max-w-sm">
      <ControlledInput {...args} />
    </div>
  ),
  args: {
    label: "Username",
    placeholder: "Dark mode input",
    darkMode: true,
    variant: "outlined",
  },
};

export const Invalid: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Email",
    type: "email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};
