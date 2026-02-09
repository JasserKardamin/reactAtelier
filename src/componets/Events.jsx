import { useEffect, useState } from "react";
import eventsData from "../../events.json";
import { Event } from "./Event";
import Alert from "react-bootstrap/Alert";

export const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [showAlert, setShowAlert] = useState(false);
  const [showBienvenu, setShowBienvenu] = useState(false);

  // did mount
  useEffect(() => {
    console.log("Events component mounted");
  }, []);

  // did update
  useEffect(() => {
    setShowBienvenu(true);
    setTimeout(() => {
      setShowBienvenu(false);
    }, 3000);
  }, events);

  // wil umount
  useEffect(() => {
    return () => {
      console.log("Events component unmounted");
    };
  }, []);

  const buy = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    return <Alert />;
  };

  return (
    <>
      {showAlert && (
        <Alert variant="success">Ticket acheté avec succès !</Alert>
      )}

      {showBienvenu && (
        <Alert variant="success">Hey Welcome to Esprit Events</Alert>
      )}

      <div className="d-flex flex-row gap-3">
        {events.map((item, index) => (
          <Event
            key={index}
            img={item.img}
            title={item.name}
            price={item.price}
            numParticipant={item.nbParticipants}
            numTickets={item.nbTickets}
            buy={buy}
          />
        ))}
      </div>
    </>
  );
};
