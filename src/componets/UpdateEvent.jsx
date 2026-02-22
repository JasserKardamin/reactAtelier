import { useForm } from "react-hook-form";
import * as eventSercvice from "../service/eventService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UpdateEvent = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await eventSercvice.updateEvent(id, data);
    navigate("/events");
  };

  return (
    <form
      className="d-flex flex-column gap-3 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="Name">Name</label>
      <input {...register("name")} type="text" />

      <label htmlFor="Description">Description</label>
      <input {...register("Description")} type="text" />

      <label htmlFor="Price">Price</label>
      <input {...register("Price", { valueAsNumber: true })} type="number" />

      <label htmlFor="Number of Tickets">Number of Tickets</label>
      <input
        {...register("nbTickets", { valueAsNumber: true })}
        type="number"
      />

      <div className="d-flex flex-row gap-3 ">
        <button type="submit">Update</button>
        <button type="reset">Cancel </button>
      </div>
    </form>
  );
};
