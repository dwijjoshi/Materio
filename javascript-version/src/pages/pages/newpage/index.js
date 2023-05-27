import React from 'react'

const index = () => {
  let user = 'null'
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = JSON.parse(localStorage.getItem('user'))

    user = item
  }
  console.log(user)

  return (
    <div>
      <form class='formClass'>
        <label>Username</label>
        <input className='input' type='text' value={user.username}></input>
        <label>Email</label>
        <input className='input' type='email' value={user.email}></input>
        <label>FIrst Name</label>
        <input className='input' type='text' value={user.firstName}></input>
        <label>Last Name</label>
        <input className='input' type='text' value={user.lastName}></input>
        <label>Gender</label>
        <input className='input' type='text' value={user.gender}></input>
      </form>
    </div>
  )
}

export default index
