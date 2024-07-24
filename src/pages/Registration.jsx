import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import commonStyles from "../styles/commonStyles"; // Import common styles

// Schema validation using Yup
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phonenumber: yup
    .string()
    .matches(/^\+?\d{8,14}$/, "Phone number must be between 8 to 14 digits")
    .required("Phone number is required"),
});

const Registration = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form submitted", data);
    const { name, email, password, phonenumber, address, state, pincode } =
      data;
    const userData = {
      name,
      email,
      password,
      phonenumber,
      address,
      state,
      pincode,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/bliss/login");
  };

  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-md-4 mx-auto p-5 border border-2 rounded-3 my-5">
          <h2 className="text-center">CREATE AN ACCOUNT</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              label="Your Name"
              variant="outlined"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
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
            <TextField
              fullWidth
              margin="normal"
              id="confirmpassword"
              type="password"
              label="Confirm Password"
              variant="outlined"
              {...register("confirmpassword")}
              error={!!errors.confirmpassword}
              helperText={errors.confirmpassword?.message}
            />
            <TextField
              fullWidth
              margin="normal"
              id="phonenumber"
              type="text"
              label="Phone Number"
              variant="outlined"
              {...register("phonenumber")}
              error={!!errors.phonenumber}
              helperText={errors.phonenumber?.message}
            />
            <TextField
              fullWidth
              margin="normal"
              id="address"
              label="Your Address"
              variant="outlined"
              multiline
              rows={4}
              {...register("address")}
            />
            <TextField
              fullWidth
              margin="normal"
              id="state"
              label="Your State"
              variant="outlined"
              {...register("state")}
            />
            <TextField
              fullWidth
              margin="normal"
              id="pincode"
              label="Your Pincode"
              variant="outlined"
              {...register("pincode")}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={commonStyles.button} // Apply common styles
            >
              Submit
            </Button>
            <small className="form-text text-muted">
              Already have an account?{" "}
              <Link to="/bliss/login" className="text-info">
                Login
              </Link>
            </small>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Registration;
