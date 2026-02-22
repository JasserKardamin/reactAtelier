import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as eventService from "../service/eventService";

export const Event = ({
  id,
  title,
  price,
  numTickets,
  numParticipant,
  img,
  onDelete,
}) => {
  const [EventInfo, setEventInfo] = useState({
    id,
    title,
    price,
    numParticipant,
    numTickets,
    img,
  });
  const [canBuy, setCanBuy] = useState(true);
  const [like, setLike] = useState(false);

  useEffect(() => {
    setCanBuy(numParticipant > 0);
  }, [numParticipant]);

  const handleBuy = () => {
    setEventInfo((prev) => {
      return {
        ...prev,
        numParticipant: prev.numParticipant + 1,
        numTickets: prev.numTickets - 1,
      };
    });
  };

  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={EventInfo.img} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column align-items-start">
        <Link to={`/event/${EventInfo.title}`} className="card-title">
          Title : {EventInfo.title}
        </Link>
        <p className="card-text">Price : {EventInfo.price}</p>
        <p className="card-text">Number of tickets :{EventInfo.numTickets}</p>
        <p className="card-text">
          Number of participants :{EventInfo.numParticipant}
        </p>
        <div className="d-flex flex-row gap-3">
          <button
            disabled={!canBuy}
            onClick={handleBuy}
            type="button"
            className="btn btn-primary"
          >
            Book an event
          </button>
          <button
            onClick={() => setLike(!like)}
            type="button"
            className="btn btn-info"
          >
            {like ? "Dislike" : "Like"}
          </button>
          <Link className="btn btn-primary" to={`/event/update/${id}`}>
            Update
          </Link>

          <button className="btn btn-danger" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
