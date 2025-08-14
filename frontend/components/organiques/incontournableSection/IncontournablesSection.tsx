import React from "react";

interface Event {
  title: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    title: "WELOVEYA",
    description:
      "Festival musical et culturel à Cotonou réunissant des artistes locaux et internationaux dans une ambiance unique.",
    image: "/images/incontournables/weloveya.jpg",
  },
  {
    title: "Vodoun Days",
    description:
      "Célébration du culte vodoun à Ouidah, rassemblant fidèles et curieux du monde entier autour de rites et de danses traditionnelles.",
    image: "/images/incontournables/vodoun_days.jpg",
  },
  {
    title: "Festichill",
    description:
      "Événement détente et musical sur la plage, mêlant concerts, food court et activités nautiques.",
    image: "/images/incontournables/festichill.jpg",
  },
];

export const IncontournablesSection: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Événements incontournables du Bénin
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IncontournablesSection;
