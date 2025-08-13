import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Icon from './Icon';
import { IconProps } from './types';

const ICONS = {
  search: 'search',
  user: 'user',
  settings: 'settings',
  home: 'home',
  logout: 'logout',
  
};


const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
 
  argTypes: {
    name: {
      control: { type: 'select' },
     
      options: Object.keys(ICONS),
    },
    size: {
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    name: ICONS.search, 
    size: 24,
  },
};

export const IconSet: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1.5rem', color: 'black' }}>
      {}
      {(Object.keys(ICONS) as Array<keyof typeof ICONS>).map((iconKey) => (
        <div key={iconKey} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          {}
          <Icon name={ICONS[iconKey]} />
          <span style={{ fontSize: '12px', color: '#333' }}>{iconKey}</span>
        </div>
      ))}
    </div>
  ),
};