import React, {useState} from 'react'

export const Rating = ({name}) => {
const [points, setPoints] = useState(0);

  return (
    <div>
        <span>{name}</span>
        <span>{points}</span>
        <button onClick={() => setPoints(points + 1)}>+</button>
    </div>
  )
}
