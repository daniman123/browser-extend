import type { Meta, StoryObj } from "@storybook/react";
import App from "./app/App";

const meta = {
	title: "Main/App",
	component: App,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
