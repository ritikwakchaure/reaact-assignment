import React, { useState } from 'react'

export const Two = () => {
    const [count,setCount] = useState("")
  return (
    <div>
        <button onClick={() => setCount(count +1)}>+</button>
        <span> {count} </span>
        <button onClick={() =>setCount(count -1 )}>-</button>
    </div>
  )
}
