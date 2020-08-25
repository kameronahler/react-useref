import React, { useState, useRef } from 'react'
import ChangeName from '../ChangeName/ChangeName'
export default function App() {
  const [name, setName] = useState('User')
  const renderCount = useRef(1)
  const changeNameRef = useRef()

  const onBlur = (e) => {
    setName(e.target.value)
    renderCount.current = renderCount.current + 1
  }

  const focusInput = () => {
    changeNameRef.current.focus()
  }

  return (
    <div>
      <h1>
        <span>Hello, </span>
        <span>{name}</span>
        <button onClick={focusInput}>
          <i className='material-icons'>edit</i>
        </button>
      </h1>
      <ChangeName onBlur={onBlur} ref={changeNameRef} />
      <p>{`Rendered ${renderCount.current} times`}</p>
    </div>
  )
}
