import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

// Schema validation using Yup
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  phonenumber: yup
    .string()
    .matches(/^\+?\d{8,14}$/, 'Phone number must be between 8 to 14 digits')
    .required('Phone number is required'),
});

const Registration = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(schema)
  });

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form submitted", data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate('/bliss/login');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex">
          <div className="col-md-4 mx-auto p-5 border border-2 rounded-3 my-5">
            <h2 className="text-center">CREATE AN ACCOUNT</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  {...register("name")}
                />
                <small className="form-text text-danger">
                  {errors.name?.message}
                </small>
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  {...register("email")}
                />
                <small className="form-text text-danger">
                  {errors.email?.message}
                </small>
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <small className="form-text text-danger">
                  {errors.password?.message}
                </small>
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  placeholder="Confirm Password"
                  {...register("confirmpassword")}
                />
                <small className="form-text text-danger">
                  {errors.confirmpassword?.message}
                </small>
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="phonenumber"
                  placeholder="Your Phone Number"
                  {...register("phonenumber")}
                />
                <small className="form-text text-danger">
                  {errors.phonenumber?.message}
                </small>
              </div>
              <div className="form-group mb-3">
                <textarea
                  id="address"
                  cols="45"
                  className="form-control"
                  rows="4"
                  placeholder="Your Address"
                  {...register("address")}
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="Your State"
                  {...register("state")}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  placeholder="Your Pincode"
                  {...register("pincode")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="form-group">
                <small className="form-text text-muted">
                  Already have an account?
                  <Link to="/bliss/login" className="text-info">Login</Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
