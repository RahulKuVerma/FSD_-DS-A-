// UseEffect Hook is used to perform side effects in functional components.
//  It can be used for data fetching, subscriptions, or manually changing the DOM in React components. 
// The useEffect Hook takes two arguments: a function that contains the side effect logic and an optional array of dependencies that determine when the effect should run.

// useState is a Hook that allows you to add state to functional components.

// import React, { useState, useEffect } from 'react';

// const App = () => {

//   const [formData, setformData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   useEffect(() => {
//     console.log('Form data is', formData);
//   }, [formData]);

//   const handleChange = (e) => {
//     setformData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     alert(`Form submitted with data: ${JSON.stringify(formData)}`);

//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div>
//       <h2>My App</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <br /><br />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;


// useRef Hook is used to create a reference to a DOM element or a value that persists across renders in functional components.
//  It allows you to access and manipulate the underlying DOM nodes directly, similar to how you would use refs in class components.


import { useRef } from "react";

function App() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your name"
            />

            <button onClick={handleClick}>
                Focus Input
            </button>
        </div>
    );
}

export default App;
