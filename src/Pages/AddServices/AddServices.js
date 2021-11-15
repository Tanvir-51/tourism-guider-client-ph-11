import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://arcane-headland-98633.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h1>Please Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          placeholder="Name"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("description")}
          placeholder="Description"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("image", { required: true })}
          placeholder="Image Link"
          className="p-2 m-2 w-50"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddServices;
