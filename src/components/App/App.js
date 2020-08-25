import React, { useState, useRef } from 'react'
import ChangeName from '../ChangeName/ChangeName'
export default function App() {
  const [name, setName] = useState('User')
  const renderCount = useRef(1)
  const changeNameRef = useRef()

  const onBlur = (e) => {
    setName(e.currentTarget.value)
  }

  const focusInput = () => {
    changeNameRef.current.focus()
  }

  return (
    <div>
      <h1>
        <span>Hello, </span>
        <span onClick={focusInput}>{name}</span>
      </h1>
      <ChangeName onBlur={onBlur} ref={changeNameRef} />
      <p>{`Focused ${renderCount.current} times`}</p>
    </div>
  )
}
