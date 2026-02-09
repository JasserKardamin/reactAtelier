import { useState, useEffect } from "react";

export const Event = ({ title, price, numTickets, numParticipant, img }) => {
  const [EventInfo, setEventInfo] = useState({
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
        <h5 className="card-title">Title : {EventInfo.title}</h5>
        <p className="card-text">Price : {EventInfo.price}</p>
        <p className="card-text">Number of tickets :{EventInfo.numTickets}</p>
        <p className="card-text">
          Number of participants :{EventInfo.numParticipant}
        </p>
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
      </div>
    </div>
  );
};
