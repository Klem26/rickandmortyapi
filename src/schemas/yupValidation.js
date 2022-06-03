import * as yup from "yup";

const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{5,}/;
export const validationSchema = yup.object().shape({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .matches(passwordRegexp, { message: "Please create a stronger password" })
    .min(5, "Password should be of minimum 5 characters length")
    .required("Password is required"),
});
