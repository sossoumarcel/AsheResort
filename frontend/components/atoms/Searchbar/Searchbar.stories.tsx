import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './Searchbar';

const meta: Meta<typeof SearchBar> = {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    onSearch: { action: 'searched' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Rechercher...',
  },
};