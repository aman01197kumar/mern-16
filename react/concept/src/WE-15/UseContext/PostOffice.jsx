import React, { createContext } from 'react'
import Home1 from './Home1'

export const post_man = createContext()
const PostOffice = () => {
    const letter = 'hello there!!!'
    return (
        // <div>
        //     <Home1 letter = {letter}/>
        // </div>
        <post_man.Provider value={letter}>
            <Home1 />
        </post_man.Provider>
    )
}

export default PostOffice