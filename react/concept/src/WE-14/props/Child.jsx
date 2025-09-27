// import React from 'react'

// const Child = (props) => {
//     console.log(props.name, 'props');
//     return (
//         <div>Hello {props.name}</div>
//     )
// }

// export default Child


// const Child = (props) => {
//     const {name} = props
//   return (
//     <div>Hello {name}</div>
//   )
// }

// export default Child

const Child = ({ name, age }) => {
    return (
        <div>Hello {name} {age}</div>
    )
}

export default Child