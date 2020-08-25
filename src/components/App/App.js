import React, { useState } from 'react'
import ChangeName from '../ChangeName/ChangeName'
export default function App() {
  const [name, setName] = useState('User')

  const updateName = (e) => {
    setName(e.currentTarget.value)
  }
  return (
    <div>
      <h1>{`Hello, ${name}`}</h1>
      <ChangeName onBlur={updateName} />
    </div>
  )
}
