import { useForm } from "react-hook-form";
import * as eventService from "../service/eventService";

export const AddEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    eventService.createEvent(data);
  };

  return (
    <>
      <form
        className="d-flex flex-column gap-3 px-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("name")} type="text" name="" id="" />
        <textarea {...register("description")} name="" id="" />
        <input {...register("price")} type="number" name="" id="" />
        <input {...register("numToken")} type="number" name="" id="" />
        <input {...register("image")} type="image" name="" id="" />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
};
