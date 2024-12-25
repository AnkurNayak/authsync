import * as Yup from "yup";

export const signUpValidation = Yup.object({
  name: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name should be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  designation: Yup.string()
    .required("Designation is required")
    .notOneOf([""], "Please select a designation"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const signInValidation = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be at least 6 characters"),
});
