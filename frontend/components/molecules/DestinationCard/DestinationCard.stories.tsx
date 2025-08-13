import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DestinationCard from "./DestinationCard";

const meta: Meta<typeof DestinationCard> = {
  title: "Molecules/DestinationCard",
  component: DestinationCard,
};

export default meta;

type Story = StoryObj<typeof DestinationCard>;

export const Cotonou: Story = {
  args: {
    image: "/images/destinations/cotonou.jpg",
    title: "Cotonou",
    description: "Capitale économique du Bénin avec ses marchés animés et sa vie culturelle riche.",
  },
};

export const Ouidah: Story = {
  args: {
    image: "/images/destinations/ouidah.jpg",
    title: "Ouidah",
    description: "Ville historique connue pour la Route des Esclaves et son patrimoine vodoun.",
  },
};
