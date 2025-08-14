import type { Meta, StoryObj } from "@storybook/react";
import EventsCarousel, { Event } from "./EventsCarousel";

const meta: Meta<typeof EventsCarousel> = {
  title: "Organisms/EventsCarousel",
  component: EventsCarousel,
};

export default meta;

const eventsData: Event[] = [
  {
    id: 1,
    title: "Fête du Vodoun",
    description: "Célébration des traditions et du patrimoine au Bénin.",
    image: "/images/EventsCa/vodoun_fest.jpg",
  },
  {
    id: 2,
    title: "Festival des  masques",
    description: "Événement culturel majeur celebrant les traditions ancestrales au Benin notamment a travers les masques rituels associe au Benin .",
    image: "/images/EventsCa/masque.jpg",
  },
  {
    id: 3,
    title: "Weloveya ",
    description: "Concerts et activités estivales à Cotonou.",
    image: "/images/EventsCa/eya_festival.jpg",
  },
];

type Story = StoryObj<typeof EventsCarousel>;

export const Default: Story = {
  args: {
    events: eventsData,
  },
};
