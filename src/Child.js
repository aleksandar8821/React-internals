import React from 'react'

export const Child = ({ passedName }) => {
    console.log('Child Render')
    return (
        <div>
            Child component - {passedName}
        </div>
    )
}

export const MemoizedChild = React.memo(Child);