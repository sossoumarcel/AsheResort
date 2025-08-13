import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IncontournablesSection } from "./IncontournablesSection";

const meta: Meta<typeof IncontournablesSection> = {
  title: "Organisms/IncontournablesSection",
  component: IncontournablesSection,
};

export default meta;

type Story = StoryObj<typeof IncontournablesSection>;

export const Default: Story = {
  render: () => <IncontournablesSection />,
};
