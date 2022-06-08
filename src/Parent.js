import { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Panonit')

    console.log('Parent Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Codolis')}>Change name</button>
            <br />
            <br />
            <Child passedName={name} />
        </div>
    )
}