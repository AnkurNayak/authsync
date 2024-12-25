"use client";
import { useFormik } from "formik";
import { InputComponent, OptionInputComponent } from "../common/InputComponent";
import { signUpValidation, signInValidation } from "./ValidationSchema";

export const SignupForm = ({ modalData, setModalData, openModal }) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    setSubmitting,
    resetForm,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      designation: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpValidation,
    onSubmit: () => {
      setTimeout(() => {
        setSubmitting(false);
        setModalData(values);
        resetForm();
      }, 2000);
    },
  });

  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit}>
        <InputComponent
          label="Full Name"
          type="text"
          id="name"
          error={touched.name && errors.name}
          value={values.name}
          onValChange={handleChange}
          onValBlur={handleBlur}
        />
        <InputComponent
          label="Email"
          type="email"
          id="email"
          error={touched.email && errors.email}
          value={values.email}
          onValChange={handleChange}
          onValBlur={handleBlur}
        />
        <OptionInputComponent
          label="Designation"
          type="select"
          id="designation"
          error={touched.designation && errors.designation}
          value={values.designation}
          onValChange={handleChange}
          onValBlur={handleBlur}
          options={[
            { value: "", label: "Select a Designation" },
            { value: "front-end-developer", label: "Front-End Developer" },
            { value: "back-end-developer", label: "Back-End Developer" },
            { value: "full-stack-developer", label: "Full-Stack Developer" },
          ]}
        />
        <InputComponent
          label="Password"
          type="password"
          id="password"
          error={touched.password && errors.password}
          value={values.password}
          onValChange={handleChange}
          onValBlur={handleBlur}
        />
        <InputComponent
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          error={touched.confirmPassword && errors.confirmPassword}
          value={values.confirmPassword}
          onValChange={handleChange}
          onValBlur={handleBlur}
        />
        <div className="flex items-center my-8">
          <input type="checkbox" className="mr-2 h-4 w-4 cursor-pointer" />
          <div className="flex items-center">
            <span>I agree with</span>
            <span className="text-indigo-500 font-medium mx-1.5">Terms</span>
            <span>and</span>
            <span className="text-indigo-500 font-medium ml-1.5">
              Privacy Policy
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-white rounded-full px-4 py-3 w-full disabled:bg-indigo-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create your account"}
        </button>
      </form>
      {modalData && (
        <div className="flex items-center justify-center gap-2 text-sm mt-4">
          <div>Form Submitted succesfully!</div>
          <button className="font-semibold" onClick={openModal}>
            Click to view
          </button>
        </div>
      )}
    </>
  );
};

export const SignInForm = ({ modalData, setModalData, openModal }) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    setSubmitting,
    resetForm,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidation,
    onSubmit: () => {
      setTimeout(() => {
        setSubmitting(false);
        setModalData(values);
        resetForm();
      }, 2000);
    },
  });

  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit}>
        <InputComponent
          label="Email"
          type="email"
          id="email"
          error={touched.email && errors.email}
          value={values.email}
          onValChange={handleChange}
          onValBlur={handleBlur}
        />
        <InputComponent
          label="Password"
          type="password"
          id="password"
          error={touched.password && errors.password}
          value={values.password}
          onValChange={handleChange}
          onValBlur={handleBlur}
        />
        <button
          type="submit"
          className="bg-primary text-white rounded-full px-4 py-3 w-full mt-4 disabled:bg-indigo-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loggin in..." : "Log in"}
        </button>
      </form>
      {modalData && (
        <div className="flex items-center justify-center gap-2 text-sm mt-4">
          <div>Form Submitted succesfully!</div>
          <button className="font-semibold" onClick={openModal}>
            Click to view
          </button>
        </div>
      )}
    </>
  );
};
