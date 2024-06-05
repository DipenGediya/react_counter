import React, { useState } from 'react'

const App = () => {

  const [count, setcount] = useState(0)

  return (
    <div className='container'>
      <h1 className='ms-4'>{count}</h1>

      <button className='btn btn-outline-success me-3' onClick={()=>setcount(count+1)}>+</button>
      <button className='btn btn-outline-danger' onClick={()=>setcount(count-1)}>-</button>
  
    </div>
  )
}

export default App