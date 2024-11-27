import React from 'react'

export const Four = () => {

    const items = [1, 2, 3, 4, 5]
    return (
        <div>
            <ul>
                {items.map((item, index) => {
                   return <li key={index} >{item}</li>
                })}
            </ul>
        </div>
    )
}

