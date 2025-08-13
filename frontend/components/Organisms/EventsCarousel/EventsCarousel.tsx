import React, { useState } from "react";

export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface EventsCarouselProps {
  events: Event[];
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  if (events.length === 0) return null;

  const currentEvent = events[currentIndex];

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <img
        src={currentEvent.image}
        alt={currentEvent.title}
        style={{ width: "80%", borderRadius: "15px" }}
      />
      <h2>{currentEvent.title}</h2>
      <p>{currentEvent.description}</p>
      <button onClick={prevSlide} style={{ position: "absolute", left: "10px", top: "50%" }}>
        ◀
      </button>
      <button onClick={nextSlide} style={{ position: "absolute", right: "10px", top: "50%" }}>
        ▶
      </button>
    </div>
  );
};

export default EventsCarousel;
