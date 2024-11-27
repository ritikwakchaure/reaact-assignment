import React, { useEffect, useState } from 'react'

export const Seven = () => {
    const [time, setTime] = useState(50)
    useEffect(()=>{
        if (time>0) {
            const timer = setInterval(() => setTime(time-1),1000) 
            //  return ()=>clearInterval(timer)   
            
            
        }    })
  return (
    <div>
        time left :{time} second
    </div>
  )
}
