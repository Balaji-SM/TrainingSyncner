import React, { useState } from "react";
import "./App.css";
import { useFormik } from "formik";
import Popup from "./Components/Popup.jsx";

const validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "**Required";
  }
  if (!values.lastname) {
    errors.lastname = "**Required";
  }
  if (!values.email) {
    errors.email = "**Required";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = "Invalid email";
  }
  if (!values.password) {
    errors.password = "**Required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be at least 4 characters";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "**Required";
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = "Passwords do not match";
  }

  return errors;
};

const App = () => {
  const [bool, setBool] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit: (values) => {
      setBool(true);
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className="main">
      <div className="signup">
        <h2>Sign Up Here</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
            placeholder="First Name..."
            name="firstname"
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <span>{formik.errors.firstname}</span>
          ) : null}

          <input
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            onBlur={formik.handleBlur}
            placeholder="Last Name..."
            name="lastname"
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <span>{formik.errors.lastname}</span>
          ) : null}

          <input
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Email..."
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}

          <input
            type="password"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            placeholder="Password..."
            name="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <span>{formik.errors.password}</span>
          ) : null}

          <input
            type="password"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}
            onBlur={formik.handleBlur}
            placeholder="Confirm Password..."
            name="confirmpassword"
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <span>{formik.errors.confirmpassword}</span>
          ) : null}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="message">{bool && <Popup />}</div>
    </div>
  );
};

export default App;
