import React from 'react';
import { Formik } from 'formik';
class FormikComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    courses: 'React',
  };
  validate = (formData) => {
    var errors = {};
    if (formData.firstName === '') errors.firstName = 'FirstName is required';
    if (formData.lastName === '') errors.lastName = 'LastName is required';
    if (formData.email === '') errors.email = 'Email is required';
    if (formData.gender === '') errors.gender = 'Gender is required';
    return errors;
  };
  handleSubmit = (formData) => {
    console.log(formData);
  };
  render() {
    return (
      <>
        <h3> Formik Component </h3>
        <Formik
          initialValues={this.initialValue}
          validate={(formData) => this.validate(formData)}
          onSubmit={(formData) => this.handleSubmit(formData)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label> First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{' '}
                <br />
                <span style={{ color: 'red' }}>
                  {touched.firstName && errors.firstName}
                </span>
              </div>
              <br />
              <div>
                <label> Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.lastName && errors.lastName}
                </span>
              </div>
              <br />
              <div>
                <label> Email: </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {touched.email && errors.email}
                </span>
              </div>
              <br />
              <div>
                <label> Gender: </label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Female
                <br />
                <span style={{ color: 'red' }}>
                  {touched.gender && errors.gender}
                </span>
              </div>
              <br />
              <div>
                <label> Courses: </label>
                <select
                  name="courses"
                  value={values.courses}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="react"> React </option>
                  <option value="node"> Node </option>
                  <option value="mysql"> MySQL </option>
                  <option value="mongo"> Mongo </option>
                </select>
              </div>
              <br />
              <button type="submit"> Submit </button> &nbsp;
              <button type="button"> Reset </button> &nbsp;
            </form>
          )}
        </Formik>
      </>
    );
  }
}

export default FormikComponent;
