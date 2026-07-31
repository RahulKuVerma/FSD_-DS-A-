import React from 'react'

const Header = () => {
  return (
    <div style={{border:'2px solid violet',width:'1532px',height:'100px',backgroundColor:'lightgreen',position: 'fixed', top: 0,left: 0, display: 'flex', alignItems: 'center', justifyContent: 'left',gap:'500px'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQOXeLOmLHzIuIAMudLEIMY7k2Czu3cwjLwBh5-z9YiZtrMKKagTK1s1K&s=10" alt="Logo" height="100" width="100" style={{ borderRadius: '50%' }} />
        <h1 style={{ color: 'red', textAlign: 'center' }}>Welcome to our hotel</h1>
    </div>
  )
}

export default Header
