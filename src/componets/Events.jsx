import { useEffect, useState } from "react";
import * as eventService from "../service/eventService";
import { Event } from "./Event";
import Alert from "react-bootstrap/Alert";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showBienvenu, setShowBienvenu] = useState(false);

  // did mount
  useEffect(() => {
    const fetchData = async () => {
      const events = await eventService.fetchEvents();
      setEvents(events);
      console.log("Events component mounted");
    };

    fetchData();
  }, []);

  // did update
  useEffect(() => {
    setShowBienvenu(true);
    setTimeout(() => {
      setShowBienvenu(false);
    }, 3000);
  }, events);

  // wil umount
  // useEffect(() => {
  //   return () => {
  //     console.log("Events component unmounted");
  //   };
  // }, []);

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

      <div className="d-flex flex-row gap-3 p-5">
        {events?.map((item, index) => (
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
