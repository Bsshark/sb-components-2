import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
	title: "UI/labels/MyLabel",
	component: MyLabel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: {
			control: "inline-radio",
		},
		color: { control: "color" },
		fontColor: { control: "color" },
	},
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		label: "Basic label",
	},
};
export const AllCaps: Story = {
	args: {
		label: "All Caps label",
		size: "Normal",
		allCaps: true,
	},
};
export const Secondary: Story = {
	args: {
		label: "Secondary label",
		color: "text-secondary",
		fontColor: "",
	},
};
export const CustomColor: Story = {
	args: {
		label: "Custom Color label",
		fontColor: "green",
	},
};
export const CustomBackgroundColor: Story = {
	args: {
		label: "Custom BG Color",
		fontColor: "white",
		backgroundColor: "black",
	},
};
