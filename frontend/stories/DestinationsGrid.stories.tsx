import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DestinationsGrid from '../components/organisms/DestinationsGrid';

const meta: Meta<typeof DestinationsGrid> = {
  title: 'Organisms/DestinationsGrid',
  component: DestinationsGrid,
};

export default meta;
type Story = StoryObj<typeof DestinationsGrid>;

export const Default: Story = {
  render: () => <DestinationsGrid />,
};
