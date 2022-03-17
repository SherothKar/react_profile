import React from 'react'
import { useState } from 'react/cjs/react.development';

function InputTwo() {
  const [name, setName] = useState({ firstname: '', lastname: '' });
  return (
    <div>
      <input type='text' placeholder='first name' value={name.firstname} onChange={e => setName({ ...name, firstname: e.target.value })} />
      <input type='text' placeholder='last name' value={name.lastname} onChange={e => setName({ ...name, lastname: e.target.value })} />
      <h1>Name - {name.firstname}{name.lastname}</h1>
      <h3>{JSON.stringify(name)}</h3>
    </div>

  )
}
export default InputTwo;