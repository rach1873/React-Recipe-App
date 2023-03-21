import React, { useState, createContext } from 'react'


export const ClickContext = createContext();

export const ClickProvider = (props) => {

    const [click, updateClick] = useState(false);

    return (
        <ClickContext.Provider value={[click, updateClick]}>
            {props.children}
        </ClickContext.Provider>
    )
}
