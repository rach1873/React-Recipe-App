import React, { useState, createContext } from 'react'
import RecipeMain from './RecipeMain';

export const LocalmarkContext = createContext();

const lm = JSON.parse(window.localStorage.getItem('bookmark') || "[]")
export const LocalmarkProvider = (props) => {

    const [localmarks, setLocalMarks] = useState(lm);

    return (
        <LocalmarkContext.Provider value={[localmarks, setLocalMarks]}>
            {props.children}
        </LocalmarkContext.Provider>
    )
}