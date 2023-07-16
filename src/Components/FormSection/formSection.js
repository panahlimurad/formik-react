import React from "react";
import PropTypes from "prop-types";
import style from "./formSection.module.css"
import {Formik} from 'formik'
import * as Yup from 'yup';

export class FormSection extends React.Component {

 
  constructor() {
    super();
    this.state = {
      text: "",
    };



  }

  render() {
    return (
      <div className={style.formSection}>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            fullName: Yup.string().required("Please fill in the box"),
            email: Yup.string().required("Please fill in the box"),
            password: Yup.string().required("Please fill in the box"),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            this.setState({ text: values });
              this.setState({ text: values }, () => {
                const formText = this.state.text
                this.props.addList(formText)
              });
            resetForm();
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            touched,
            handleReset,
            dirty,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <h3>Register</h3>
              </div>
              <div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Fullname"
                  value={values.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && touched.fullName && (
                  <div className={style.errorMessage}>{errors.fullName}</div>
                )}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <div className={style.errorMessage}>{errors.email}</div>
                )}
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <div className={style.errorMessage}>{errors.password}</div>
                )}
              </div>
              <button type="submit" disabled={!dirty || isSubmitting}>
                Register
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

FormSection.propTypes = {
  list: PropTypes.array,
};
