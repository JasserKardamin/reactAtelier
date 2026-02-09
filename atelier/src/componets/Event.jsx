import { useState, useEffect } from "react";

export const Event = ({
  title,
  price,
  numTickets,
  numParticipant,
  img,
  buy,
}) => {
  const [canBuy, setCanBuy] = useState(true);
  const [like, setLike] = useState(false);

  useEffect(() => {
    setCanBuy(numParticipant > 0);
  }, [numParticipant]);
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column align-items-start">
        <h5 className="card-title">Title : {title}</h5>
        <p className="card-text">Price : {price}</p>
        <p className="card-text">Number of tickets :{numTickets}</p>
        <p className="card-text">Number of participants :{numParticipant}</p>
        <button
          disabled={!canBuy}
          onClick={buy}
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
