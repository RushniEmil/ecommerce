import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define validation schema using Yup
const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  channel: yup
    .string()
    .required("Channel is required")
    .test(
      "Is-youtube", // The name of the test
      "Wrong value supplied, please enter 'youtube!'", // The error message to show
      (value) => value === "youtube" // The test logic
    ),
});

const Registerform = () => {
  // Initialize the form with default values and Yup resolver for validation
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
  });

  // Destructure necessary methods and properties from the form object
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  // Define the function to handle form submission
  const onSubmit = (data) => {
    console.log("form submitted", data);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex mx-auto">
            <div className="col-md-6">
              {/* Form to capture user input */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="formcontrol">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    {...register("username")}
                  />
                  <p className="text-danger error">
                    {errors.username?.message}
                  </p>
                </div>
                <div className="formcontrol">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                  />
                  <p className="text-danger error">{errors.email?.message}</p>
                </div>
                <div className="formcontrol">
                  <label htmlFor="channel">Channel</label>
                  <input
                    type="text"
                    id="channel"
                    name="channel"
                    {...register("channel")}
                  />
                  <p className="text-danger error">{errors.channel?.message}</p>
                </div>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* DevTool component to visualize form state */}
      <DevTool control={control} />
    </div>
  );
};

export default Registerform;
