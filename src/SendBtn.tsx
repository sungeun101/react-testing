import React from 'react'

export default function SendBtn(props: {
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>
  email: string
}) {
  return (
    <button
      type="submit"
      onClick={props.handleSubmit}
      disabled={Boolean(props.email === '')}
    >
      Send
    </button>
  )
}
