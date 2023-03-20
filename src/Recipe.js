import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

function Recipe(props) {


    const handleBookMarks = (e) => {
        props.gb(e.target.id)
        console.log(e.target.id)
    }

    return (
        <div className='border-2 h-auto border-white m-2 flex flex-col items-center px-6 py-2 bg-gray-300 rounded-lg shadow-xl space-y-2 cursor-pointer'>
            <h1 className='uppercase underline'>{props.label}</h1>
            <small>Calories {props.calories.toFixed()}</small>
            <img src={props.img} alt={props.label} className='w-24 h-18' />
            <ul>
                {props.ingredientLines.map(x => <li key={uuidv4()}>{x}</li>)}
            </ul>
            <small>Servings: {props.yield}</small>
            <div className='space-x-4'>
                <i className="fa-solid fa-bookmark text-3xl text-orange-500" id={props.label} onClick={handleBookMarks}></i>
            </div>
        </div>
    )
}

export default Recipe
