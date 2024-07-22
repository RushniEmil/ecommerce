import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

// Validation schema using Yup
const schema = yup.object({
  useremail: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup.string()
    .required('Password is required')
});

const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(schema)
  });

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;
    
  // Function to handle form submission
  const onLogin = (data) => {
    console.log("login details", data);
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (loggeduser) {
      console.log(loggeduser, "logged user");
      if (data.useremail === loggeduser.email && data.password === loggeduser.password) {
        localStorage.setItem("loggedin", true);
        navigate('/bliss/shop');
      } else {
        alert("Wrong username or password!");
      }
    } else {
      alert("Please register an account");
    }
  };

  return (
    <>
      <div className="container login">
        <div className="row">
          <div className="d-flex" style={{ height: "30rem" }}>
            <div className="col-md-4 mx-auto p-5 border border-2 my-auto">
              <h2 className="text-center">LOGIN</h2>
              <form onSubmit={handleSubmit(onLogin)} noValidate>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="useremail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    {...register("useremail")}
                  />
                  <small id="error" className="form-text text-danger">
                    {errors.useremail?.message}
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
                  <small id="error" className="form-text text-danger">
                    {errors.password?.message}
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <div className="form-group">
                  <small id="error" className="form-text text-muted">
                    If you don't have an account?
                    <Link to="/bliss/registration" className="text-info">
                      Sign Up
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
