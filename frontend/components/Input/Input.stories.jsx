import React from 'react';
import Input from './Input';

export default {
  title: 'Composants/Atomiques/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder: 'Entrez votre email',
  label: 'Adresse Email',
};

export const MotDePasse = Template.bind({});
MotDePasse.args = {
  type: 'password',
  placeholder: 'Entrez votre mot de passe',
  label: 'Mot de passe',
};

export const Texte = Template.bind({});
Texte.args = {
  type: 'text',
  placeholder: 'Entrez un texte',
  label: 'Nom complet',
};
