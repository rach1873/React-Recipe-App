import React, { useContext } from 'react'
import { LocalmarkContext } from './LocalmarkContext';

function Book(props) {


    const [localmarks, setLocalMarks] = useContext(LocalmarkContext)

    const removeBookmark = (e) => {

        const r = localmarks.filter(y => y !== null).filter(z => z !== undefined).filter(x => x.recipe.label !== e.target.id)

        setLocalMarks(r)

        localStorage.setItem('bookmark', JSON.stringify(r));

    }

    return (
        <div className='border-2 h-auto border-white m-2 flex flex-col items-center justify-between px-6 py-2 bg-gray-300 rounded-lg shadow-xl space-y-2 cursor-pointer'>
            <h1 className='uppercase underline'>{props.label}</h1>
            <small>Calories {props.calories.toFixed()}</small>
            <img src={props.img} alt={props.label} className='w-24 h-18' />
            <ul>
                {props.ingredientLines.map(x => <li>{x}</li>)}
            </ul>
            <small>Servings: {props.yield}</small>
            <div className='space-x-4'>
                <i className="fa-solid fa-trash text-3xl text-red-500" id={props.id} onClick={removeBookmark}></i>
            </div>
        </div>
    )
}

export default Book
