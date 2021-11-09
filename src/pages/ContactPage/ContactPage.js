import "./ContactPage.css";
import React from "react";
import { Formik } from "formik";

const ContactPage = () => {
  const handleLabel = (event) => {
    const showLabel = "floating-label-form-group-with-value";
    event.target.value !== ""
      ? event.target.parentElement.classList.add(showLabel)
      : event.target.parentElement.classList.remove(showLabel);
  };
  const initValues = { name: "", email: "", phone: "", message: "" };
  const validateValues = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (
      !/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
        values.phone
      )
    ) {
      errors.phone = "Invalid phone number";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <p>
            Want to get in touch? Fill out the form below to send me a message
            and I will get back to you as soon as possible!
          </p>
          <Formik
            initialValues={initValues}
            validate={(values) => validateValues(values)}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="form-floating">
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={(e) => {
                        handleChange(e);
                        handleLabel(e);
                      }}
                    />
                    {touched.name && (
                      <p className="help-block text-danger">{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={(event) => {
                        handleChange(event);
                        handleLabel(event);
                      }}
                    />
                    {touched.email && (
                      <p className="help-block text-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      id="phone"
                      name="phone"
                      onBlur={handleBlur}
                      value={values.phone}
                      onChange={(e) => {
                        handleChange(e);
                        handleLabel(e);
                      }}
                    />
                    {touched.phone && (
                      <p className="help-block text-danger">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="message">Message</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={(e) => {
                        handleChange(e);
                        handleLabel(e);
                      }}
                      onBlur={handleBlur}
                    ></textarea>
                    {touched.message && (
                      <p className="help-block text-danger">{errors.message}</p>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="button-submit">
                    Send
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
