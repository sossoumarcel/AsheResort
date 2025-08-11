import React from "react";
import { FeatureCard } from "./FeatureCard"; // Import corrigé : même dossier

export default {
  title: "Molécules/FeatureCard",
  component: FeatureCard,
};

export const Default = {
  args: {
    imageSrc: "/images/475222627-b2c983f2-ec78-4b6b-a4f6-11e6dc502249.jpg",
    title: "Ouidah",
    description: "Découvrez la plage et l'histoire.",
  },
};

export const AvecImage2 = {
  args: {
    imageSrc: "/images/475240405-7532059b-9907-4f0a-938d-e53ca515d57a.jpg",
    title: "Parc",
    description: "Une nature luxuriante à explorer.",
  },
};

export const AvecImage3 = {
  args: {
    imageSrc: "C:\Users\yvesz\Desktop\AsheResort\frontend\public\images\ 475241200-72123bb3-2545-4d24-9ff5-ebb84dc0c0a4.jpg",
    title: "Ganvié",
    description: "La Venise de l'Afrique.",
  },
};
