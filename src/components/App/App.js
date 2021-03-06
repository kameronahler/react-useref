import React, { useState, useRef, useEffect } from 'react'
import ChangeName from '../ChangeName/ChangeName'
export default function App() {
  const [name, setName] = useState('User')
  const renderCount = useRef(1)
  const changeNameRef = useRef()

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const onBlur = (e) => {
    setName(e.target.value)
  }

  const focusInput = () => {
    changeNameRef.current.focus()
  }

  return (
    <div>
      <h1>
        <span>{`Hello, ${name}`}</span>
        <button aria-label={'Edit name'} onClick={focusInput}>
          <i className='material-icons'>edit</i>
        </button>
      </h1>
      <ChangeName onBlur={onBlur} ref={changeNameRef} />
      <p>{`Rendered ${renderCount.current} ${
        renderCount.current > 1 ? 'times' : 'time'
      }`}</p>
    </div>
  )
}
