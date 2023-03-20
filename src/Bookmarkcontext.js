import React, { useState, createContext } from 'react'
import Bookmark from './Bookmark';

export const BookmarkContext = createContext();

export const BookmarkProvider = (props) => {

    const [bookmark, updateBookMark] = useState([]);

    return (
        <BookmarkContext.Provider value={[bookmark, updateBookMark]}>
            {props.children}
        </BookmarkContext.Provider>
    )
}


