import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { Height } from "@mui/icons-material";

// Validation schema using Yup
const schema = yup.object({
  useremail: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup
    .string()
    .required('Password is required')
});

const Login = () => {
  const navigate = useNavigate();
  
  // Initialize form with Yup resolver for validation
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
    <Box className="container d-flex justify-content-center align-items-center" style={{minHeight:"75vh"}}>
      <Box className="row">
        <Box className="col-12 mx-auto p-5 border border-2 rounded-3 " >
          <h2 className="text-center" style={{ color: "#3b5d50" }}>LOGIN</h2>
          <form onSubmit={handleSubmit(onLogin)} noValidate>
            <TextField
              fullWidth
              margin="normal"
              id="useremail"
              type="email"
              label="Email"
              variant="outlined"
              {...register("useremail")}
              error={!!errors.useremail}
              helperText={errors.useremail?.message}
            />
            <TextField
              fullWidth
              margin="normal"
              id="password"
              type="password"
              label="Password"
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, backgroundColor: "#3b5d50", borderColor: "#3b5d50" }}
            >
              Submit
            </Button>
            <Box mt={2}>
              <small className="form-text text-muted">
                If you don't have an account?{" "}
                <Link to="/bliss/registration" className="text-info">Sign Up</Link>
              </small>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
