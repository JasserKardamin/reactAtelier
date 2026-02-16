import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import eventsData from "../../events.json";

export const EventDetails = () => {
  const [events, setEvents] = useState(eventsData);
  const [currentEvent, setCurrentEvent] = useState();
  const { slug } = useParams();

  useEffect(() => {
    const myevent = events.find((e) => e.name === slug);
    setCurrentEvent(myevent);
  }, [slug, events]);

  return (
    <div className="d-flex flex-row w-100 justify-items-center">
      <div>
        <img src={currentEvent?.img} alt="Loading..." />
      </div>
      <div>
        <h1>{currentEvent?.name}</h1>
        <h3>Description : </h3>
        <p>{currentEvent?.description}</p>

        <h3>Price :</h3>
        <p>{currentEvent?.price}</p>
      </div>
    </div>
  );
};
