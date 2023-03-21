import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookmarkContext } from './Bookmarkcontext';
import Recipe from './Recipe';
import Book from './Book';
import { LocalmarkContext } from './LocalmarkContext';
import RecipeMain from './RecipeMain';
import { ClickContext } from './Clickcontext';
function Bookmark() {



    const [bookmark, updateBookMark] = useContext(BookmarkContext);
    const marksArray = JSON.parse(localStorage.getItem('bookmark')).filter(x => x !== null);
    const [localmarks, setLocalMarks] = useContext(LocalmarkContext)
    const [click, updateClick] = useContext(ClickContext);



    const reload = () => {
        updateClick(true);
    }

    return (
        <div className=''>
            <div className='flex items-center gap-2 justify-center'>
                <Link to='/'>
                    <i className="fa-solid fa-house text-3xl flex justify-center text-orange-500" onClick={reload}></i>
                </Link>
                <h1 className='text-4xl text-white underline'>BookMarks</h1>
            </div>
            <div className='grid grid-cols-5 max-md:grid-cols-1'>
                {/* {marksArray.map((x) => {
                    return <Recipe key={x.recipe.label} label={x.recipe.label} calories={x.recipe.calories} img={x.recipe.image} yield={x.recipe.yield} ingredientLines={x.recipe.ingredientLines} />
                })} */}
                {marksArray.map((x) => {
                    return <Book id={x.recipe.label} key={x.recipe.label} label={x.recipe.label} calories={x.recipe.calories} img={x.recipe.image} yield={x.recipe.yield} ingredientLines={x.recipe.ingredientLines} />
                })}
            </div>

        </div>
    )
}

export default Bookmark
