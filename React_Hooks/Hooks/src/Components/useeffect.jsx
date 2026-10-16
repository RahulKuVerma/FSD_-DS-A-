import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  
  const[formData,setformData] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  useEffect( () => {

    console.log('form data is ', formData)
  },[formData]

  )

   const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
    console.log('Form submitted:', formData);
  }
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <input type="text" placeholder='name' value={formData.name} onChange={handleChange} />
        <br/>
        <input type="email" placeholder='email' value={formData.email} onChange={handleChange} />
        <br/>
        <input type="password" placeholder='password' value={formData.password} onChange={handleChange} />
        <br/>
        <button type='submit'>Submit</button>


      </form>



    </div>
  )
}

export default App