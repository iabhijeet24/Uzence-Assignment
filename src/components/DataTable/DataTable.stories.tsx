import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  profession: string;
}

const sampleData: User[] = [
  { id: 1, name: "Amit Sharma", email: "amit@example.com", age: 20, profession: "Engineer" },
  { id: 2, name: "Priya Verma", email: "priya@example.com", age: 17, profession: "Student" },
  { id: 3, name: "Rahul Mehta", email: "rahul@example.com", age: 25, profession: "Designer" },
  { id: 4, name: "Sneha Kapoor", email: "sneha@example.com", age: 16, profession: "Student" },
];

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    darkMode: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    data: sampleData,
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    data: sampleData,
    darkMode: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    darkMode: false,
  },
};
