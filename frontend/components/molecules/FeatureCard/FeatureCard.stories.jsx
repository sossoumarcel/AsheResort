import React from "react";
import FeatureCard from "./FeatureCard";

export default {
  title: "Organisms/FeatureCard",
  component: FeatureCard,
};

export const Default = () => (
  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <FeatureCard
      image="/images/Feature/circuit-O.jpg"
      title="Circuit touristique"
      description="Explorez Ouidah avec un circuit guidé de 3 jours."
    />
    <FeatureCard
      image="/images/Feature/circuit-A.jpg"
      title="Fête du Vodoun"
      description="Explorez Abomey avec un circuit guidé de 3 jours.."
    />
    <FeatureCard
      image="/images/Feature/ganvie.jpg"
      title="Village lacustre de Ganvié"
      description="Découvrez la Venise de l'Afrique lors d'une excursion en pirogue."
    />
  </div>
);
