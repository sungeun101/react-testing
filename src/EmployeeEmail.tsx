import { useState } from 'react'
import SendBtn from './SendBtn'

const EmployeeEmail = () => {
  const [email, setEmail] = useState('')

  const handleChange = (event: { target: { value: string } }) =>
    setEmail(event.target.value.split(' ').join('.'))

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div className="w-50 m-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="enter your name"
          aria-label="enter your name"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <span className="input-group-text">@software-plus.com</span>
        </div>
      </div>
      {email ? <span>{`${email}@software-plus.com`}</span> : null}
      <SendBtn handleSubmit={handleSubmit} email={email} />
    </div>
  )
}

export default EmployeeEmail
