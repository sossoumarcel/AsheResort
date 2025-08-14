import type { Meta, StoryObj } from "@storybook/react";
import OffersList, { Offer } from "./OffersList";

const meta: Meta<typeof OffersList> = {
  title: "Organisms/OffersList",
  component: OffersList,
};

export default meta;

const offersData: Offer[] = [
  {
    id: 1,
    title: "Hôtel Sofitel",
    description: "Un séjour relaxant avec vue sur la mer à Cotonou.",
    image: "/images/offers/sofitel.jpg",
  },
  {
    id: 2,
    title: "Dégustation de mets locaux",
    description: "Découvrez la gastronomie béninoise à travers nos ateliers.",
    image: "/images/offers/degustation.jpg",
  },
  {
    id: 3,
    title: "Visite culturelle à Ouidah",
    description: "Explorez l'histoire et le patrimoine du Bénin.",
    image: "/images/offers/ouidah_tour.jpg",
  },
];

type Story = StoryObj<typeof OffersList>;

export const Default: Story = {
  args: {
    offers: offersData,
  },
};
