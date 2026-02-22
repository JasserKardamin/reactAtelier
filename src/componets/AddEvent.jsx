import { useForm } from "react-hook-form";
import * as eventService from "../service/eventService";
import { useNavigate } from "react-router-dom";

export const AddEvent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await eventService.createEvent(data);
      navigate("/events");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="d-flex flex-column gap-3 px-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("name")} type="text" />
        <textarea {...register("description")} />
        <input {...register("price", { valueAsNumber: true })} type="number" />
        <input
          {...register("nbTickets", { valueAsNumber: true })}
          type="number"
        />
        <input {...register("image")} type="file" />
        <div className="d-flex flex-row gap-3">
          <button type="submit">Ajouter Event </button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </>
  );
};
