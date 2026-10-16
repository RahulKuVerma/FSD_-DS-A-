import React, { useState } from 'react'

const App = () => {
  
  const[formData,setformData] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  useState( () => {

    console.log('form data is ', formData)
  },[formData]

  )

  return (
    <div>
      <form action="">

        <input type="text" placeholder='name' value={formData.name} onChange={handleChange} />
        <br/>
        <input type="email" placeholder='email' value={} onChange={} />
        <br/>
        <input type="password" placeholder='password' value={} onChange={} />
        <br/>
        <button type='submit'>Submit</button>


      </form>



    </div>
  )
}

export default App