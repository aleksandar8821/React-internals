import { useEffect } from 'react'

export const Child = () => {
    useEffect(() => {
        console.log('Child Effect')
    })

    console.log('Child Render')

    return (
        <div>
            Child component
        </div>
    )
}
