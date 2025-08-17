// DataTable.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable"; // ✅ Case-sensitive import (important for Linux/Mac)

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataTable>;

// ✅ Sample data
const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 25, profession: "Engineer" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 30, profession: "Designer" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", age: 22, profession: "Developer" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", age: 17, profession: "Intern" },
];

// ✅ Stories
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

export const EmptyData: Story = {
  args: {
    data: [],
    darkMode: false,
  },
};
