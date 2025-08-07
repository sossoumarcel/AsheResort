import React from 'react';
import Label from '../../atoms/Label/Label';

interface Event {
  title: string;
  date: string;
}

interface EventsCarouselProps {
  events: Event[];
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ events }) => {
  return (
    <div className="carousel">
      {events.map((event, index) => (
        <div key={index} className="carousel-item">
          <Label text={event.title} />
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsCarousel;
