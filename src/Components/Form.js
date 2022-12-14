import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const { register, handleSubmit, errors, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "ibrahijm",
    },
  });

  console.log(getValues());
  const submitForm = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            placeholder="First Name..."
            {...register("firstName")}
          />
          <p> {errors?.firstName?.message} </p>
          <input
            type="text"
            placeholder="Last Name..."
            {...register("lastName")}
          />
          <p> {errors?.lastName?.message} </p>
          <input type="text" placeholder="Email..." {...register("email")} />
          <p> {errors?.email?.message} </p>
          <input type="text" placeholder="Age..." {...register("age")} />
          <p> {errors?.age?.message} </p>
          <input
            type="password"
            placeholder="Password..."
            {...register("password")}
          />
          <p> {errors?.password?.message} </p>
          <input
            type="password"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
          />
          <p> {errors?.confirmPassword && "Passwords Should Match!"} </p>
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
