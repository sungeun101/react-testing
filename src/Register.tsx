import React, { useState } from 'react'

const Register = (props: {
  handleRegister: (arg0: { email: string; password: string }) => void
}) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event: { target: { id: any; value: any } }) => {
    const { id, value } = event.target
    setValues({ ...values, [id]: value })
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (values.password.length > 3) {
      props.handleRegister(values)
    }
  }

  return (
    <main>
      <h1>Register here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Create Password</label>
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default Register
