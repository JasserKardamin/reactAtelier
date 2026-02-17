import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as eventService from "../service/eventService";

export const EventDetails = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventsData = await eventService.fetchEvents();
        if (!eventsData) throw new Error("Event does not exist ! ");
        setEvents(eventsData || []);
      } catch (err) {
        console.error("Failed to fetch events", err);
        setEvents([]);
      }
    };
    fetchEvent();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const myevent = events.find((e) => e.name === slug);
      setCurrentEvent(myevent);
    }
  }, [events, slug]);

  // show loading while event is not ready
  if (!currentEvent) {
    return <p>Loading event details...</p>;
  }

  return (
    <div className="d-flex flex-row w-100 justify-items-center gap-5">
      <div>
        <img src={currentEvent.img} alt={currentEvent.name} />
      </div>
      <div>
        <h1>{currentEvent.name}</h1>
        <h3>Description:</h3>
        <p>{currentEvent.description}</p>

        <h3>Price:</h3>
        <p>{currentEvent.price}</p>
      </div>
    </div>
  );
};
