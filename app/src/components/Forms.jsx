import React from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="parent">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
          <div className="message">
            {isSubmitSuccessful && (
              <p>REGISTRATION COMPLETED SUCCESSFULLY</p>
            )}
          </div>
          <div className="inputContainer">
            <label htmlFor="firstName" >
              Your First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstname", { required: "Please enter your first name" })}
              className="input"
            />
            {errors.firstname && (
              <p className="error">{errors.firstname.message}</p>
            )}
          </div>

          <div className="inputContainer">
            <label htmlFor="lastName" >
              Your Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastname", {
                required: "Please enter your last name",
              })}
              className="input"
            />
            {errors.lastname && (
              <p className="error">{errors.lastname.message}</p>
            )}
          </div>

          <div className="inputContainer">
            <label htmlFor="email" >
               Your Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: /^[a-zA-Z0-9_*]+@[a-zA-Z0-9]+\.[A-Za-z]{2,}$/,
                  message: "Invalid Email Address",
                },
              })}
              className="input"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="inputContainer">

            <label htmlFor="password" >
               Your Password
            </label>
            <input
              type="password"
              placeholder="Enter Your password"
              {...register("password", {
                required: "Password required",
                pattern: {
                  value: /^[a-zA-Z0-9_*]{5,20}$/,
                  message: "Invalid Password",
                },
              })}
              className="input"
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <input type="submit" value={"REGISTER"} className="submitButton" />
        </form>
      </div>
    </>
  );
};

export default Forms;
