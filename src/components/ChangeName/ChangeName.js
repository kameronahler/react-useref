import React, { forwardRef } from 'react'

const ChangeName = ({ onBlur }, ref) => {
  return (
    <div>
      <label htmlFor='name-input'>Name</label>
      <input
        defaultValue={'User'}
        id={'name-input'}
        onBlur={onBlur}
        placeholder={'User'}
        ref={ref}
        type='text'
      />
    </div>
  )
}

export default forwardRef(ChangeName)
