
import { FeatureCard } from "../../molecules/FeatureCard/FeatureCard";

const features = [
  {
    icon: "🌍",
    title: "Découverte culturelle",
    description: "Explorez les traditions locales à travers des expériences authentiques.",
  },
  {
    icon: "🌿",
    title: "Nature luxuriante",
    description: "Immergez-vous dans des paysages verdoyants et une biodiversité riche.",
  },
  {
    icon: "🧘",
    title: "Bien-être et détente",
    description: "Profitez de nos installations pour un séjour relaxant et ressourçant.",
  },
];

export const IncontournablesSection = () => {
  return (
    <section>
      <h2>Nos Incontournables</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden overflow-x-auto flex gap-4 p-4">
        {features.map((feature) => (
          <div key={feature.title} className="min-w-[80vw]">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};
