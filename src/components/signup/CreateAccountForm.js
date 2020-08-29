import React from 'react'
import { useFormik } from 'formik'

const CreateAccountForm = ({ type }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phoneNumber: ''
    },
    onSubmit: (values) => {
      fetch('http://localhost:3001/users', {
        method: 'POST',
        // Algo así es lo que necesito pero antes implementar el router para guardar el estado de type:
        body: JSON.stringify({user: {...values, type: type}}),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="phoneNumber"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateAccountForm
