import React, { FormEvent, useState } from 'react'
import { FormState } from 'react-hook-form';

const FromsUsingStates = () => {
    const [person,setPerson] = useState({
        name:'',
        age:''
    })

function handleSubmit(event:FormEvent){
    event.preventDefault();
    console.log(person)
}
  return (
    <form action="" onSubmit={handleSubmit}>
       
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input value={person.name} onChange={(event)=>{setPerson({...person, name: event.target.value})}}  id="name" type="text" className="form-control" />
    </div>
    <div className="mb-3">
      <label htmlFor="age" className="form-label">Age</label>
      <input value={person.age} onChange={(event)=>{setPerson({...person, age:event.target.value})}}  id="age" type="number" className="form-control" />
    </div>
    <button className="btn btn-primary">Submit</button>
  </form>
  )
}

export default FromsUsingStates