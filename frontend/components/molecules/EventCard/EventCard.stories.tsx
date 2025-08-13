import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import EventCard from "./EventCard";

const meta: Meta<typeof EventCard> = {
  title: "Molecules/EventCard",
  component: EventCard,
};

export default meta;

type Story = StoryObj<typeof EventCard>;

export const VodounFestival: Story = {
  args: {
    image: "/images/events/vodoun_festival.jpg",
    title: "Festival Vodoun",
    date: "Janvier",
    description: "Célébration annuelle de la culture vaudou avec danses, rituels et musique traditionnelle.",
  },
};

export const weloveya: Story = {
  args: {
    image: "/images/events/weloveya_E.jpg",
    title: "Weloveya",
    date: "Décembre",
    description: "Festival de musique et d'art contemporain mettant en avant les talents locaux et internationaux.",
  },
};
