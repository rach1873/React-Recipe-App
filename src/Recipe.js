import React from 'react'

function Recipe(props) {
    return (
        <div className='border-2 h-auto border-white m-2 flex flex-col items-center px-6 py-2 bg-gray-300 rounded-lg shadow-xl space-y-2 cursor-pointer'>
            <h1 className='uppercase underline'>{props.label}</h1>
            <small>Calories {props.calories.toFixed()}</small>
            <img src={props.img} alt={props.label} className='w-24 h-18' />
            <ul>
                {props.ingredientLines.map(x => <li>{x}</li>)}
            </ul>
            <small>Servings: {props.yield}</small>

        </div>
    )
}

export default Recipe
