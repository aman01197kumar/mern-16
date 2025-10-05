import React from 'react'

const Child = ({ func }) => {
    console.log('child called');
    return (
        <div>Child</div>
    )
}

export default React.memo(Child)