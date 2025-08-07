import React from 'react';
import Button from './Button';

export default {
  title: 'Composants/Atomiques/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primaire = Template.bind({});
Primaire.args = {
  label: 'Réserver une visite',
  style: 'primary',
};

export const Secondaire = Template.bind({});
Secondaire.args = {
  label: 'Découvrir nos produits',
  style: 'secondary',
};
