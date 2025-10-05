import React, { useContext } from 'react'
import { post_man } from './PostOffice'

const Home3 = () => {
    const letter = useContext(post_man)
    return (
        <div>{letter}</div>
    )
}

export default Home3