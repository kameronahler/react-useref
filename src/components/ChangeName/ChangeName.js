import React from 'react'

export default function ChangeName({ onBlur }) {
  return (
    <div>
      <label htmlFor='name-input'>Name</label>
      <input
        defaultValue={''}
        id={'name-input'}
        onBlur={onBlur}
        placeholder={'User'}
        type='text'
      />
    </div>
  )
}
